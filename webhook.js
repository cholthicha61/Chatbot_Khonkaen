const { WebhookClient } = require("dialogflow-fulfillment");
const { Payload } = require("dialogflow-fulfillment");
const axios = require("axios");
const wordcut = require("wordcut");
const natural = require("natural");
const TfIdf = natural.TfIdf;
const nlp = require("compromise");
const cheerio = require("cheerio");
const levenshtein = require("fast-levenshtein");
wordcut.init();
const fs = require("fs");
const Fuse = require("fuse.js");
const line = require("@line/bot-sdk");
require("dotenv").config();
const client = new line.Client({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
});

const { createDistrictFlexMessage } = require("./flexMessages/district");
const createTypeplacesFlexMessage = require("./flexMessages/typePlace");
const createDistrictTypeFlexMessage = require("./flexMessages/districtType");
const { createrestaurantFlexMessage } = require("./flexMessages/restaurant");
const { createkkutypeFlexMessage } = require("./flexMessages/kkctype");
const locations = require("./flexMessages/locations");

const saveConversation = async (
  questionText,
  answer,
  lineId,
  placeId,
  eventId,
  sourceType,
  webAnswerId,
  dbClient
) => {
  try {
    if (!dbClient) {
      console.warn(
        "⚠️ Database client is not available. Skipping saveConversation."
      );
      return;
    }
    if (!lineId) {
      console.warn("⚠️ Skipping saveConversation: lineId is null.");
      return;
    }

    const userId = await ensureUserExists(lineId, dbClient); // ✅ Always ensure user exists

    if (!userId) {
      console.warn("⚠️ Unable to get user ID. Skipping saveConversation.");
      return;
    }

    const query = `
      INSERT INTO conversations (question_text, answer_text, user_id, place_id, event_id, source_type, web_answer_id, created_at) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, NOW());
    `;

    await dbClient.query(query, [
      questionText,
      answer,
      userId,
      placeId,
      eventId,
      sourceType,
      webAnswerId,
    ]);

    console.log("✅ Conversation saved successfully.");
  } catch (err) {
    console.error("❌ Error saving conversation:", err);
  }
};

const ensureUserExists = async (lineId, dbClient) => {
  try {
    if (!lineId) {
      console.warn("⚠️ Invalid lineId received: null or undefined.");
      return null; // Return null instead of proceeding
    }

    let user = await getUserIdFromLineId(lineId, dbClient);
    if (user) {
      return user; // ✅ If user exists, return the ID
    }

    console.log(`ℹ️ User not found, creating new user for lineId: ${lineId}`);

    const insertUserQuery = `
      INSERT INTO users (line_id) VALUES ($1)
      RETURNING id;
    `;

    const result = await dbClient.query(insertUserQuery, [lineId]);
    return result.rows[0].id; // ✅ Return new user ID
  } catch (err) {
    console.error("❌ Error ensuring user exists:", err);
    throw err;
  }
};

const saveWebAnswer = async (
  answerText,
  placeName,
  intentType,
  isFromWeb,
  dbClient,
  imageUrl,
  imageDescription,
  contactLink
) => {
  try {
    const extractDetailsFromFlexMessage = (flexMessage) => {
      try {
        const flexObject =
          typeof flexMessage === "string"
            ? JSON.parse(flexMessage)
            : flexMessage;

        if (
          flexObject &&
          flexObject.contents &&
          flexObject.contents.body &&
          Array.isArray(flexObject.contents.body.contents)
        ) {
          const contents = flexObject.contents.body.contents;

          let placeDescription = contents
            .filter((item) => item.type === "text" && item.wrap)
            .map((item) => item.text)
            .join("\n")
            .replace(/^\d+\.\s*/, "")
            .replace(/\s{2,}/g, " ")
            .replace(/ขอบคุณรูปภาพจาก.*/gi, "")
            .replace(/ภาพจาก.*/gi, "")
            .replace(imageDescription, "")
            .trim();

          const cleanPlaceName = placeName.replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
          ); // Escape special chars
          placeDescription = placeDescription
            .replace(new RegExp(`^${cleanPlaceName}\\s*`, "gi"), "")
            .trim();

          return placeDescription || "ไม่มีข้อมูลรายละเอียดสถานที่";
        } else {
          return "ไม่สามารถดึงข้อมูลจาก Flex Message ได้";
        }
      } catch (error) {
        console.error("Error extracting details from Flex Message:", error);
        return "เกิดข้อผิดพลาดในการแปลงข้อมูล";
      }
    };

    const finalAnswerText =
      typeof answerText === "object" && answerText.type === "flex"
        ? extractDetailsFromFlexMessage(answerText)
        : answerText;

    if (!isFromWeb || !finalAnswerText || finalAnswerText.trim() === "") {
      console.log(
        "This answer was not from a website or is empty, not saving."
      );
      return;
    }

    const checkQuery = `
      SELECT 1 
      FROM web_answer 
      WHERE place_name = $1 AND intent_type = $2
    `;
    const checkResult = await dbClient.query(checkQuery, [
      placeName,
      intentType,
    ]);

    if (checkResult.rows.length > 0) {
      console.log("Answer already exists in the database, skipping save.");
      return;
    }

    const isValidImageUrl = (url) => {
      return (
        typeof url === "string" && url.startsWith("http") && url.includes(".")
      );
    };

    const finalImageUrl = isValidImageUrl(imageUrl) ? imageUrl : "ไม่มีรูปภาพ";

    const insertQuery = `
      INSERT INTO web_answer (place_name, answer_text, intent_type, image_link, image_detail, contact_link)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;
    const values = [
      placeName,
      finalAnswerText, 
      intentType,
      finalImageUrl, 
      imageDescription || "ไม่มีรายละเอียดรูปภาพ",
      contactLink || "ไม่มีข้อมูลติดต่อ",
    ];
    await dbClient.query(insertQuery, values);

    console.log("✅ Saved answer from website to the database.");
  } catch (err) {
    console.error("❌ Error saving web answer:", err.stack);
  }
};

const saveUser = async (userProfile, dbClient) => {
  if (!userProfile || !userProfile.userId) {
    // console.error("User profile or userId is missing.");
    return;
  }

  const query = `
    INSERT INTO users (line_id, display_name, picture_url, status_message)
    VALUES ($1, $2, $3, $4)
    ON CONFLICT (line_id) DO UPDATE 
    SET display_name = $2, picture_url = $3, status_message = $4;
  `;

  const values = [
    userProfile.userId,
    userProfile.displayName,
    userProfile.pictureUrl,
    userProfile.statusMessage,
  ];

  try {
    await dbClient.query(query, values);
    // console.log(`User with line_id ${userProfile.userId} saved successfully.`);
  } catch (err) {
    console.error(
      `Error saving user with line_id ${userProfile.userId}:`,
      err.stack
    );
  }
};

const getUserIdFromLineId = async (lineId, dbClient) => {
  const query = "SELECT id FROM users WHERE line_id = $1";
  const result = await dbClient.query(query, [lineId]);

  console.log("Fetched user ID from database:", result.rows);

  if (result.rows.length > 0) {
    return result.rows[0].id;
  } else {
    return null;
  }
};

const getUserProfile = async (lineId) => {
  try {
    const userLineId = String(lineId);

    if (!userLineId || typeof userLineId !== "string") {
      console.error("Invalid lineId: It should be a non-empty string.");
      return null;
    }

    const response = await axios.get(
      `https://api.line.me/v2/bot/profile/${userLineId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.data.userId) {
      console.error("No userId found in the profile response.");
      return null;
    }

    return {
      userId: response.data.userId,
      displayName: response.data.displayName,
      pictureUrl: response.data.pictureUrl,
      statusMessage: response.data.statusMessage,
    };
  } catch (error) {
    if (error.response) {
      console.error("Error fetching user profile:", error.response.data);
    } else {
      console.error("Error fetching user profile:", error.message);
    }
    return null;
  }
};

const fetchHTMLAndSaveToJSON1 = async (url, outputFilePath) => {
  try {
    // console.log(`Fetching HTML from: ${url}`);
    const { data: html } = await axios.get(url);
    console.log("Fetched HTML successfully.");

    const $ = cheerio.load(html);
    let results = [];
    const exemptPlaces = [
      "เอ๊กซอติค เพท แอนด์ ฟาวเทน โชว์ (Khonkaen Exotic Pets and Fountain show)",
    ];

    // Process H1 tags
    $("h1").each((i, el) => {
      const mainHeading = $(el).text().trim();
      results.push({
        หัวข้อหลัก: mainHeading,
      });
    });

    $("h2").each((i, el) => {
      let locationName = $(el).text().trim();
      locationName = locationName.replace(/^\d+(\.|-|:|\))?\s*/, "");
      locationName = locationName.replace(
        /วัดทุ่งเศรษฐี\s*\(มหารัตนเจดีย์ศรีไตรโลกธาตุ\)/,
        "วัดทุ่งเศรษฐี"
      );
      if (!exemptPlaces.includes(locationName)) {
        // ลบภาษาอังกฤษทั้งหมดที่อยู่ในวงเล็บ เช่น "(Phu Pha Man National Park)"
        locationName = locationName.replace(/\([^ก-๙]*\)/g, "").trim();
      }
      if (
        !locationName ||
        [
          "หมวดหมู่ : Travel Guide",
          "สมัครออนไลน์ด้วยตนเอง",
          "ลงชื่อให้เจ้าหน้าที่ติดต่อกลับ",
        ].includes(locationName)
      )
        return; // Skip irrelevant entries

      const locationDetailImg = $(el)
        .prevUntil("h2")
        .filter((i, p) => $(p).find("img").length > 0)
        .first()
        .text()
        .trim();
      const listImg = $(el)
        .prevUntil("h2")
        .find("img")
        .map((i, img) => $(img).attr("src").trim())
        .get();

      const locationDetail = $(el).next("p").text().trim();
      const listItems = $(el)
        .nextUntil("h2", "ul")
        .find("li")
        .map((i, li) => $(li).text().trim())
        .get();

      // Only add entries with relevant data
      if (
        locationName ||
        locationDetail ||
        listImg.length > 0 ||
        listItems.length > 0
      ) {
        results.push({
          สถานที่: locationName,
          รูปภาพ: listImg,
          รายละเอียดรูปภาพ: locationDetailImg,
          รายละเอียด: locationDetail,
          ข้อมูลที่ค้นพบ: listItems,
        });
      }
    });

    if (results.length === 0) {
      console.log("No data found. Please check the website structure.");
      return;
    }

    fs.writeFileSync(outputFilePath, JSON.stringify(results, null, 2), "utf8");
    console.log(`Data saved to ${outputFilePath}`);
  } catch (error) {
    console.error("Error fetching and saving data:", error);
  }
};

fetchHTMLAndSaveToJSON1(
  "https://www.ktc.co.th/ktcworld/travel-service/travel-story/thailand/attraction/khon-kaen-enjoyed",
  "./data/place1.json"
);

const fetchHTMLAndSaveToJSON2 = async (url, outputFilePath) => {
  try {
    const axios = require("axios");
    const cheerio = require("cheerio");
    const fs = require("fs");

    // Fetch HTML from the given URL
    const { data: html } = await axios.get(url);

    const $ = cheerio.load(html);
    let results = [];

    $("h1").each((i, el) => {
      const mainHeading = $(el).text().trim();
      results.push({
        หัวข้อหลัก: mainHeading,
      });
    });

    $("h3").each((i, el) => {
      let locationName = $(el).text().trim();
      locationName = locationName.replace(/^\d+(\.|-|:|\))?\s*/, "");

      if (
        !locationName ||
        ["ชมความบันเทิง แบบไม่อั้น24ชม. ได้ที่นี่", "Tag"].includes(
          locationName
        )
      )
        return;

      const listImg = $(el)
        .nextUntil("h3")
        .find("p img[src]")
        .map((i, img) => $(img).attr("src")?.trim())
        .get();

      const imageDetails = $(el)
        .nextUntil("h3")
        .find("p em")
        .first()
        .text()
        .trim();

      const locationDetail = $(el)
        .nextUntil("h3", "p")
        .not(":has(img)")
        .text()
        .trim();

      const listItems = $(el)
        .nextUntil("h3", "ul")
        .find("li")
        .map((i, li) => $(li).text().trim())
        .get();

      // Filter out entries with no significant data
      if (
        locationName ||
        (listImg.length > 0 && listImg[0] !== "ไม่มีรูปภาพ") ||
        imageDetails ||
        locationDetail ||
        listItems.length > 0
      ) {
        results.push({
          สถานที่: locationName,
          รูปภาพ: listImg.length > 0 ? listImg : "ไม่มีรูปภาพ",
          รายละเอียดรูปภาพ: imageDetails || "ขอบคุณรูปภาพจาก : เว็บไซต์ trueid",
          รายละเอียด: locationDetail || "ไม่มีรายละเอียด",
          ข้อมูลที่ค้นพบ: listItems,
        });
      }
    });

    if (results.length === 0) {
      console.log(
        "No significant data found. Please check the website structure."
      );
      return;
    }

    fs.writeFileSync(outputFilePath, JSON.stringify(results, null, 2), "utf8");
    console.log(`Data saved to ${outputFilePath}`);
  } catch (error) {
    console.error("Error fetching and saving data:", error);
  }
};

fetchHTMLAndSaveToJSON2(
  "https://travel.trueid.net/detail/oe7zQQkxMRRq",
  "./data/place2.json"
);

const fetchHTMLAndSaveToJSON3 = async (url, outputFilePath) => {
  try {
    // console.log(`Fetching HTML from: ${url}`);
    const { data: html } = await axios.get(url);
    console.log("Fetched HTML successfully.");

    const $ = cheerio.load(html);
    let results = [];
    // Process H1 tags
    $("h1").each((i, el) => {
      const mainHeading = $(el).text().trim();
      results.push({
        หัวข้อหลัก: mainHeading,
      });
    });

    $("h2").each((i, el) => {
      let locationName = $(el).text().trim();
      locationName = locationName.replace(/^\d+(\.|-|:|\))?\s*/, "");
      locationName = locationName.replace(/\([^ก-๙]*\)/g, "").trim();

      if (!locationName || ["Post navigation"].includes(locationName)) return;

      const imageDetails = $(el)
        .nextUntil("h2")
        .filter((i, p) => $(p).find("img").length > 0)
        .first()
        .text()
        .trim();
      const listImg = $(el)
        .nextUntil("h2")
        .find("figure img")
        .map((i, img) => $(img).attr("src").trim())
        .get();

      const locationDetail = $(el).nextUntil("h2", "p").first().text().trim();

      const listItems = $(el)
        .nextUntil("h2")
        .filter((i, p) => $(p).find("strong").length > 0)
        .first()
        .find("strong")
        .map((i, strong) => {
          const strongText = $(strong).text().trim();
          const afterStrongElement = $(strong).get(0).nextSibling
            ? ($(strong).get(0).nextSibling.nodeValue || "").trim()
            : "";

          const linkText =
            $(strong).next("a").length > 0
              ? $(strong).next("a").text().trim()
              : "";

          return `${strongText} ${afterStrongElement} ${linkText}`.trim();
        })
        .get();

      results.push({
        สถานที่: locationName,
        รูปภาพ: listImg.length > 0 ? listImg : "ไม่มีรูปภาพ",
        รายละเอียดรูปภาพ: imageDetails || "ขอบคุณภาพจากเว็บไซต์ drivehub.com",
        รายละเอียด: locationDetail,
        ข้อมูลที่ค้นพบ: listItems,
      });
    });

    if (results.length === 0) {
      console.log("No data found. Please check the website structure.");
      return;
    }

    fs.writeFileSync(outputFilePath, JSON.stringify(results, null, 2), "utf8");
    console.log(`Data saved to ${outputFilePath}`);
  } catch (error) {
    console.error("Error fetching and saving data:", error);
  }
};

fetchHTMLAndSaveToJSON3(
  "https://www.drivehub.com/blog/khon-kaen-tourist-destinations/",
  "./data/place3.json"
);

const cleanText = (text) => {
  return text.replace(/’$/, "");
};

const fetchHTMLAndSaveToJSON4 = async (url, outputFilePath) => {
  try {
    // console.log(`Fetching HTML from: ${url}`);
    const { data: html } = await axios.get(url);
    console.log("Fetched HTML successfully.");

    const $ = cheerio.load(html);
    let results = [];
    // Process H1 tags
    $("h1").each((i, el) => {
      const mainHeading = $(el).text().trim();
      results.push({
        หัวข้อหลัก: mainHeading,
      });
    });

    $("h2").each((i, el) => {
      const locationName = cleanText($(el).text().trim());
      if (!locationName || ["Post navigation"].includes(locationName)) return;

      const imageDetails = $(el)
        .nextUntil("h2")
        .filter((i, p) => $(p).find("img").length > 0)
        .first()
        .text()
        .trim();
      const listImg = $(el)
        .nextUntil("h2")
        .find("figure img")
        .map((i, img) => $(img).attr("src").trim())
        .get();

      const locationDetail = $(el).nextUntil("h2", "p").first().text().trim();

      const listItems = $(el)
        .nextUntil("h2")
        .filter((i, p) => $(p).find("strong").length > 0)
        .first()
        .find("strong")
        .map((i, strong) => {
          const strongText = $(strong).text().trim();
          const afterStrongElement = $(strong).get(0).nextSibling
            ? ($(strong).get(0).nextSibling.nodeValue || "").trim()
            : "";

          const linkText =
            $(strong).next("a").length > 0
              ? $(strong).next("a").text().trim()
              : "";

          return `${strongText} ${afterStrongElement} ${linkText}`.trim();
        })
        .get();

      results.push({
        สถานที่: locationName,
        รูปภาพ: listImg.length > 0 ? listImg : "ไม่มีรูปภาพ",
        รายละเอียดรูปภาพ: imageDetails || "ไม่มีรายละเอียดรูปภาพ",
        รายละเอียด: locationDetail,
        ข้อมูลที่ค้นพบ: listItems,
      });
    });

    if (results.length === 0) {
      console.log("No data found. Please check the website structure.");
      return;
    }

    fs.writeFileSync(outputFilePath, JSON.stringify(results, null, 2), "utf8");
    console.log(`Data saved to ${outputFilePath}`);
  } catch (error) {
    console.error("Error fetching and saving data:", error);
  }
};

fetchHTMLAndSaveToJSON4(
  "https://www.drivehub.com/blog/khon-kaen-cafes/",
  "./data/cafe1.json"
);

const fetchHTMLAndSaveToJSON5 = async (url, outputFilePath) => {
  try {
    const { data: html } = await axios.get(url);
    console.log("Fetched HTML successfully.");

    const $ = cheerio.load(html);

    $("p[style*='text-align:center']").remove();

    let results = [];

    $("h1").each((i, el) => {
      const mainHeading = $(el).text().trim();
      results.push({
        หัวข้อหลัก: mainHeading,
      });
    });

    $("h2").each((i, el) => {
      let locationName = $(el).text().trim();
      locationName = locationName.replace(/^\d+(\.|-|:|\))?\s*/, "");
      const listImg = $(el)
        .prevUntil("h2")
        .find("img")
        .map((i, img) => $(img).attr("src").trim())
        .get();

      let locationDetail = $(el)
        .nextUntil("h2", "p")
        .map((i, p) => $(p).text().trim())
        .get()
        .join(" ");

      locationDetail = locationDetail
        .replace(/ที่ตั้ง\s*:\s*[^\n]+/g, "")
        .replace(/เวลาเปิดบริการ\s*:\s*[^\n]+/g, "")
        .replace(/โทรศัพท์\s*:\s*[^\n]+/g, "")
        .replace(/Facebook\s*:\s*[^\n]+/g, "")
        .replace(/GPS\s*:\s*[^\n]+/g, "")
        .trim();
      locationDetail = locationDetail
        .replace(/^.*?\b(?=[A-Za-zก-ฮ])/g, "")
        .replace(new RegExp(locationName + "$"), "")
        .trim();
      locationDetail = locationDetail
        .replace(/ค่ะ/g, "")
        .replace(/อย่างแน่นอน/g, "")
        .trim();

      const shopInfo = [];
      $(el)
        .nextUntil("h2", "p")
        .each((i, p) => {
          const text = $(p).text().trim();
          if (text.startsWith("ที่ตั้ง :"))
            shopInfo.push(`ที่อยู่: ${text.replace("ที่ตั้ง :", "").trim()}`);
          if (text.startsWith("เวลาเปิดบริการ :"))
            shopInfo.push(
              `เวลาทำการ: ${text.replace("เวลาเปิดบริการ :", "").trim()}`
            );
          if (text.startsWith("โทรศัพท์ :"))
            shopInfo.push(`โทร: ${text.replace("โทรศัพท์ :", "").trim()}`);
          if (text.startsWith("Facebook :"))
            shopInfo.push(
              `Facebook: ${$(p).find("a").attr("href") || "ไม่ได้ระบุ"}`
            );
          if (text.startsWith("GPS :"))
            shopInfo.push(`Google Map: ${text.replace("GPS :", "").trim()}`);
        });

      if (
        locationName ||
        listImg.length > 0 ||
        locationDetail ||
        shopInfo.length > 0
      ) {
        results.push({
          สถานที่: locationName,
          รูปภาพ: listImg,
          รายละเอียดรูปภาพ: "ขอบคุณรูปภาพจาก: เว็บไซต์ chillpainai",
          รายละเอียด: locationDetail,
          ข้อมูลที่ค้นพบ: shopInfo,
        });
      }
    });

    if (results.length === 0) {
      console.log("No data found. Please check the website structure.");
      return;
    }

    fs.writeFileSync(outputFilePath, JSON.stringify(results, null, 2), "utf8");
    console.log(`Data saved to ${outputFilePath}`);
  } catch (error) {
    console.error("Error fetching and saving data:", error);
  }
};

fetchHTMLAndSaveToJSON5(
  "https://chillpainai.com/scoop/14746/10-%E0%B8%84%E0%B8%B2%E0%B9%80%E0%B8%9F%E0%B9%88%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99%E0%B9%83%E0%B8%99%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87-%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2-%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%AA%E0%B8%A7%E0%B8%A2",
  "./data/cafe2.json"
);

const fetchHTMLAndSaveToJSON6 = async (url, outputFilePath) => {
  try {
    const axios = require("axios");
    const cheerio = require("cheerio");
    const fs = require("fs");

    // console.log(`Fetching HTML from: ${url}`);
    const { data: html } = await axios.get(url);
    const cleanLocationName = (name) => {
      return name
        .replace(/^\d+\./, "")
        .replace(/\n/g, " ")
        .replace(/,/g, "")
        .trim();
    };
    const $ = cheerio.load(html);
    let results = [];

    $("h3").each((i, el) => {
      const locationName = cleanLocationName($(el).text().trim());
      const listImg = $(el)
        .nextUntil("h3")
        .find("img")
        .map((i, img) => $(img).attr("src").trim())
        .get();

      const imageDetails = $(el)
        .nextUntil("h3")
        .find("p em")
        .first()
        .text()
        .trim();

      const locationDetail = $(el).next("p").text().trim();

      const listItems = $(el)
        .nextUntil("h3", "ul")
        .find("li")
        .map((i, li) => $(li).text().trim())
        .get();

      results.push({
        สถานที่: locationName,
        รูปภาพ: listImg.length > 0 ? listImg : "ไม่มีรูปภาพ",
        รายละเอียดรูปภาพ:
          imageDetails || "ขอบคุณรูปภาพจาก : tripgether ทริปเก็ทเตอร์ จาก  tripgether.com",
        รายละเอียด: locationDetail,
        ข้อมูลที่ค้นพบ: listItems,
      });
    });

    if (results.length === 0) {
      console.log("No data found. Please check the website structure.");
      return;
    }

    fs.writeFileSync(outputFilePath, JSON.stringify(results, null, 2), "utf8");
    console.log(`Data saved to ${outputFilePath}`);
  } catch (error) {
    console.error("Error fetching and saving data:", error);
  }
};

fetchHTMLAndSaveToJSON6(
  "https://www.tripgether.com/%E0%B8%AD%E0%B8%B1%E0%B8%9B%E0%B9%80%E0%B8%94%E0%B8%95%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7/11-%E0%B8%84%E0%B8%B2%E0%B9%80%E0%B8%9F%E0%B9%88%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99-%E0%B9%83%E0%B8%99%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87/",
  "./data/cafe3.json"
);

const fetchHTMLAndSaveToJSON7 = async (url, outputFilePath) => {
  try {
    const axios = require("axios");
    const cheerio = require("cheerio");
    const fs = require("fs");

    const { data: html } = await axios.get(url);

    const $ = cheerio.load(html);
    let results = [];

    // ดึงหัวข้อหลัก
    const mainHeading = $(".excerpt-title._heading p").text().trim();
    if (mainHeading) {
      results.push({
        หัวข้อหลัก: mainHeading,
      });
    }

    $("h3").each((i, el) => {
      let locationName = $(el).children("strong").first().text().trim();

      // ลบตัวเลขออกจากหน้าชื่อสถานที่
      locationName = locationName.replace(/^\d+\.\s*/, "");

      // ลบคำว่า "สาขา" และข้อความทั้งหมดหลังจากนั้น
      locationName = locationName.replace(/สาขา.*$/, "").trim();
      locationName = locationName.replace(/ขอนแก่น.*$/, "").trim();
      locationName = locationName.replace(/ริมบึง.*$/, "").trim();
      locationName = locationName.replace(/ชั้น.*$/, "").trim();
      locationName = locationName.replace(/& ชาบู บุฟเฟ่ต์.*$/, "").trim();

      const listImg = $(el)
        .nextUntil("h3")
        .find("img")
        .map((i, img) => $(img).attr("data-src") || $(img).attr("src"))
        .get();

      const imageDetails = $(el)
        .nextUntil("h3")
        .find("p")
        .first()
        .text()
        .trim();

      let locationDetail = "";
      if ($(el).next("div.wp-block-image").length) {
        locationDetail = $(el)
          .next("div.wp-block-image")
          .next("p")
          .text()
          .trim();
      } else if ($(el).next("figure").next("p").length) {
        locationDetail = $(el).next("figure").next("p").text().trim();
      } else {
        locationDetail = $(el).nextUntil("h3").find("p").first().text().trim();
      }

      const listItems = $(el)
        .nextUntil("h3")
        .filter("p.has-small-font-size")
        .map((i, p) => $(p).text().trim())
        .get();

      // ตรวจสอบข้อมูลซ้ำ
      const isDuplicate = results.some(
        (item) =>
          item.สถานที่ === locationName &&
          JSON.stringify(item.รูปภาพ) === JSON.stringify(listImg) &&
          item.รายละเอียดรูปภาพ === imageDetails &&
          item.รายละเอียด === locationDetail &&
          JSON.stringify(item.ข้อมูลที่ค้นพบ) === JSON.stringify(listItems)
      );

      if (!isDuplicate) {
        results.push({
          สถานที่: locationName,
          รูปภาพ: listImg.length > 0 ? listImg : "ไม่มีรูปภาพ",
          รายละเอียดรูปภาพ:
            imageDetails || "ขอบคุณรูปภาพจาก : เว็บไซต์ The Cloud",
          รายละเอียด: locationDetail,
          ข้อมูลที่ค้นพบ: listItems,
        });
      }
    });

    if (results.length === 0) {
      console.log("No data found. Please check the website structure.");
      return;
    }

    fs.writeFileSync(outputFilePath, JSON.stringify(results, null, 2), "utf8");
    console.log(`Data saved to ${outputFilePath}`);
  } catch (error) {
    console.error("Error fetching and saving data:", error);
  }
};

fetchHTMLAndSaveToJSON7(
  "https://readthecloud.co/khon-kaen-bbq/",
  "./data/buffet1.json"
);

const fetchHTMLAndSaveToJSON8 = async (url, outputFilePath) => {
  try {
    // console.log(`Fetching HTML from: ${url}`);
    const { data: html } = await axios.get(url);
    console.log("Fetched HTML successfully.");

    const $ = cheerio.load(html);
    let results = [];
    $("h1").each((i, el) => {
      const mainHeading = $(el).text().trim();
      results.push({
        หัวข้อหลัก: mainHeading,
      });
    });

    const baseUrl = "https://www.ryoiireview.com";

    $('div[id^="div_restaurant_"]').each((i, el) => {
      let locationName = $(el).find("h2").text().trim();
      locationName = locationName.replace(/- 金継ぎ -/g, "").trim();
      locationName = locationName.replace(/ปิ้งย่างสไตล์ญี่ปุ่น/g, "").trim();

      const listImg = $(el)
        .find("img")
        .map((i, img) => {
          if (i === 0) return null;
          const src = $(img).attr("src").trim();
          return src.startsWith("http") ? src : `${baseUrl}${src}`;
        })
        .get()
        .filter(Boolean);

      const imageDetails = $(el)
        .find("p span span span")
        .filter((i, span) => $(span).text().includes("Cr."))
        .text()
        .trim();

      const filteredDetails = $(el)
        .find("p span span")
        .map((index, element) => $(element).text().trim())
        .get()
        .filter(
          (value, index, self) => value !== "" && self.indexOf(value) === index
        )
        .filter((text) => text.includes(locationName));

      const locationDetail = filteredDetails.reduce(
        (longest, current) =>
          current.length > longest.length ? current : longest,
        ""
      );

      const listItems = $(el)
        .find("div.col-xs-3")
        .get()
        .reduce((acc, elem) => {
          const key = $(elem).text().trim().replace(/\s+/g, " ");
          const value = $(elem)
            .next(".col-xs-9")
            .text()
            .trim()
            .replace(/\s+/g, " ");

          if (key && value) {
            acc.push(`${key} : ${value}`);
          }

          return acc;
        }, [])
        .concat(
          $(el)
            .find("p")
            .map((i, p) => {
              const textInP = $(p).text().trim();
              const textInStrong = $(p).find("strong").text().trim();
              return [textInP, textInStrong].filter(Boolean).join(" ");
            })
            .get()
            .filter(
              (text) =>
                text.includes("เมนูน่าทาน") || text.includes("เมนูน่านทาน")
            )
            .map((text) => {
              const match = text.match(
                /(เมนูน่(?:าทาน|นทาน)[^:：]*[:：]?\s*.*)/
              );
              return match ? match[1] : null;
            })
            .filter(Boolean)
        );

      const recommendedMenus = $(el)
        .find("p:contains('เมนูแนะนำ')")
        .next("ul")
        .find("li")
        .map((i, li) => $(li).text().trim())
        .get();

      const purchaseChannels = $(el)
        .find("p:contains('ช่องทางการสั่งซื้อ')")
        .next("ul")
        .find("li")
        .map((i, li) => $(li).text().trim())
        .get();

      const buffetPrices = $(el)
        .find("p:contains('ราคาบุฟเฟ่ต์')")
        .next("ul")
        .find("li")
        .map((i, li) => $(li).text().trim())
        .get()
        .concat(
          $(el)
            .find("strong")
            .filter(function () {
              return $(this).text().trim().startsWith("ราคา");
            })
            .map((i, strong) => {
              const text = $(strong).clone();
              text.find("span").each((i, span) => {
                const spanText = $(span).text().trim();
                if (spanText.endsWith("บาท")) {
                  $(span).replaceWith(spanText);
                }
              });
              return text.text().trim();
            })
            .get()
        )
        .concat(
          $(el)
            .find(
              "span:contains('ในราคา'),span:contains('สำหรับราคาบุฟเฟ่ต์จะอยู่ที่'),span:contains('ราคาเริ่มต้นที่')"
            )
            .filter(function () {
              return (
                $(this).attr("style") &&
                $(this).attr("style").includes("color:#FF0000")
              );
            })
            .map((i, span) => $(span).text().trim())
            .get()
        )
        .concat(
          $(el)
            .find("strong")
            .filter(function () {
              const text = $(this).text().trim();
              return (
                text.includes("ชุดเล็ก") &&
                text.includes("ชุดกลาง") &&
                text.includes("ชุดใหญ่")
              );
            })
            .map((i, strong) => {
              const text = $(strong).clone();
              text.find("span").each((i, span) => {
                const spanText = $(span).text().trim();
                $(span).replaceWith(spanText);
              });
              return text.text().trim();
            })
            .get()
        )
        .concat(
          $(el)
            .find("*:contains('โดยราคาจะเริ่มต้นที่')")
            .filter(function () {
              const text = $(this).text().trim();
              return text.includes("โดยราคาจะเริ่มต้นที่");
            })
            .map((i, elem) => {
              const fullText = $(elem).text().trim();
              const match = fullText.match(/โดยราคาจะเริ่มต้นที่.*บาท\/ set/);
              return match ? match[0] : null;
            })
            .get()
        )
        .filter((price) => price !== "")
        .filter((price, index, self) => self.indexOf(price) === index);

      results.push({
        สถานที่: locationName,
        รูปภาพ: listImg.length > 0 ? listImg : "ไม่มีรูปภาพ",
        รายละเอียดรูปภาพ: imageDetails || "ไม่มีรายละเอียดรูปภาพ",
        รายละเอียด: locationDetail,
        ข้อมูลที่ค้นพบ: listItems,
        เมนูแนะนำ:
          recommendedMenus.length > 0 ? recommendedMenus : "ไม่มีเมนูแนะนำ",
        ช่องทางการสั่งซื้อ:
          purchaseChannels.length > 0
            ? purchaseChannels
            : "ไม่มีช่องทางการสั่งซื้อ",
        ราคา:
          buffetPrices && buffetPrices.length > 0 && buffetPrices !== ""
            ? buffetPrices
            : "ไม่มีข้อมูล",
      });
    });

    if (results.length === 0) {
      console.log("No data found. Please check the website structure.");
      return;
    }

    fs.writeFileSync(outputFilePath, JSON.stringify(results, null, 2), "utf8");
    console.log(`Data saved to ${outputFilePath}`);
  } catch (error) {
    console.error("Error fetching and saving data:", error);
  }
};

fetchHTMLAndSaveToJSON8(
  "https://www.ryoiireview.com/article/bbq-grill-khonkaen/",
  "./data/buffet2.json"
);

const fetchHTMLAndSaveToJSON9 = async (url, outputFilePath) => {
  try {
    // console.log(`Fetching HTML from: ${url}`);
    const { data: html } = await axios.get(url);
    console.log("Fetched HTML successfully.");

    const $ = cheerio.load(html);
    let results = [];
    // Process H1 tags
    $("h1").each((i, el) => {
      const mainHeading = $(el).text().trim();
      results.push({
        หัวข้อหลัก: mainHeading,
      });
    });

    $("h2").each((i, el) => {
      const locationName = $(el).text().trim();
      if (!locationName || ["Post navigation"].includes(locationName)) return;

      const imageDetails = $(el)
        .nextUntil("h2")
        .filter((i, p) => $(p).find("img").length > 0)
        .first()
        .text()
        .trim();
      const listImg = $(el)
        .nextUntil("h2")
        .find("figure img")
        .map((i, img) => $(img).attr("src").trim())
        .get();

      const locationDetail = $(el).nextUntil("h2", "p").first().text().trim();

      const listItems = $(el)
        .nextUntil("h2")
        .filter((i, p) => $(p).find("strong").length > 0)
        .first()
        .find("strong")
        .map((i, strong) => {
          const strongText = $(strong).text().trim();
          const afterStrongElement = $(strong).get(0).nextSibling
            ? ($(strong).get(0).nextSibling.nodeValue || "").trim()
            : "";

          const linkText =
            $(strong).next("a").length > 0
              ? $(strong).next("a").text().trim()
              : "";

          return `${strongText} ${afterStrongElement} ${linkText}`.trim();
        })
        .get();

      results.push({
        สถานที่: locationName,
        รูปภาพ: listImg.length > 0 ? listImg : "ไม่มีรูปภาพ",
        รายละเอียดรูปภาพ: imageDetails || "ไม่มีรายละเอียดรูปภาพ",
        รายละเอียด: locationDetail,
        ข้อมูลที่ค้นพบ: listItems,
      });
    });

    if (results.length === 0) {
      console.log("No data found. Please check the website structure.");
      return;
    }

    fs.writeFileSync(outputFilePath, JSON.stringify(results, null, 2), "utf8");
    console.log(`Data saved to ${outputFilePath}`);
  } catch (error) {
    console.error("Error fetching and saving data:", error);
  }
};

fetchHTMLAndSaveToJSON9(
  "https://www.drivehub.com/blog/khon-kaen-restaurants/",
  "./data/restaurant1.json"
);

const fetchHTMLAndSaveToJSON10 = async (url, outputFilePath) => {
  try {
    const axios = require("axios");
    const cheerio = require("cheerio");
    const fs = require("fs");

    // Fetch HTML from the given URL
    const { data: html } = await axios.get(url);

    const $ = cheerio.load(html);
    let results = [];

    $("h1").each((i, el) => {
      const mainHeading = $(el).text().trim();
      results.push({
        หัวข้อหลัก: mainHeading,
      });
    });

    $("h3").each((i, el) => {
      let locationName = $(el).text().trim();

      locationName = locationName.replace(/^\d+(\.|-|:|\))?\s*/, "");

      if (
        !locationName ||
        [
          "ยอดนิยมในตอนนี้",
          "สิทธิพิเศษแนะนำ",
          "แท็กยอดนิยม",
          "บทความที่เกี่ยวข้อง",
          "8 ร้านอาหาร มิชลินไกด์ สุราษฎร์ธานี 2025 หรอยแรง แบบต้องแวะไปชิม",
        ].includes(locationName)
      )
        return; // Skip irrelevant entries

      const listImg = $(el)
        .nextUntil("h3")
        .find("p img[src]")
        .map((i, img) => $(img).attr("src")?.trim())
        .get();

      const imageDetails = $(el)
        .nextUntil("h3")
        .find("p em")
        .first()
        .text()
        .trim();

      const locationDetail = $(el)
        .nextUntil("h3", "p")
        .not(":has(img)")
        .text()
        .trim();

      const listItems = $(el)
        .nextUntil("h3", "ul")
        .find("li")
        .map((i, li) => $(li).text().trim())
        .get();

      // Filter out entries with no significant data
      if (
        locationName ||
        (listImg.length > 0 && listImg[0] !== "ไม่มีรูปภาพ") ||
        imageDetails ||
        locationDetail ||
        listItems.length > 0
      ) {
        results.push({
          สถานที่: locationName,
          รูปภาพ: listImg.length > 0 ? listImg : "ไม่มีรูปภาพ",
          รายละเอียดรูปภาพ: imageDetails || "ไม่มีรายละเอียดรูปภาพ",
          รายละเอียด: locationDetail || "ไม่มีรายละเอียด",
          ข้อมูลที่ค้นพบ: listItems,
        });
      }
    });

    if (results.length === 0) {
      console.log(
        "No significant data found. Please check the website structure."
      );
      return;
    }

    fs.writeFileSync(outputFilePath, JSON.stringify(results, null, 2), "utf8");
    console.log(`Data saved to ${outputFilePath}`);
  } catch (error) {
    console.error("Error fetching and saving data:", error);
  }
};

fetchHTMLAndSaveToJSON10(
  "https://food.trueid.net/detail/10xJ7vzqN2aZ",
  "./data/restaurant2.json"
);

const fetchHTMLAndSaveToJSON11 = async (url, outputFilePath) => {
  try {
    const axios = require("axios");
    const cheerio = require("cheerio");
    const fs = require("fs");

    const { data: html } = await axios.get(url);

    const $ = cheerio.load(html);
    let results = [];

    // ดึงหัวข้อหลัก และเก็บเป็น object ตัวแรก
    let mainHeading = $("h1").first().text().trim();
    results.push({ หัวข้อหลัก: mainHeading });

    $(".elementor-widget-heading:has(h2)").each((i, el) => {
      $(el)
        .nextUntil(".elementor-widget-heading:has(h2)")
        .filter(".elementor-widget-heading:has(h3)")
        .each((i, el) => {
          const locationName = $(el).find("h3 a").text().trim();
          const locationLink = $(el).find("h3 a").attr("href") || "ไม่มีลิงก์";

          // ดึงแค่รูปเดียว
          let imageSrc =
            $(el)
              .nextUntil(".elementor-widget-divider--view-line")
              .find(".elementor-widget-image picture source")
              .first()
              .attr("src") ||
            $(el)
              .nextUntil(".elementor-widget-divider--view-line")
              .find(".elementor-widget-image picture source")
              .first()
              .attr("data-lzl-srcset") ||
            "ไม่มีรูปภาพ";

          // ถ้ามี srcset (หลายรูปแบบ) ให้เลือกเฉพาะ URL แรก
          if (imageSrc.includes(",")) {
            imageSrc = imageSrc.split(",")[0].split(" ")[0].trim();
          }

          const imageDetails =
            $(el).nextUntil("h3").find("p em").first().text().trim() ||
            "ไม่มีรายละเอียดรูปภาพ";

          const locationDetail =
            $(el)
              .nextUntil(".elementor-widget-divider--view-line")
              .find(
                ".elementor-widget-text-editor p, .elementor-widget-text-editor div[dir='auto']"
              )
              .map((i, p) => $(p).text().trim())
              .get()
              .join(" ") || "ไม่มีรายละเอียด";

          const listItems = $(el)
            .nextUntil(".elementor-widget-divider--view-line")
            .find(".elementor-widget-text-editor ul li")
            .map((i, li) => $(li).text().trim())
            .get();

          results.push({
            สถานที่: locationName || "ไม่มีชื่อสถานที่",
            รูปภาพ: imageSrc, // แสดงแค่รูปแรก
            รายละเอียดรูปภาพ:
              imageDetails && imageDetails !== "ไม่มีรายละเอียดรูปภาพ"
                ? imageDetails
                : "ไม่มีรายละเอียดรูปภาพ",
            รายละเอียด: locationDetail,
            ข้อมูลที่ค้นพบ:
              listItems.length > 0 ? listItems : ["ไม่มีข้อมูลเพิ่มเติม"],
          });
        });
    });

    if (results.length === 1) {
      console.log(
        "❌ No restaurant data found. Please check the website structure."
      );
      return;
    }

    fs.writeFileSync(outputFilePath, JSON.stringify(results, null, 2), "utf8");
    console.log(`Data saved to ${outputFilePath}`);
  } catch (error) {
    console.error("🚨 Error fetching and saving data:", error);
  }
};

fetchHTMLAndSaveToJSON11(
  "https://come.in.th/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99/%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3/",
  "./data/restaurant3.json"
);

const loadDataFromFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return null;
  }
};

const extractKeywords = async (text, dbClient) => {
  try {
    if (!dbClient) {
      console.error("dbClient is undefined or not passed correctly.");
      return [];
    }

    const rawWords = wordcut
      .cut(text)
      .split("|")
      .map((w) => w.trim());

    const cleanedWords = rawWords.filter((w) => w.length > 0);

    console.log("Cleaned words:", cleanedWords);

    const normalizedWords = cleanedWords.map((word) => word.toLowerCase());

    const orderedKeywords = cleanedWords.map((word) => word.toLowerCase());

    const tfidf = new natural.TfIdf();
    tfidf.addDocument(normalizedWords);

    const terms = tfidf.listTerms(0).filter((item) => item.tfidf > 0.1);
    const tfidfKeywords = terms.map((item) => item.term);

    console.log("TF-IDF Keywords extracted:", tfidfKeywords);

    const combinedKeywords = Array.from(
      new Set([...orderedKeywords, ...tfidfKeywords])
    );
    console.log("Combined Keywords:", combinedKeywords);

    return combinedKeywords;
  } catch (error) {
    console.error("Error extracting keywords:", error);
    return [];
  }
};

const createFlexMessage = (
  placeName,
  placeImageUrl,
  placeDescription,
  imageDetails,
  contactLink
) => {
  console.log(`Creating Flex Message with Image URL: ${placeImageUrl}`);

  const defaultImageUrl =
    "https://cloud-atg.moph.go.th/quality/sites/default/files/default_images/default.png";

  if (typeof placeImageUrl === "string" && placeImageUrl.includes(" ")) {
    placeImageUrl = encodeURIComponent(placeImageUrl);
  }

  if (
    !placeImageUrl ||
    typeof placeImageUrl !== "string" ||
    placeImageUrl.trim() === "" ||
    placeImageUrl === "ไม่มีรูปภาพ" ||
    !placeImageUrl.startsWith("http")
  ) {
    placeImageUrl = defaultImageUrl;
    imageDetails = "";
  }

  const safeImageSource =
    !imageDetails?.trim() || placeImageUrl === defaultImageUrl
      ? "ไม่มีรายละเอียดรูปภาพ"
      : imageDetails;

  const footerContent = [];

  if (contactLink && contactLink.startsWith("http")) {
    footerContent.push({
      type: "button",
      style: "link",
      height: "sm",
      action: {
        type: "uri",
        label: "ช่องทางการติดต่อ",
        uri: contactLink,
      },
    });
  } else if (contactLink) {
    // ถ้าไม่มีลิงก์แต่มีข้อความ เช่น "Facebook: Kyoto Shi Cafe ขอนแก่น"
    footerContent.push({
      type: "text",
      text: `ช่องทางการติดต่อ: ${contactLink.replace("Facebook: ", "").trim()}`,
      size: "sm",
      color: "#555555",
      align: "center",
      wrap: true,
    });
  } else {
    // ถ้าไม่มีข้อมูลเลย
    footerContent.push({
      type: "text",
      text: "ไม่พบช่องทางการติดต่อ",
      size: "sm",
      color: "#aaaaaa",
      align: "center",
      wrap: true,
    });
  }

  return {
    type: "flex",
    altText: "รายละเอียดสถานที่",
    contents: {
      type: "bubble",
      hero: {
        type: "image",
        url: placeImageUrl,
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover",
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: placeName || "ชื่อสถานที่ไม่ระบุ",
            weight: "bold",
            size: "xl",
            wrap: true,
          },
          {
            type: "text",
            text: placeDescription || "ไม่มีรายละเอียดเพิ่มเติม",
            wrap: true,
            margin: "md",
          },
          {
            type: "text",
            text: safeImageSource,
            wrap: true,
            margin: "md",
            size: "sm",
            color: "#aaaaaa",
          },
        ],
      },
      footer: {
        type: "box",
        layout: "vertical",
        spacing: "sm",
        contents: footerContent,
      },
    },
  };
};

const filterByKeyword = (data, allKeywords, questionText, displayName) => {
  if (!data || data.length === 0 || !allKeywords || allKeywords.length === 0) {
    console.log("No data or keywords provided for filtering.");
    return "ไม่พบข้อมูล กรุณาลองใหม่ภายหลัง";
  }

  const lowerCaseKeywords = allKeywords.map((keyword) =>
    keyword.trim().toLowerCase()
  );

  const keywordGroups = {
    fee: [
      "ค่าเข้า",
      "ราคา",
      "ค่าบริการ",
      "ค่าเข้าชม",
      "ค่าธรรมเนียม",
      "ราคาเริ่มต้น",
      "ราคาค่าตั๋ว",
      "ค่าเข้าชมพิพิธภัณฑ์",
      "ค่าบริการต่างๆ",
    ],
    time: [
      "เวลา",
      "เปิด",
      "ปิด",
      "เวลาเปิดทำการ",
      "เวลาทำการ",
      "เปิดทำการ",
      "เวลาปิด",
      "เวลาเปิด-ปิด",
      "เวลาเปิดบริการ",
    ],
    desc: [
      "รายละเอียด",
      "รีวิว",
      "เกี่ยวกับ",
      "ข้อมูลทั่วไป",
      "ข้อมูล",
      "เนื้อหา",
      "จุดเด่น",
      "ลักษณะ",
      "บรรยาย",
    ],
    link: ["เว็บไซต์", "ลิงก์", "เว็ปไซต์", "เว็บ", "Facebook"],
    map: ["ที่อยู่สถานที่", "ใช้เวลา", "ใช้เวลานานเท่าไหร่"],
  };

  let filteredResponse = [];
  let contactLink = "";

  if (displayName === "เวลาเปิดทำการ") {
    console.log("Filtering by time...");
    filteredResponse = data.flatMap((item) => {
      return item.ข้อมูลที่ค้นพบ.filter((info) =>
        keywordGroups.time.some((timeKeyword) =>
          info.toLowerCase().includes(timeKeyword)
        )
      );
    });
  } else if (displayName === "ค่าธรรมเนียมการเข้า") {
    console.log("Filtering by fee...");
    filteredResponse = data.flatMap((item) => {
      return item.ข้อมูลที่ค้นพบ.filter((info) =>
        keywordGroups.fee.some((feeKeyword) =>
          info.toLowerCase().includes(feeKeyword)
        )
      );
    });
  } else if (displayName === "ช่องทางการติดต่อ") {
    console.log("Filtering by website...");
    filteredResponse = data.flatMap((item) => {
      return item.ข้อมูลที่ค้นพบ.filter((info) =>
        keywordGroups.link.some((linkKeyword) =>
          info.toLowerCase().includes(linkKeyword)
        )
      );
    });
  }
  if (displayName === "ที่อยู่") {
    console.log("Filtering by map...");
    filteredResponse = data.flatMap((item) => {
      return item.ข้อมูลที่ค้นพบ.filter((info) =>
        keywordGroups.map.some((mapKeyword) =>
          info.toLowerCase().includes(mapKeyword)
        )
      );
    });
  } else if (displayName === "รายละเอียด") {
    console.log("Filtering by desc and creating Flex Message...");

    const filteredData = data.find((item) => item["รายละเอียด"]);
    if (!filteredData) {
      return "ไม่พบข้อมูลที่ตรงกับคำถาม";
    }
    const placeName = filteredData["สถานที่"] || "ชื่อสถานที่ไม่ระบุ";

    let placeDescription =
      filteredData["รายละเอียด"] || "ไม่มีรายละเอียดเพิ่มเติม";
    let placeImageUrl = filteredData["รูปภาพ"];

    placeDescription = placeDescription
      .replace(/^.*?\/ Shutterstock\.com/g, "")
      .trim()
      .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF].*?อ่านรีวิวเต็มๆ ได้ที.*/g, "")
      .trim()
      .replace(/=+/g, "")
      .trim();

    let imageDetails = filteredData["รายละเอียดรูปภาพ"] || "";
    if (imageDetails) {
      imageDetails = imageDetails.trim();
      placeDescription = placeDescription.replace(imageDetails, "").trim();
    }

    // ✅ อัพเดตการเลือกภาพ
    if (Array.isArray(placeImageUrl) && placeImageUrl.length > 1) {
      placeImageUrl = placeImageUrl[1]; // เลือกรูปที่ 2 ถ้ามี
    } else if (Array.isArray(placeImageUrl) && placeImageUrl.length > 0) {
      placeImageUrl = placeImageUrl[0]; // ถ้ามีรูปเดียว ใช้รูปแรก
    } else {
      placeImageUrl = null;
    }
    // ✅ แก้ไขเพื่อให้แน่ใจว่า URL ใช้ได้จริง
    if (
      !placeImageUrl ||
      typeof placeImageUrl !== "string" ||
      placeImageUrl.trim() === "" ||
      placeImageUrl === "ไม่มีรูปภาพ" ||
      !placeImageUrl.startsWith("http")
    ) {
      placeImageUrl =
        "https://cloud-atg.moph.go.th/quality/sites/default/files/default_images/default.png"; // ใช้รูปดีฟอลต์
    } else {
      placeImageUrl = encodeURI(placeImageUrl); // แปลง URL ให้ถูกต้อง
    }

    // ✅ Debug เช็คค่า URL ที่จะใช้
    console.log(`📷 Encoded Image URL for Flex: ${placeImageUrl}`);

    const contactLinkCandidates = data.flatMap((item) =>
      item.ข้อมูลที่ค้นพบ.filter((info) =>
        keywordGroups.link.some((linkKeyword) =>
          info
            .toLowerCase()
            .includes(linkKeyword.toLowerCase().replace(":", ""))
        )
      )
    );

    console.log("Contact link candidates:", contactLinkCandidates);
    let contactLink =
      contactLinkCandidates.find((info) => /(https?:\/\/[^\s]+)/.test(info)) ||
      "";

    if (contactLink) {
      const match = contactLink.match(/(https?:\/\/[^\s]+)/);
      contactLink = match ? match[0].trim() : "";
    }

    console.log(`✅ Extracted Contact Link: ${contactLink}`);

    console.log(`Final Image URL: ${placeImageUrl}`);
    console.log(`Final Image Details: ${imageDetails}`);
    console.log(`Contact Link: ${contactLink}`);

    return {
      response: createFlexMessage(
        placeName,
        placeImageUrl,
        placeDescription,
        imageDetails,
        contactLink
      ),
      contactLink,
    };
  }

  if (filteredResponse.length === 0) {
    console.log("No filtered response found.");
    return {
      response: "ไม่พบข้อมูลที่ตรงกับคำถาม",
      contactLink: "",
    };
  }

  const responseText = filteredResponse.join("\n");
  console.log("Filtered response based on question:", responseText);

  return {
    response: responseText || "ไม่พบข้อมูลที่ตรงกับคำถาม",
    contactLink,
  };
};

const getAnswerForIntent = async (intentName, placeName, dbClient) => {
  if (!placeName) {
    console.log("No placeName provided");
    return { answer: null, placeId: null };
  }

  const queries = {
    ค่าธรรมเนียมการเข้า:
      "SELECT admission_fee AS answer, id AS place_id, name FROM places WHERE name % $1 ORDER BY similarity(name, $1) DESC LIMIT 1",
    เวลาเปิดทำการ:
      "SELECT opening_hours AS answer, id AS place_id, name FROM places WHERE name % $1 ORDER BY similarity(name, $1) DESC LIMIT 1",
    เส้นทางไปยังสถานที่:
      "SELECT address AS answer, id AS place_id, name FROM places WHERE name % $1 ORDER BY similarity(name, $1) DESC LIMIT 1",
    รายละเอียด:
      "SELECT description AS answer, contact_link, id AS place_id, name FROM places WHERE name % $1 ORDER BY similarity(name, $1) DESC LIMIT 1",
    ช่องทางการติดต่อ:
      "SELECT contact_link AS answer, id AS place_id, name FROM places WHERE name % $1 ORDER BY similarity(name, $1) DESC LIMIT 1",
  };

  try {
    const query = queries[intentName] || null;
    if (!query) {
      console.log(`No query found for intent: ${intentName}`);
      return { answer: null, placeId: null };
    }

    console.log(`Running query: ${query}`);

    // ใช้ pg_trgm เพื่อหา placeName ที่คล้ายที่สุด
    const result = await dbClient.query(query, [placeName]);
    console.log(`Database query result:`, result.rows);

    if (result.rows.length > 0) {
      let answerText = result.rows[0].answer;
      const placeId = result.rows[0].place_id;
      const matchedPlaceName = result.rows[0].name;
      const contactLink =
        result.rows[0].contact_link || "ไม่พบข้อมูลช่องทางการติดต่อสถานที่";

        const filteredAnswer = {
          address: null,
          fee: null,
          contact: null,
          openingHours: null,
          contact_link: null,
          other: null,
        };
  

        if (intentName === "ค่าธรรมเนียมการเข้า") {
          filteredAnswer.fee = answerText
            ? answerText.trim()
            : "ไม่พบข้อมูลค่าธรรมเนียมการเข้า";
        } else if (intentName === "เส้นทางไปยังสถานที่") {
          filteredAnswer.address = answerText
            ? answerText.trim()
            : "ไม่พบข้อมูลเส้นทางไปยังสถานที่";
        } else if (intentName === "เวลาเปิดทำการ") {
          filteredAnswer.openingHours = answerText
            ? answerText.trim()
            : "ไม่พบข้อมูลเวลาเปิดทำการ";
        } else if (intentName === "ช่องทางการติดต่อ") {
          filteredAnswer.contact_link = answerText
            ? answerText.trim()
            : "ไม่พบข้อมูลช่องทางการติดต่อสถานที่";
        } else if (intentName === "รายละเอียด") {
          filteredAnswer.detail = answerText
            ? answerText.trim()
            : "ไม่พบข้อมูลรายละเอียด";
          filteredAnswer.contact_link = contactLink;
        }
  

      console.log("Filtered answer:", filteredAnswer);

      return {
        answer: filteredAnswer,
        placeId,
        matchedPlaceName, // ส่งชื่อสถานที่ที่ถูกต้องกลับไป
      };
    }

    console.log("No data found for the place");
    return { answer: null, placeId: null };
  } catch (error) {
    console.error("Error fetching data from places table:", error.stack);
    throw new Error("Database query error");
  }
};

const cleanPlaceName = (placeName) => {
  return placeName
    .replace(/Cafe|And|หมูกะทะ|หมูกระทะ|คาเฟ่|ขอนแก่น/gi, "")
    .trim();
};

const getAnswerFromWebAnswerTable = async (
  intentType,
  placeName,
  dbClient,
  similarityThreshold = 0.4,
  wordSimThreshold = 0.3,
  editDistanceMax = 10
) => {
  if (!dbClient) {
    throw new Error("❌ Database client is not initialized.");
  }

  if (!placeName || placeName.trim() === "") {
    console.log("⚠️ ชื่อสถานที่เป็นค่าว่าง หยุด Query เพื่อป้องกันข้อผิดพลาด");
    return { answer: null, placeId: null };
  }

  if (!intentType || intentType.trim() === "") {
    console.log("⚠️ intentType เป็นค่าว่าง หยุด Query เพื่อป้องกันข้อผิดพลาด");
    return { answer: null, placeId: null };
  }
  const normalizedPlaceName = cleanPlaceName(placeName);

  try {
    console.log(
      `🔍 Searching for place: "${normalizedPlaceName}" with intent: "${intentType}"`
    );

    const query = `
      SELECT 
  answer_text AS answer, 
  id AS place_id, 
  place_name, 
  similarity(replace(place_name, ' ', ''), replace($1, ' ', '')) * 1.5 AS boosted_similarity, 
  word_similarity(replace(place_name, ' ', ''), replace($1, ' ', '')) AS word_sim,  
  levenshtein(replace(lower(place_name), ' ', ''), replace(lower($1), ' ', '')) AS edit_distance
FROM web_answer
WHERE (
      replace(lower(place_name), ' ', '') % replace(lower($1), ' ', '') 
      OR replace(lower(place_name), ' ', '') ILIKE '%' || replace(lower($1), ' ', '') || '%'
    )
AND (intent_type = $2 OR $2 IS NULL)
ORDER BY boosted_similarity DESC, word_sim DESC, edit_distance ASC
LIMIT 5;

    `;
    const result = await dbClient.query(query, [
      normalizedPlaceName,
      intentType,
    ]);
    console.log("✅ Query Result:", result.rows);

    if (result.rows.length === 0) {
      console.log("❌ No matching data found in web_answer table.");
      return { answer: null, placeId: null };
    }

    // ✅ กรองข้อมูลตาม similarity_score ก่อน
    const filteredResults = result.rows.filter(
      (row) => row.boosted_similarity >= similarityThreshold
    );

    if (filteredResults.length === 0) {
      console.log("❌ No results meet the similarity threshold.");
      return { answer: null, placeId: null };
    }

    // ✅ เลือกค่าที่ดีที่สุดโดยเรียงลำดับตามเงื่อนไขที่กำหนด
    let bestMatch = filteredResults.reduce((prev, current) => {
      if (current.boosted_similarity > prev.boosted_similarity) return current;
      if (current.boosted_similarity === prev.boosted_similarity) {
        if (current.word_sim > prev.word_sim) return current;
        if (
          current.word_sim === prev.word_sim &&
          current.edit_distance < prev.edit_distance
        )
          return current;
      }
      return prev;
    });

    console.log(
      `✅ Best Match Selected: "${bestMatch.place_name}" with Similarity Score: ${bestMatch.similarity_score}, Word Sim: ${bestMatch.word_sim}, Edit Distance: ${bestMatch.edit_distance}`
    );

    return {
      answer: bestMatch.answer.trim(),
      placeId: bestMatch.place_id,
      placeName: bestMatch.place_name,
    };
  } catch (error) {
    console.error(
      "🚨 Error fetching answer from web_answer table:",
      error.stack
    );
    return { answer: null, placeId: null };
  }
};

const createFlexDetailMessage = (
  placeName,
  imageUrls,
  answerText,
  imageSource,
  contact_link
) => {
  try {
    const defaultImageUrl =
      "https://cloud-atg.moph.go.th/quality/sites/default/files/default_images/default.png";

    if (
      !Array.isArray(imageUrls) ||
      imageUrls.length === 0 ||
      imageUrls.includes("ไม่มีรูปภาพ") ||
      imageUrls.includes(defaultImageUrl)
    ) {
      imageUrls = [defaultImageUrl];
      imageSource = "";
    }

    const bubbles = imageUrls.map((imageUrl) => {
      const isValidUrl = imageUrl && imageUrl.startsWith("http");
      const safeImageUrl = isValidUrl ? imageUrl : defaultImageUrl;
      const safeImageSource =
        !imageSource?.trim() || safeImageUrl === defaultImageUrl
          ? "ไม่มีรายละเอียดรูปภาพ"
          : imageSource;

      const footerContent =
        contact_link && contact_link.startsWith("http")
          ? [
              {
                type: "button",
                style: "link",
                height: "sm",
                action: {
                  type: "uri",
                  label: "ช่องทางการติดต่อ",
                  uri: contact_link,
                },
              },
            ]
          : [
              {
                type: "text",
                text: "ไม่พบช่องทางการติดต่อ",
                size: "sm",
                color: "#aaaaaa",
                align: "center",
                wrap: true,
              },
            ];

      return {
        type: "bubble",
        hero: {
          type: "image",
          url: safeImageUrl,
          size: "full",
          aspectRatio: "20:13",
          aspectMode: "cover",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: placeName || "ชื่อสถานที่ไม่ระบุ",
              weight: "bold",
              size: "xl",
              wrap: true,
            },
            {
              type: "text",
              text: answerText || "ไม่มีรายละเอียดเพิ่มเติม",
              size: "sm",
              wrap: true,
              margin: "md",
            },
            {
              type: "text",
              text: safeImageSource,
              wrap: true,
              margin: "md",
              size: "sm",
              color: "#aaaaaa",
            },
          ],
        },
        footer: {
          type: "box",
          layout: "vertical",
          spacing: "sm",
          contents: footerContent,
        },
      };
    });

    return { type: "carousel", contents: bubbles };
  } catch (error) {
    console.error("❌ Error creating Flex Message:", error);
    return null;
  }
};

const createFlexDatabaseDetailMessage = (placeName, imageUrls, answerText, imageDetail, contact_link) => {
  try {
    const defaultImageUrl = "https://cloud-atg.moph.go.th/quality/sites/default/files/default_images/default.png";

    // ถ้าไม่มีภาพให้ใช้รูป default
    if (!Array.isArray(imageUrls) || imageUrls.length === 0) {
      imageUrls = [defaultImageUrl];
    }

    // 🔹 Hero Message (ข้อความรายละเอียด)
    const textBubble = {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: answerText || "ไม่มีรายละเอียดเพิ่มเติม",
            wrap: true,
            size: "md",
            weight: "regular"
          },
          {
            type: "text",
            text: `ที่มา: ${imageDetail || "ไม่ระบุ"}`, // 🔥 ใช้ imageDetail เป็นที่มา
            wrap: true,
            size: "sm",
            color: "#aaaaaa",
            margin: "md"
          }
        ]
      }
    };

    // 🔹 Image Gallery (แสดงรูปภาพแนวนอน)
    const imageBubbles = imageUrls.map((img) => ({
      type: "bubble",
      hero: {
        type: "image",
        url: img,
        size: "full",
        aspectRatio: "16:9",
        aspectMode: "cover"
      }
    }));

    return {
      type: "carousel",
      contents: [textBubble, ...imageBubbles] // ใส่ข้อความเป็นบับเบิลแรก ตามด้วยรูปภาพ
    };
  } catch (error) {
    console.error("❌ Error creating Flex Message:", error);
    return null;
  }
};

const sendImageDatailMessage = async ( 
  placeName,
  dbClient,
  questionText,
  lineId,
  agent
) => {
  try {
    console.log(`🔍 Searching for place: "${placeName}" in Database`);

    if (!dbClient || typeof dbClient.query !== "function") {
      console.error("⛔ Invalid database client provided");
      agent.add("ขออภัย, ไม่สามารถดึงข้อมูลได้ในขณะนี้");
      return false;
    }

    if (!placeName) {
      console.warn("⚠️ No placeName provided");
      agent.add("กรุณาระบุชื่อสถานที่");
      return false;
    }

    const query = `
      SELECT p.id, p.name, p.description, p.contact_link, 
             ARRAY_REMOVE(ARRAY_AGG(pi.image_link), NULL) AS image_links,
             ARRAY_REMOVE(ARRAY_AGG(pi.image_detail), NULL) AS image_details
      FROM places p
      LEFT JOIN place_images pi ON p.id = pi.place_id
      WHERE 
        REGEXP_REPLACE(LOWER(p.name), '[^ก-๙a-z0-9]', '', 'g') 
        ILIKE '%' || REGEXP_REPLACE(LOWER($1), '[^ก-๙a-z0-9]', '', 'g') || '%'
        OR REGEXP_REPLACE(LOWER(p.name), '[^ก-๙a-z0-9 ]', '', 'g') 
        ILIKE '%' || REGEXP_REPLACE(LOWER($1), '[^ก-๙a-z0-9 ]', '', 'g') || '%'
      GROUP BY p.id
      ORDER BY LENGTH(p.name) ASC
      LIMIT 1;
    `;

    const placeData = await fetchImageData(query, [placeName], dbClient);
    if (!placeData) {
      console.warn(`⚠️ No data found in Database for ${placeName}`);
      
      return await sendImageWebDetailMessage(
        placeName,
        dbClient,
        questionText,
        lineId,
        agent
      );
    }

    console.log(`✅ Found place in Database: "${placeData.name}"`);

    // ปรับให้รองรับหลายภาพ
    const imageUrls = placeData.image_links && placeData.image_links.length > 0
      ? placeData.image_links
      : ["https://cloud-atg.moph.go.th/quality/sites/default/files/default_images/default.png"];

    // ดึงที่มาของภาพ ถ้ามีหลายรายการ ให้รวมกัน
    const imageDetail = placeData.image_details && placeData.image_details.length > 0
      ? placeData.image_details.join(", ")
      : "ไม่ระบุ";

    const answerText = placeData.description && placeData.description.trim() !== ""
      ? placeData.description
      : "ไม่มีรายละเอียดเพิ่มเติม";

    const flexMessage = createFlexDatabaseDetailMessage(
      placeData.name,
      imageUrls,
      answerText,
      imageDetail, // 🔥 ส่งที่มาเข้าไป
      placeData.contact_link
    );

    await saveConversation(
      questionText,
      answerText,
      lineId,
      placeData.id,
      null,
      "database",
      null,
      dbClient
    );

    console.log("🚀 Sending Flex Message via agent.add...");
    agent.add(
      new Payload(
        "LINE",
        { type: "flex", altText: placeData.name, contents: flexMessage },
        { sendAsMessage: true }
      )
    );

    console.log("✅ Sending Flex Message from Database Successfully");
    return true;
  } catch (error) {
    console.error("❌ Error in sendImageDatailMessage:", error);
    agent.add("ขออภัย, เกิดข้อผิดพลาดขณะประมวลผลข้อมูลของคุณ.");
    return false;
  }
};

const fetchImageData = async (query, params, dbClient) => {
  try {
    if (!dbClient) {
      console.error("⛔ Database client is not initialized.");
      return null;
    }

    const { rows } = await dbClient.query(query, params);
    if (!rows || rows.length === 0) {
      console.warn("⚠️ No results found for query:", query);
      return null;
    }

    console.log(
      "✅ Query result fetchImageData :",
      JSON.stringify(rows[0], null, 2)
    );
    return rows[0]; // Return the first result
  } catch (error) {
    console.error("❌ Error fetching image data:", error);
    return null;
  }
};

const sendImageWebDetailMessage = async (
  placeName,
  dbClient,
  questionText,
  lineId,
  agent
) => {
  try {
    console.log(`🔍 Searching for place in Web Answer: "${placeName}"`);

    if (!dbClient || typeof dbClient.query !== "function") {
      console.error("⛔ Invalid database client provided");
      agent.add("ขออภัย, ไม่สามารถดึงข้อมูลได้ในขณะนี้");
      return;
    }

    // 🔍 ดึงข้อมูลรายละเอียดจาก Web Answer Table ก่อน
    const bestMatch = await getAnswerFromWebAnswerTable(
      "รายละเอียด",
      placeName,
      dbClient
    );
    if (!bestMatch.answer) {
      console.warn(`⚠️ No detailed answer found for ${placeName}`);
      agent.add("ขออภัย, ไม่พบข้อมูลสถานที่ที่คุณต้องการ.");
      return;
    }

    console.log(`✅ Best Match Answer from Web Table: ${bestMatch.answer}`);

    // 🔍 ดึงข้อมูลรูปภาพ
    const query = `
        SELECT id, image_link, image_detail, place_name, contact_link
        FROM web_answer
        WHERE 
          (place_name % $1 OR lower(place_name) ILIKE '%' || lower($1) || '%')
        ORDER BY similarity(place_name, $1) DESC, LENGTH(place_name) ASC
        LIMIT 1;
    `;

    const placeData = await fetchImageData(query, [placeName], dbClient);

    if (!placeData) {
      console.warn(`⚠️ No image data found for ${placeName}`);
      agent.add("ขออภัย, ไม่พบข้อมูลรูปภาพของสถานที่นี้.");
      return;
    }

    console.log(`✅ Found Image Data for: "${placeData.place_name}"`);

    const imageUrls = placeData.image_link
      ? placeData.image_link.split(",").map((url) => url.trim())
      : [];

    // ✅ ใช้ answer_text ที่ถูกต้องจาก getAnswerFromWebAnswerTable
    const answerText = bestMatch.answer.trim();

    const flexMessage = createFlexDetailMessage(
      placeData.place_name,
      imageUrls,
      answerText,
      placeData.image_detail,
      placeData.contact_link
    );

    await saveConversation(
      questionText,
      answerText,
      lineId,
      null,
      null,
      "web_database",
      placeData.id,
      dbClient
    );

    console.log("🚀 Sending Flex Message via agent.add...");
    agent.add(
      new Payload(
        "LINE",
        { type: "flex", altText: placeData.place_name, contents: flexMessage },
        { sendAsMessage: true }
      )
    );

    console.log("✅ Sending Flex Message from Web Answer Successfully");
  } catch (error) {
    console.error("❌ Error in sendImageWebDetailMessage:", error);
    agent.add("ขออภัย, เกิดข้อผิดพลาดขณะประมวลผลข้อมูลของคุณ.");
  }
};

const getEventsByMonth = async (month, dbClient) => {  
  try {
    const monthMap = {
      มกรา: "มกราคม",
      กุมภา: "กุมภาพันธ์",
      มีนา: "มีนาคม",
      เมษา: "เมษายน",
      พฤษภา: "พฤษภาคม",
      มิถุนา: "มิถุนายน",
      กรกฎา: "กรกฎาคม",
      สิงหา: "สิงหาคม",
      กันยา: "กันยายน",
      ตุลา: "ตุลาคม",
      พฤศจิกา: "พฤศจิกายน",
      ธันวา: "ธันวาคม",
    };

    month = month.trim();
    if (monthMap[month]) {
      month = monthMap[month];
    }

    const plainMonth = month.replace("เดือน", "").trim();
    console.log("📌 ค้นหาข้อมูลของเดือน:", month, "| แบบไม่ใส่ 'เดือน':", plainMonth);

    const query = `SELECT * FROM event WHERE event_month ILIKE ANY(ARRAY[$1, $2, $3]) ORDER BY activity_time ASC`;
    const values = [`%${month}%`, `%เดือน${month}%`, `%${month.slice(0, 3)}%`];
    console.log("📌 Querying database with:", values);


    const { rows } = await dbClient.query(query, values);

    console.log("📌 อีเวนต์ที่พบทั้งหมดจากฐานข้อมูล:", rows.length);
    console.log("📌 รายละเอียดอีเวนต์ที่ได้:", JSON.stringify(rows, null, 2));

    if (rows.length === 0) {
      return [];
    }

    return rows.map((event) => ({
      event_name: event.event_name,
      activity_time: event.activity_time || "ไม่ระบุ",
      address: event.address || "ไม่ระบุ",
      description: event.description || "ไม่มีรายละเอียดเพิ่มเติม",
      image: event.image_link,
      imageSource: event.image_detail,
    }));
  } catch (error) {
    console.error("❌ Error fetching events by month:", error);
    return [];
  }
};

const getEventByName = async (eventName, dbClient) => {
  try {
    console.log("📌 กำลังค้นหาอีเว้นต์:", eventName);

    const query = `SELECT * FROM event WHERE event_name ILIKE $1 LIMIT 1`;
    const values = [`%${eventName.trim()}%`];

    const { rows } = await dbClient.query(query, values);

    if (rows.length === 0) {
      return null;
    }

    const event = rows[0];
    return {
      event_name: event.event_name,
      activity_time: event.activity_time || "ไม่ระบุ",
      address: event.address || "ไม่ระบุ",
      description: event.description || "ไม่มีรายละเอียดเพิ่มเติม",
      image: event.image_link,
      imageSource: event.image_detail,
    };
  } catch (error) {
    console.error("❌ Error fetching event by name:", error);
    return null;
  }
};

const eventInMonth = async (agent, dbClient) => {
  try {
    const questionText = agent.request_.body.queryResult.queryText;
    const lineId = agent.originalRequest.payload.data.source?.userId;
    let events = [];
    let sourceType = "database";
    let eventId = null;
    let month = agent.request_.body.queryResult.parameters.month || null;
    let eventName = null;
    let dataFound = false;

    console.log("📌 ข้อความที่ได้รับ:", questionText);
    console.log("📌 ค่าเดือนจากพารามิเตอร์:", month);

    if (!dbClient) {
      console.error("❌ Database client is not defined.");
      agent.add("⚠️ เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล กรุณาลองใหม่อีกครั้ง.");
      return;
    }

    const eventMatch = questionText.match(/(?:งาน|อีเว้นต์|เทศกาล|วัน|กิจกรรม)?\s*([\p{L}\d]+)/iu);
    if (eventMatch && eventMatch[1].trim().length > 2) {
        eventName = eventMatch[1].trim();
    }
    

    // ✅ ถามหาอีเว้นต์เฉพาะชื่อ → ค้นหาชื่ออีเว้นต์โดยตรง
    if (eventName && !month) {
      console.log("📌 ค้นหาอีเว้นต์โดยใช้ชื่อ:", eventName);
      const event = await getEventByName(eventName, dbClient);
      if (event) {
        dataFound = true;
        events = [event];
      }
    }

    // ✅ ถามหา "เดือนนี้" → ใช้เดือนปัจจุบัน
    if (!dataFound) {
      console.log("📌 ก่อนกำหนดค่า month:", month);
      if (!month || /เดือนนี้|อีเว้นต์ประจำเดือน|ปัจจุบัน|เดือนปัจจุบัน/i.test(questionText)) {
        month = new Date().toLocaleString("th-TH", { month: "long" });
        console.log("📌 ผู้ใช้ถาม 'เดือนนี้' → ใช้เดือนปัจจุบัน:", month);
    }
    
      console.log("📌 ค้นหาข้อมูลของเดือน:", month);
      events = await getEventsByMonth(month, dbClient);
    }

    if (events.length === 0) {
      agent.add("❌ ไม่พบอีเวนต์ที่คุณกำลังค้นหา");
      return;
    }

    console.log("📌 อีเวนต์ที่พบ:", events.length);

    const extractedMonth =
      events[0].activity_time?.match(/(\d+)\s(\S+)/)?.[2] || month;

    let eventText = `📅 อีเวนต์ในเดือน ${extractedMonth}:\n\n`;

    events.forEach((event, index) => {
      eventText += `${index + 1}. ${event.event_name}\n`;
      eventText += `📅 วันที่: ${event.activity_time}\n`;
      eventText += `📍 สถานที่: ${event.address}\n`;
      eventText += `ℹ️ รายละเอียด: ${event.description}\n`;
      eventText += `🖼️ รูปภาพ: ${event.image}\n`;
      eventText += `📌 ที่มารูป: ${event.imageSource}\n\n`;
    });
    eventText = eventText.trim();

    await saveConversation(
      questionText,
      eventText,
      lineId,
      null,
      eventId,
      sourceType,
      null,
      dbClient
    );

    // ✅ แสดงผลอีเว้นต์ด้วย Flex Message
    const flexMessages = [];
    const batchSize = 5;

    for (let i = 0; i < events.length; i += batchSize) {
      const eventBatch = events.slice(i, i + batchSize);
      const defaultImageUrl =
        "https://cloud-atg.moph.go.th/quality/sites/default/files/default_images/default.png";

      const bubbles = eventBatch.map((event) => ({
        type: "bubble",
        hero: {
          type: "image",
          url: event.image || defaultImageUrl,
          size: "full",
          aspectRatio: "1:1",
          aspectMode: "cover",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: `🔹 ${event.event_name || "ไม่ระบุชื่อกิจกรรม"}`,
              weight: "bold",
              size: "xl",
              wrap: true,
            },
            {
              type: "text",
              text: `📅 วันที่: ${event.activity_time || "ไม่ระบุ"}`,
              wrap: true,
              margin: "md",
              size: "sm",
            },
            {
              type: "text",
              text: `📍 สถานที่: ${event.address || "ไม่ระบุ"}`,
              wrap: true,
              margin: "md",
              size: "sm",
            },
            {
              type: "text",
              text: `ℹ️ รายละเอียด: ${event.description || "ไม่มีรายละเอียดเพิ่มเติม"}`,
              wrap: true,
              margin: "md",
              size: "sm",
            },
            {
              type: "text",
              text: `ขอบคุณรูปภาพจาก: ${event.imageSource || "ไม่มีที่มาของรูปภาพ"}`,
              wrap: true,
              margin: "md",
              size: "sm",
              color: "#aaaaaa",
            },
          ],
        },
        footer: {
          type: "box",
          layout: "vertical",
          spacing: "sm",
          contents: [
            {
              type: "button",
              style: "link",
              height: "sm",
              action: {
                type: "uri",
                label: "ดูรายละเอียดรูปภาพเพิ่มเติม",
                uri: event.image,
              },
            },
          ],
        },
      }));

      flexMessages.push({
        type: "carousel",
        contents: bubbles,
      });
    }

    const payload = {
      type: "flex",
      altText: "รายการอีเวนต์",
      contents: flexMessages[0],
    };

    agent.add(new Payload("LINE", payload, { sendAsMessage: true }));
    console.log("✅ Flex Message Event sent to LINE successfully!");
  } catch (error) {
    console.error("❌ Error handling event intent:", error);
    agent.add("⚠️ เกิดข้อผิดพลาด กรุณาลองใหม่");
  }
};

const normalizeSynonym = (placeName) => {
  for (const key in synonymMap) {
    if (synonymMap[key].includes(placeName)) {
      return key; // ใช้ชื่อหลักแทน
    }
  }
  return placeName;
};

const cleanPlaceNameAPI = (placeName) => {
  const wordsToRemove = [
    "เที่ยวขอนแก่น",
    "สนามบินขอนแก่น",
    "มหาวิทยาลัยเกษตรศาสตร์",
    "สาขา",
    "มหาวิทยาลัย",
    "วิทยาลัย",
    "โรงเรียน",
    "สนามบิน",
    "ตลาด",
    "สถานีรถไฟ",
    "สถานีขนส่ง",
    "โรงพยาบาล",
    "อำเภอ",
    "จังหวัด",
    "ขอนแก่น",
  ];

  let cleanedName = placeName;

  wordsToRemove.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    cleanedName = cleanedName.replace(regex, "").trim();
  });

  cleanedName = cleanedName.replace(/\s+/g, " ").trim();

  return normalizeSynonym(cleanedName.length > 0 ? cleanedName : placeName);
};

const extractPlaceFromText = async (text, apiKey) => {
  try {
    console.log(`🔍 Fetching Place for: "${text}" using API Key: ${apiKey}`);

    const apiUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
      text
    )}&inputtype=textquery&fields=name,geometry&key=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log("📡 API Raw Response:", JSON.stringify(data, null, 2));

    if (data.candidates && data.candidates.length > 0) {
      let placeName = data.candidates[0].name;
      console.log("✅ Raw Place Name:", placeName);

      placeName = cleanPlaceNameAPI(placeName);
      console.log("✨ Cleaned Place Name:", placeName);

      return placeName;
    }

    console.log("⚠️ No Place Found");
    return null;
  } catch (error) {
    console.error("🚨 Error fetching place from text:", error);
    return null;
  }
};

const fetchFlexMessageWithPlace = async (intentName, dbClient) => {
  const query = `
    SELECT 
      td.name AS tourist_name, 
      p.name AS place_name,
      p.description,
      p.address,
      p.admission_fee,
      p.contact_link,
      p.opening_hours,
      p.image_link,
      p.image_detail
    FROM tourist_destinations AS td
    JOIN places AS p ON td.place_id = p.id
    WHERE td.name = $1;
  `;
  const values = [intentName];

  try {
    const { rows } = await dbClient.query(query, values);
    if (rows.length === 0)
      throw new Error("No data found for the given intent.");

    return rows.map((row) => ({
      ...row,
      contact_link: row.contact_link?.startsWith("http")
        ? row.contact_link
        : null,
      image_link: row.image_link?.startsWith("http") ? row.image_link : null, // หากไม่มีลิงก์ที่ถูกต้อง ให้ตั้งค่า null
    }));
  } catch (error) {
    console.error(
      "Error fetching tourist destinations with places:",
      error.message
    );
    throw error;
  }
};

const createTouristFlexMessage = (data) => {
  const imageUrl = data.image_link?.startsWith("http")
    ? data.image_link
    : "https://via.placeholder.com/150";

  const contactLink = data.contact_link?.startsWith("http")
    ? data.contact_link
    : "https://example.com";

  return {
    type: "bubble",
    hero: {
      type: "image",
      url: imageUrl,
      size: "full",
      aspectRatio: "20:13",
      aspectMode: "cover",
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: data.place_name || "ชื่อสถานที่ไม่ระบุ",
          weight: "bold",
          size: "xl",
          wrap: true,
        },
        {
          type: "text",
          text: data.image_detail || "รายละเอียดไม่ระบุ",
          size: "sm",
          wrap: true,
        },
        {
          type: "box",
          layout: "vertical",
          margin: "lg",
          spacing: "sm",
          contents: [
            {
              type: "box",
              layout: "baseline",
              contents: [
                {
                  type: "text",
                  text: data.tourist_name || "ไม่ระบุ",
                  wrap: true,
                  color: "#666666",
                  size: "sm",
                  flex: 5,
                },
              ],
            },
            {
              type: "box",
              layout: "baseline",
              contents: [
                {
                  type: "text",
                  text: "ที่อยู่",
                  color: "#aaaaaa",
                  size: "sm",
                  flex: 2,
                },
                {
                  type: "text",
                  text: data.address || "ไม่ระบุ",
                  wrap: true,
                  color: "#666666",
                  size: "sm",
                  flex: 5,
                },
              ],
            },
            {
              type: "box",
              layout: "baseline",
              contents: [
                {
                  type: "text",
                  text: "เวลาทำการ",
                  color: "#aaaaaa",
                  size: "sm",
                  flex: 2,
                },
                {
                  type: "text",
                  text: data.opening_hours || "ไม่ระบุ",
                  wrap: true,
                  color: "#666666",
                  size: "sm",
                  flex: 5,
                },
              ],
            },
          ],
        },
      ],
    },
    footer: {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      contents: [
        {
          type: "button",
          style: "link",
          height: "sm",
          action: {
            type: "uri",
            label: "ช่องทางการติดต่อ",
            uri: contactLink,
          },
        },
      ],
    },
  };
};

const sendFlexMessageToUser = async (userId, flexMessage) => {
  if (!userId || !flexMessage || !flexMessage.contents) {
    throw new Error("Invalid userId or flexMessage");
  }

  const payload = {
    to: userId,
    messages: [
      {
        type: "flex",
        altText: "Flex Message",
        contents: flexMessage,
      },
    ],
  };

  try {
    const response = await axios.post(
      "https://api.line.me/v2/bot/message/push",
      payload,
      {
        headers: {
          Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Message sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error sending Flex Message:",
      error.response?.data || error.message
    );
    throw new Error("Failed to send message to LINE.");
  }
};

const sendFlexMessageTourist = async (agent, intentName, dbClient) => {
  const questionText =
    agent.request_.body.queryResult.queryText || "Unknown Question"; // ✅ ป้องกันค่าที่ไม่มี

  if (!intentName) {
    agent.add("ชื่อคำถามไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
    return;
  }

  if (!dbClient) {
    console.error(
      "❌ dbClient is not available. Ensure it's properly initialized."
    );
    agent.add("⚠️ ไม่สามารถเชื่อมต่อฐานข้อมูล กรุณาลองใหม่อีกครั้ง.");
    return;
  }

  try {
    const data = await fetchFlexMessageWithPlace(intentName, dbClient);
    if (!data || data.length === 0) {
      throw new Error("ไม่มีข้อมูลสำหรับคำถามนี้");
    }

    const validatedData = data.map((item) => {
      if (item.imageUrl && !item.imageUrl.startsWith("http")) {
        item.imageUrl = `https://cloud-atg.moph.go.th/quality/sites/default/files/default_images/default.png`;
      }
      return item;
    });

    const bubbles = validatedData.map((item) => createTouristFlexMessage(item));
    const chunkSize = 10;
    const messageChunks = [];
    for (let i = 0; i < bubbles.length; i += chunkSize) {
      messageChunks.push(bubbles.slice(i, i + chunkSize));
    }

    const lineId = agent.originalRequest.payload.data.source?.userId;
    if (!lineId) {
      console.error("❌ LINE userId not found.");
      agent.add("⚠️ ไม่สามารถรับข้อมูลผู้ใช้ได้ กรุณาลองใหม่");
      return;
    }

    console.log(
      `📢 Sending ${messageChunks.length} message batch(es) to userId:`,
      lineId
    );

    for (const [index, chunk] of messageChunks.entries()) {
      const flexMessage = {
        type: "carousel",
        contents: chunk,
      };

      await sendFlexMessageToUser(lineId, flexMessage);
      console.log(`✅ ส่งชุดที่ ${index + 1}/${messageChunks.length} สำเร็จ`);

      if (index < messageChunks.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
    }

    if (dbClient) {
      await saveConversation(
        questionText,
        `Flex message (${intentName})`,
        lineId,
        null,
        null,
        "Flex Message",
        null,
        dbClient
      );
    } else {
      console.warn(
        "⚠️ Database client is not available. Skipping saveConversation."
      );
    }

    agent.add("");
  } catch (error) {
    console.error("❌ Error sending Flex Message:", error.message);
    agent.add("ขออภัย เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง");
  }
};

async function sendMessageToLine(userId, message) {
  try {
    const response = await client.pushMessage(userId, {
      type: "text",
      text: message,
    });
    console.log("✅ Message sent to LINE:", response);
  } catch (error) {
    console.error("❌ Failed to send message:", error.response?.data || error);
  }
}

const synonymMap = {
  เดอะนัวหมูกระทะบุฟเฟต์: [
    "เดอะนัวหมูกระทะบุฟเฟต์",
    "เดอะนัว",
    "เดอะนัว หมูกระทะบุฟเฟต์",
    "เดอะนัวหมูกระทะ",
    "เดอะนัว หมูกระทะบุฟเฟต์",
  ],
  "ทอมมี่ หมูเกาหลี": ["ทอมมี่ หมูเกาหลี", "ทอมมี่ หมูกระทะ"],
  "นายตอง หมูกระทะ": [
    "นายตอง หมูกระทะ",
    "นายตองหมูกระทะ",
    "นายตอง",
    "หมูกระทะนายตอง",
  ],
  "โอปอ บุฟเฟ่ต์": [
    "โอปอ บุฟเฟ่ต์",
    "โอมายก้อน",
    "โอปอ หมูกระทะ",
    "โอมายก้อน by โอปอ",
  ],
  "Columbo Craft Village": ["Columbo Craft Village", "Columbo Village"],
  "แจ่ม Cafe&Eatery": ["แจ่ม", "แจ่มคาเฟ่", "แจ่ม คาเฟ่"],
};

const mapSynonyms = (text) => {
  if (!text) return "";

  let mappedText = text;

  Object.entries(synonymMap).forEach(([canonicalName, synonyms]) => {
    synonyms.forEach((synonym) => {
      if (mappedText.includes(synonym)) {
        mappedText = canonicalName;
      }
    });
  });

  return mappedText;
};

const normalizeText = (text) => {
  if (!text) return "";

  let extractedLocation = extractLocation(text);

  const datePattern = /\b\d{1,2}\/\d{1,2}\/\d{4}\b/g;
  const dateMatches = extractedLocation.match(datePattern);

  let cleanedText = extractedLocation
    .toLowerCase()
    .trim()
    .replace(/[()\-,.\\_]/g, "")
    .replace(/\b(?!2499 )cafe\b|หมูกระทะ|บุฟเฟต์|ร้าน|คาเฟ่/gi, "")
    .replace(/\s+/g, " ");

  if (dateMatches) {
    cleanedText = dateMatches[0] + " " + cleanedText;
  }

  return cleanedText.trim();
};

const extractLocation = (text) => {
  let doc = nlp(text);
  let places = doc.places().out("array");
  return places.length > 0 ? places[0] : text;
};

const getCorrectLocation = (inputLocation, webData) => {
  const mappedInput = mapSynonyms(inputLocation);
  const normalizedInput = normalizeText(mappedInput);
  console.log("Mapped & Normalized Input:", normalizedInput);

  const normalizedWebData = webData.map((item) => ({
    ...item,
    สถานที่: normalizeText(mapSynonyms(item.สถานที่)),
  }));

  const exactMatch = normalizedWebData.find(
    (item) => item.สถานที่ === normalizedInput
  );
  if (exactMatch) {
    console.log("Exact Match Found:", exactMatch);
    return { ...exactMatch, similarityScore: 0 };
  }

  const fuse = new Fuse(normalizedWebData, {
    includeScore: true,
    threshold: 0.3,
    distance: 30,
    keys: [
      { name: "สถานที่", weight: 0.7 },
      { name: "รายละเอียด", weight: 0.1 },
    ],
  });

  const results = fuse.search(normalizedInput);
  console.log("Fuse.js Results:", results);

  if (results.length > 0) {
    const bestMatch = results.reduce((prev, current) =>
      prev.score < current.score ? prev : current
    ).item;

    console.log("Best Match from Fuse.js:", bestMatch);
    return bestMatch;
  } else {
    console.log("No matches found with Fuse.js. Attempting simple match...");

    const stringSimilarity = require("string-similarity");

    let bestMatch = null;
    let bestScore = 0;

    normalizedWebData.forEach((item) => {
      const similarity = stringSimilarity.compareTwoStrings(
        item.สถานที่,
        normalizedInput
      );
      if (similarity > bestScore && similarity > 0.6) {
        bestMatch = item;
        bestScore = similarity;
      }
    });

    if (bestMatch) {
      console.log("Simple Match Found:", bestMatch);
      return { ...bestMatch, similarityScore: 1 - bestScore };
    } else {
      console.log("No matches found with exact matching.");
      return null;
    }
  }
};

const getSimilarityScore = (location, questionText) => {
  const fuse = new Fuse([{ name: location }], {
    includeScore: true,
    threshold: 0.4,
    keys: ["name"],
  });

  const results = fuse.search(questionText);

  if (results.length > 0) {
    const score = results[0].score;
    return 1 - score;
  }

  return 0;
};

const handleIntent = async (
  agent,
  dbClient,
  questionText,
  location = "",
  displayName = ""
) => {
  const intentName = agent.request_.body.queryResult.intent.displayName;
  const lineId = agent.originalRequest.payload.data.source.userId;

  let answer = "";
  let placeId = null;
  let sourceType = "";
  let answerText = "";
  let isFromWeb = false;
  let webAnswerId = null;
  let responseMessage = "";
  let eventId = null;
  let contactLink = "";

  try {
    const userProfile = await getUserProfile(lineId);
    // console.log("User Profile:", userProfile);

    if (userProfile) {
      await saveUser(userProfile, dbClient);
    }

    const synonymMap = {
      "โอปอ บุฟเฟ่ต์": [
        "โอปอ บุฟเฟ่ต์",
        "โอมายก้อน",
        "โอปอ หมูกระทะ",
        "โอมายก้อน by โอปอ",
      ],
      "อุทยานแห่งชาติภูผาม่าน": ["ภูผาม่าน", "ภูผามาน"],
      "ป่าสนดงลาน": ["สวนสนดงลาน", "ป่าสน ดงลาน", "ดงลาน", "ป่าสนดงลาน ภูผาม่าน"],
      "ครัวสุพรรณิการ์": [
        "Supanniga",
        "Supanniga Home",
        "ห้องทานข้าวสุพรรณิการ์",
        "ห้องทานข้าวสุพรรณิการ์",
        "ครัวสุพรรณิการ์ (Supanniga Home)",
      ],
    };

    const normalizeMessage = (text) => {
      if (!text) return "";

      let extractedLocation = extractLocation(text);
      if (typeof extractedLocation !== "string") {
        extractedLocation = "";
      }

      let normalized = extractedLocation.toLowerCase().trim();

      Object.keys(synonymMap).forEach((key) => {
        const regex = new RegExp(`\\b${key}\\b`, "gi");
        normalized = normalized.replace(regex, synonymMap[key]);
      });

      normalized = normalized.replace(
        /\bขอนแก่น\b(?!.*สวนสัตว์|พิพิธภัณฑ์|2499)/gi,
        ""
      );

      // ตรวจสอบว่ามีวันที่ในรูปแบบ dd/mm/yyyy หรือไม่
      const datePattern = /\b\d{1,2}\/\d{1,2}\/\d{4}\b/g;
      const dateMatches = normalized.match(datePattern);

      // ลบคำที่ไม่จำเป็นออก ยกเว้น "/"
      normalized = normalized
        .replace(/เปิด/g, "")
        .replace(/(?<!2499 )cafe|หมูกระทะ|สนามบิน|บุฟเฟต์|ร้าน|คาเฟ่/gi, "")
        .replace(/[\u200B-\u200D\uFEFF\u00A0]/g, "");

      // ลบสัญลักษณ์อื่นๆ แต่ไม่ลบ "/"
      normalized = normalized
        .replace(/[()\-,.\\_]/g, "")
        .replace(/\s+/g, " ")
        .trim();

      // ถ้ามีวันที่ ให้เพิ่มคืนเข้าไป
      if (dateMatches) {
        normalized = dateMatches[0] + " " + normalized;
      }

      console.log(`✅ Normalized Output: "${normalized}"`); // ตรวจสอบผลลัพธ์หลัง normalize
      return normalized;
    };

    let placeName = location;

    if (
      agent.parameters &&
      agent.parameters.Location &&
      agent.parameters.Location.length > 0
    ) {
      placeName = normalizeMessage(agent.parameters.Location[0]);
      console.log(`Using Location from Parameters: ${placeName}`);
    }

    const normalizedLocation = normalizeMessage(placeName);
    const normalizedQuestion = normalizeMessage(questionText);
    placeName = normalizedLocation;

    console.log(`🔍 Normalized Place Name: "${normalizedLocation}"`);
    console.log(`🔍 Normalized Question Text: "${normalizedQuestion}"`);

    // ✅ ถ้า location และ questionText ตรงกัน ให้ใช้ location ทันที
    if (
      normalizedLocation === normalizedQuestion ||
      normalizedQuestion.includes(normalizedLocation) ||
      normalizedLocation.includes(normalizedQuestion)
    ) {
      console.log(
        "✅ Location and QuestionText are identical or subset. Using Location."
      );
      console.log(
        `สถานที่ที่คุณค้นหาคือ: "${placeName}" (ใช้ค่า Location ตรง ๆ)`
      );
      placeName = normalizedLocation;
    } else {
      // ✅ คำนวณ similarity
      const similarityScore = getSimilarityScore(
        normalizedLocation,
        normalizedQuestion
      );
      const isTextMatch = similarityScore > 0.25;
      console.log(
        `📊 Similarity Score: ${similarityScore}, isTextMatch: ${isTextMatch}`
      );

      if (similarityScore >= 0.3) {
        console.log("✅ Similarity สูงพอ ใช้ Location ตรง ๆ");
        console.log(
          `สถานที่ที่คุณค้นหาคือ: "${placeName}" (ใช้ค่า Location ที่คล้ายกันมาก)`
        );
        placeName = normalizedLocation;
      } else {
        // 🚨 **แทนที่จะเรียก API ทันที ให้ลองเช็คฐานข้อมูลก่อน**
        console.log("🚨 Similarity ต่ำ ต้องลองเช็คฐานข้อมูลก่อน...");
        const dbResult = await getAnswerForIntent(
          intentName,
          normalizedLocation,
          dbClient
        );
        const webResult = await getAnswerFromWebAnswerTable(
          intentName,
          normalizedLocation,
          dbClient
        );

        if (dbResult?.answer || webResult?.answer) {
          console.log("✅ พบข้อมูลในฐานข้อมูล ใช้ Location ได้เลย");
          placeName = normalizedLocation;
        } else {
          console.log(
            "🚨 Similarity ต่ำไป ต้องใช้ API เพื่อดึงข้อมูลสถานที่..."
          );

          const apiKey = "AIzaSyCBjF0_ddt3QZj9eSjK4xUWYYdvYyUjvO0";
          placeName = await extractPlaceFromText(questionText, apiKey);
          console.log(`🌍 ค่าที่ได้จาก API: "${placeName}"`);

          if (!placeName) {
            console.log(
              "❌ No valid Place Name extracted. Sending default response."
            );
            responseMessage = "ไม่พบข้อมูลสถานที่ที่เกี่ยวข้องกับคำถามของคุณ.";
            sourceType = "unknown";
            await saveConversation(
              questionText,
              responseMessage,
              lineId,
              placeId,
              eventId,
              sourceType,
              webAnswerId,
              dbClient
            );
            const payload = new Payload(
              "LINE",
              { type: "text", text: responseMessage },
              { sendAsMessage: true }
            );
            agent.add(payload);
            return;
          }
        }
      }
    }

    console.log(`Final Place Name to be used: ${placeName}`);
    console.log(`Intent Name: ${intentName}, Place Name: ${placeName}`);

    console.log(
      `🔍 Fetching answer for place: "${placeName}" with intent: "${intentName}"`
    );
    const dbResult = await getAnswerForIntent(intentName, location, dbClient);

    if (dbResult && dbResult.answer) {
      console.log(`Database result found for ${placeName}:`, dbResult.answer);

      answer = dbResult.answer;
      placeId = dbResult.placeId;
      sourceType = "database";
      isFromWeb = false;

      if (intentName === "ค่าธรรมเนียมการเข้า") {
        responseMessage =
          dbResult.answer.fee || "ไม่พบข้อมูลค่าธรรมเนียมการเข้า";
      } else if (intentName === "เส้นทางไปยังสถานที่") {
        responseMessage =
          dbResult.answer.path || "ไม่พบข้อมูลเส้นทางไปยังสถานที่";
      } else if (intentName === "เบอร์โทร") {
        responseMessage = dbResult.answer.contact || "ไม่พบข้อมูลเบอร์โทร";
      } else if (intentName === "รายละเอียด") {
        await sendImageDatailMessage(
          location,
          dbClient,
          questionText,
          lineId,
          agent
        );
        return;
      } else if (intentName === "เวลาเปิดทำการ") {
        responseMessage =
          dbResult.answer.openingHours || "ไม่พบข้อมูลเวลาเปิดทำการ";
      } else {
        responseMessage = "ไม่พบข้อมูลที่เกี่ยวข้องในฐานข้อมูล";
      }
      console.log(
        `📌 Final Response: "${responseMessage}" from source: "${sourceType}"`
      );
    } else {
      console.log(
        `No database result found for ${placeName}, switching to webAnswerTable.`
      );

      const webResult = await getAnswerFromWebAnswerTable(
        intentName,
        placeName,
        dbClient
      );

      if (webResult && webResult.answer) {
        console.log(`WebResult found for ${placeName}:`, webResult.answer);

        if (intentName === "รายละเอียด") {
          await sendImageWebDetailMessage(
            location,
            dbClient,
            questionText,
            lineId,
            agent
          );
          return;
        }

        responseMessage = webResult.answer || "ข้อมูลไม่ครบถ้วน";
        sourceType = "web_database";
        isFromWeb = true;
        webAnswerId = webResult.placeId;
        console.log(
          `📌 Final Response: "${responseMessage}" from source: "${sourceType}"`
        );

        await saveConversation(
          questionText,
          responseMessage,
          lineId,
          placeId,
          eventId,
          sourceType,
          webAnswerId,
          dbClient
        );
        const payload = new Payload(
          "LINE",
          { type: "text", text: responseMessage },
          { sendAsMessage: true }
        );
        agent.add(payload);

        return;
      } else {
        console.log("No webResult found. Searching in webData sources...");

        const dataFiles = [
          "./data/place1.json",
          "./data/place2.json",
          "./data/place3.json",
          "./data/cafe1.json",
          "./data/cafe2.json",
          "./data/cafe3.json",
          "./data/buffet1.json",
          "./data/buffet2.json",
          "./data/restaurant1.json",
          "./data/restaurant2.json",
          "./data/restaurant3.json",
        ];

        let allResults = [];

        function createRegex(placeName) {
          const escapedPlaceName = placeName.replace(
            /[-/\\^$*+?.()|[\]{}]/g,
            "\\$&"
          );
          return new RegExp(`.*${escapedPlaceName}.*`, "i");
        }

        for (const file of dataFiles) {
          const webData = loadDataFromFile(file);

          if (!webData || webData.length === 0) {
            continue;
          }

          const correctedLocation = getCorrectLocation(placeName, webData);
          console.log(`Corrected Location from ${file}:`, correctedLocation);

          if (correctedLocation && correctedLocation.สถานที่) {
            const regex = createRegex(normalizeText(correctedLocation.สถานที่));
            const filteredData = webData.filter(
              (item) => item.สถานที่ && regex.test(normalizeText(item.สถานที่))
            );

            if (filteredData.length > 0) {
              allResults.push(
                ...filteredData.map((result) => ({
                  ...result,
                  fileName: file,
                }))
              );
            }
          }
        }

        if (allResults.length === 0) {
          responseMessage = "ไม่พบข้อมูลสถานที่ที่ตรงกับคำถามในทุกเว็บไซต์";
          const payload = new Payload(
            "LINE",
            { type: "text", text: responseMessage },
            { sendAsMessage: true }
          );
          agent.add(payload);
          return;
        }

        const exactMatch = allResults.find((result) =>
          normalizeText(result.สถานที่).includes(normalizeText(placeName))
        );

        const bestResult = exactMatch
          ? exactMatch
          : allResults.reduce((best, current) =>
              current.similarityScore < best.similarityScore ? current : best
            );

        console.log(
          `Best Result Selected from ${bestResult.fileName}:`,
          bestResult
        );

        const keywords = await extractKeywords(questionText, dbClient);
        if (keywords.length === 0) {
          responseMessage = "ไม่พบคำสำคัญสำหรับการค้นหาในเว็บไซต์";
          agent.add(responseMessage);
          return;
        }

        const answerText = filterByKeyword(
          [bestResult],
          keywords,
          questionText,
          displayName
        );
        console.log("===== Debugging filterByKeyword Output =====");
        console.log("answerText:", answerText.response);
        console.log("contactLink:", answerText.contactLink);
        console.log("===========================================");

        responseMessage = answerText.response || "ไม่พบข้อมูลที่ตรงกับคำสำคัญ";
        contactLink = answerText.contactLink;
        sourceType = "website";
        isFromWeb = true;
        const cleanedLocationName = removeLeadingNumbers(
          bestResult.สถานที่ || "Unknown"
        );
        if (!bestResult || !bestResult.สถานที่) {
          console.log("ไม่พบข้อมูลสถานที่ที่เกี่ยวข้อง ไม่บันทึกลงฐานข้อมูล");
          return;
        }
        console.log(`สถานที่ที่ทำความสะอาดแล้ว: ${cleanedLocationName}`);

        console.log(`Answer source: ${sourceType}`);
        console.log(`Answer text: ${responseMessage}`);

        const imageUrl =
          bestResult?.รูปภาพ?.[0] ||
          "https://via.placeholder.com/400x300.png?text=No+Image";
        const imageDescription =
          bestResult?.รายละเอียดรูปภาพ || "ไม่มีข้อมูลเพิ่มเติม";

        await saveWebAnswer(
          responseMessage,
          cleanedLocationName,
          intentName,
          isFromWeb,
          dbClient,
          imageUrl,
          imageDescription,
          contactLink
        );
        console.log("Answer saved to database from webData sources.");
      }
      if (displayName === "รายละเอียด" && typeof responseMessage === "object") {
        const payload = new Payload("LINE", responseMessage, {
          sendAsMessage: true,
        });
        agent.add(payload);
        return;
      }
      console.log(
        `📌 Final Response: "${responseMessage}" from source: "${sourceType}"`
      );
    }
    console.log(`📌 Sending response: "${responseMessage}"`);
    const payload = new Payload(
      "LINE",
      { type: "text", text: responseMessage },
      { sendAsMessage: true }
    );
    agent.add(payload);

    await saveConversation(
      questionText,
      responseMessage,
      lineId,
      placeId,
      eventId,
      sourceType,
      webAnswerId,
      dbClient
    );
  } catch (err) {
    console.error("Error handling intent:", err.stack);
    agent.add("ขออภัย, เกิดข้อผิดพลาดขณะประมวลผลคำขอของคุณ.");
  }
};

const handleWebhookRequest = async (req, res, dbClient) => {
  try {
    const lineId =
      req.body.originalDetectIntentRequest.payload?.data?.source?.userId;
    const questionText = req.body.queryResult.queryText;
    const location = Array.isArray(req.body.queryResult.parameters.location)
      ? req.body.queryResult.parameters.location[0]
      : req.body.queryResult.parameters.location;
    const displayName = req.body.queryResult.intent.displayName;
    const parameters = req.body.queryResult.parameters;

    console.log("Request Body:", req.body);
    console.log("Received Parameters:", parameters);
    console.log("line_id:", lineId);
    console.log("questionText:", questionText);
    console.log("intent displayName:", displayName);
    console.log("location:", location);

    if (!lineId || !questionText || !displayName) {
      console.error("Missing parameters:", {
        lineId,
        questionText,
        displayName,
      });
      return res.status(400).send("Missing required parameters.");
    }

    const agent = new WebhookClient({ request: req, response: res });

    if (lineId) {
      // console.log(`Saving line_id to database...`);
      await saveUser(lineId, dbClient);
    } else {
      console.log("Missing line_id, skipping user save.");
    }
    const intentMap = new Map();
    intentMap.set("ค่าธรรมเนียมการเข้า", (agent) =>
      handleIntent(agent, dbClient, questionText, location, displayName)
    );

    intentMap.set("ปฎิทินประจำเดือน", (agent) => eventInMonth(agent, dbClient));

    intentMap.set("Default Welcome Intent", (agent) =>
      handleIntent(agent, dbClient, questionText, location, displayName)
    );
    intentMap.set("Default Fallback Intent", (agent) =>
      handleIntent(agent, dbClient, questionText, location, displayName)
    );
    intentMap.set("รายละเอียด", (agent) =>
      handleIntent(agent, dbClient, questionText, location, displayName)
    );

    intentMap.set("เวลาเปิดทำการ", (agent) =>
      handleIntent(agent, dbClient, questionText, location, displayName)
    );

    intentMap.set("เที่ยวขอนแก่น", (agent) =>
      sendFlexMessageTourist(agent, "เที่ยวขอนแก่น", dbClient)
    );
    intentMap.set("ร้านอาหารในเมืองขอนแก่น", (agent) =>
      sendFlexMessageTourist(agent, "ร้านอาหารในเมืองขอนแก่น", dbClient)
    );
    intentMap.set("คาเฟ่ยอดฮิต", (agent) =>
      sendFlexMessageTourist(agent, "คาเฟ่ยอดฮิต", dbClient)
    );
    intentMap.set("ร้านอาหารบุฟเฟ่", (agent) =>
      sendFlexMessageTourist(agent, "ร้านอาหารบุฟเฟ่", dbClient)
    );
    intentMap.set("อาหารระดับมิชลินไกด์", (agent) =>
      sendFlexMessageTourist(agent, "อาหารระดับมิชลินไกด์", dbClient)
    );
    intentMap.set("ประเภทอาหารทั่วไป", (agent) =>
      sendFlexMessageTourist(agent, "ประเภทอาหารทั่วไป", dbClient)
    );
    intentMap.set("ประเภทอาหารอินเตอร์", (agent) =>
      sendFlexMessageTourist(agent, "ประเภทอาหารอินเตอร์", dbClient)
    );
    intentMap.set("ประเภทอาหารอีสาน", (agent) =>
      sendFlexMessageTourist(agent, "ประเภทอาหารอีสาน", dbClient)
    );
    intentMap.set("ประเภทอาหารไทย", (agent) =>
      sendFlexMessageTourist(agent, "ประเภทอาหารไทย", dbClient)
    );
    intentMap.set("เส้นทางไปยังสถานที่", async (agent) => {
      await sendLocationBasedOnQuestion(agent, dbClient,location);
    });

    intentMap.set("ร้านอาหารดังยอดฮิต", async (agent) => {
      try {
        await sendFlexMessage(agent, "restaurant", dbClient);
      } catch (error) {
        console.error("Error handling 'เที่ยวขอนแก่น' intent:", error);
        agent.add("ขออภัย, เกิดข้อผิดพลาดขณะประมวลผลคำขอของคุณ.");
      }
    });

    intentMap.set("เลือกอำเภอ", async (agent) => {
      try {
        await sendFlexMessage(agent, "district", dbClient);
      } catch (error) {
        console.error("Error handling 'เลือกอำเภอ' intent:", error);
        agent.add("ขออภัย, เกิดข้อผิดพลาดขณะประมวลผลคำขอของคุณ.");
      }
    });

    intentMap.set("ประเภทอำเภอ", async (agent) => {
      try {
        await sendFlexMessage(agent, "districtType", dbClient);
      } catch (error) {
        console.error("Error handling 'ประเภทอำเภอ' intent:", error);
        agent.add("ขออภัย, เกิดข้อผิดพลาดขณะประมวลผลคำขอของคุณ.");
      }
    });

    intentMap.set("เลือกประเภทสถานที่", async (agent) => {
      try {
        await sendFlexMessage(agent, "kkctype", dbClient);
      } catch (error) {
        console.error("Error handling 'เลือกประเภทสถานที่' intent:", error);
        agent.add("ขออภัย, เกิดข้อผิดพลาดขณะประมวลผลคำขอของคุณ.");
      }
    });

    intentMap.set("ประเภทสถานที่ท่องเที่ยว", async (agent) => {
      try {
        await sendFlexMessage(agent, "typeplaces", dbClient);
      } catch (error) {
        console.error(
          "Error handling 'ประเภทสถานที่ท่องเที่ยว' intent:",
          error
        );
        agent.add("ขออภัย, เกิดข้อผิดพลาดขณะประมวลผลคำขอของคุณ.");
      }
    });
    if (!intentMap.has(displayName)) {
      console.log("Intent not found, responding with Default Fallback Message.");
      const fallbackMessage = "ขออภัย ฉันไม่เข้าใจคำถามของคุณ ลองถามใหม่อีกครั้งนะ 😊";
      agent.add(fallbackMessage);
      // ส่ง HTTP Response เพื่อให้ Webhook ปิดการทำงานอย่างสมบูรณ์
      return res.json({
          fulfillmentText: fallbackMessage,
      });
  }

    agent.handleRequest(intentMap);
  } catch (err) {
    console.error("Error handling webhook request:", err.stack);
    res.status(500).send("ขออภัย, เกิดข้อผิดพลาดขณะประมวลผลคำขอของคุณ");
  }
};

function removeLeadingNumbers(placeName) {
  return placeName.replace(/^\d+\.\s*/, "").trim();
}

async function sendLocationBasedOnQuestion(agent, dbClient, location = "") {
  try {
    const userId = agent.originalRequest?.payload?.data?.source?.userId || null;
    const questionText = agent.request_.body.queryResult.queryText;
    const lineId = agent.originalRequest.payload.data.source.userId;

    const intentName = "เส้นทางไปยังสถานที่";
    let placeName = location;
    let eventId = null;
    let placeId = null;
    let answer = "";
    let sourceType = "";
    let answerText = "";
    let isFromWeb = false;
    let webAnswerId = null;
    let responseMessage = "";

    if (!userId) {
      console.warn("⚠️ userId is null. Attempting to fetch user profile...");
      const userProfile = await getUserProfile(
        agent.originalRequest?.payload?.data?.source?.userId
      );
      if (userProfile) {
        userId = userProfile.userId;
        console.log("✅ Retrieved userId from profile:", userId);
      } else {
        console.warn(
          "⚠️ Unable to fetch user profile. Skipping saveConversation."
        );
      }
    }

    const synonymMap = {
      "โอปอ บุฟเฟ่ต์": [
        "โอปอ บุฟเฟ่ต์",
        "โอมายก้อน",
        "โอปอ หมูกระทะ",
        "โอมายก้อน by โอปอ",
      ],
      "อุทยานแห่งชาติภูผาม่าน": ["ภูผาม่าน", "ภูผามาน"],
      "ป่าสนดงลาน": ["สวนสนดงลาน", "ป่าสน ดงลาน", "ดงลาน", "ป่าสนดงลาน ภูผาม่าน"],
      "ครัวสุพรรณิการ์": [
        "Supanniga",
        "Supanniga Home",
        "ห้องทานข้าวสุพรรณิการ์",
        "ห้องทานข้าวสุพรรณิการ์",
        "ครัวสุพรรณิการ์ (Supanniga Home)",
      ],
    };

    const normalizeMessage = (text) => {
      if (!text) return "";

      let extractedLocation = extractLocation(text);
      let normalized = extractedLocation.toLowerCase().trim();

      Object.keys(synonymMap).forEach((key) => {
        const regex = new RegExp(`\\b${key}\\b`, "gi");
        console.log(`Replacing "${key}" in "${normalized}"`);
        normalized = normalized.replace(regex, synonymMap[key]);
      });
      console.log("After synonym replacement:", normalized);

      normalized = normalized
        .replace(/(ไปยังไง|เดินทางยังไง|เส้นทาง)/gi, "")
        .replace(/(?<!2499 )cafe|หมูกระทะ|สนามบิน|บุฟเฟต์|ร้าน|คาเฟ่/gi, "")
        .replace(/[\u200B-\u200D\uFEFF\u00A0]/g, "")
        .replace(/[()\-,./\\_]/g, "")
        .replace(/\d+/g, "")
        .replace(/\s+/g, " ")
        .trim();

      console.log("Before normalization:", extractedLocation);
      console.log("After each step:", normalized);
      return normalized;
    };


    if (
      agent.parameters &&
      agent.parameters.Location &&
      agent.parameters.Location.length > 0
    ) {
      console.log("Original Location Parameter:", agent.parameters.Location[0]);
      placeName = normalizeMessage(agent.parameters.Location[0]);
      console.log(`Using Location from Parameters: ${placeName}`);
    }

    const normalizedLocation = normalizeMessage(placeName);
    const normalizedQuestion = normalizeMessage(questionText);
    placeName = normalizedLocation;

    console.log(`🔍 Normalized Place Name: "${normalizedLocation}"`);
    console.log(`🔍 Normalized Question Text: "${normalizedQuestion}"`);

    // ✅ ถ้า location และ questionText ตรงกัน ให้ใช้ location ทันที
    if (
      normalizedLocation === normalizedQuestion ||
      normalizedQuestion.includes(normalizedLocation) ||
      normalizedLocation.includes(normalizedQuestion)
    ) {
      console.log(
        "✅ Location and QuestionText are identical or subset. Using Location."
      );
      console.log(
        `สถานที่ที่คุณค้นหาคือ: "${placeName}" (ใช้ค่า Location ตรง ๆ)`
      );
      placeName = normalizedLocation;
    } else {
      // ✅ คำนวณ similarity
      const similarityScore = getSimilarityScore(
        normalizedLocation,
        normalizedQuestion
      );
      const isTextMatch = similarityScore > 0.25;
      console.log(
        `📊 Similarity Score: ${similarityScore}, isTextMatch: ${isTextMatch}`
      );

      if (similarityScore >= 0.3) {
        console.log("✅ Similarity สูงพอ ใช้ Location ตรง ๆ");
        console.log(
          `สถานที่ที่คุณค้นหาคือ: "${placeName}" (ใช้ค่า Location ที่คล้ายกันมาก)`
        );
        placeName = normalizedLocation;
      } else {
        // 🚨 **แทนที่จะเรียก API ทันที ให้ลองเช็คฐานข้อมูลก่อน**
        console.log("🚨 Similarity ต่ำ ต้องลองเช็คฐานข้อมูลก่อน...");
        const dbResult = await getAnswerForIntent(
          intentName,
          normalizedLocation,
          dbClient
        );
        const webResult = await getAnswerFromWebAnswerTable(
          intentName,
          normalizedLocation,
          dbClient
        );

        if (dbResult?.answer || webResult?.answer) {
          console.log("✅ พบข้อมูลในฐานข้อมูล ใช้ Location ได้เลย");
          placeName = normalizedLocation;
        } else {
          console.log(
            "🚨 Similarity ต่ำไป ต้องใช้ API เพื่อดึงข้อมูลสถานที่..."
          );

          const apiKey = "AIzaSyCBjF0_ddt3QZj9eSjK4xUWYYdvYyUjvO0";
          placeName = await extractPlaceFromText(normalizedLocation, apiKey);
          console.log(`🌍 ค่าที่ได้จาก API: "${placeName}"`);

          if (!placeName) {
            console.log(
              "❌ No valid Place Name extracted. Sending default response."
            );
            responseMessage = "ไม่พบข้อมูลสถานที่ที่เกี่ยวข้องกับคำถามของคุณ.";
            sourceType = "unknown";
            await saveConversation(
              questionText,
              responseMessage,
              lineId,
              placeId,
              eventId,
              sourceType,
              webAnswerId,
              dbClient
            );
            const payload = new Payload(
              "LINE",
              { type: "text", text: responseMessage },
              { sendAsMessage: true }
            );
            agent.add(payload);
            return;
          }
        }
      }
    }

    console.log(`Final Place Name to be used: ${placeName}`);

    let locationMessage = null;

    //1. ค้นหาใน locations
    if (placeName && Array.isArray(locations.locations.locations)) {
      locations.locations.locations.forEach((loc) => {
        if (placeName.toLowerCase().includes(loc.title.toLowerCase())) {
          locationMessage = {
            type: "location",
            title: removeLeadingNumbers(loc.title),
            address: loc.address,
            latitude: loc.latitude,
            longitude: loc.longitude,
          };
        }
      });

      if (locationMessage) {
        console.log("Found location in current database:", locationMessage);

        if (dbClient && userId) {
          await saveConversation(
            `เส้นทางไปยัง ${locationMessage.title}`,
            locationMessage.address,
            userId,
            eventId,
            null,
            "Location message",
            null,
            dbClient
          );
        }

        await client.pushMessage(userId, locationMessage);
        agent.add(`ได้เลยค่ะ นี่คือเส้นทางไป ${locationMessage.title} ค่ะ`);
        return;
      }
    }

    //2. ค้นหาในตาราง places
    console.log("🔍 Searching in places table...");
    const placeResult = await getAnswerForIntent(
      "เส้นทางไปยังสถานที่",
      placeName,
      dbClient
    );

    if (placeResult?.answer) {
      const locationMessage = {
        type: "location",
        title: placeResult.matchedPlaceName,
        address: placeResult.answer.address,
        latitude: 0,
        longitude: 0,
      };

      console.log("✅ Found location in places table:", locationMessage);
      if (dbClient && userId) {
        await saveConversation(
          `เส้นทางไปยัง ${locationMessage.title}`,
          locationMessage.address,
          userId,
          placeResult.placeId,
          null,
          "Location message",
          null,
          dbClient
        );
      }
      await client.pushMessage(userId, locationMessage);
      agent.add(`ได้เลยค่ะ นี่คือเส้นทางไป ${locationMessage.title} ค่ะ`);
      return;
    }

    //3. ถ้าไม่พบใน places ให้ค้นหาใน web_answer
    console.log("🔍 Searching in web_answer table...");
    const webAnswerResult = await getAnswerFromWebAnswerTable(
      "เส้นทางไปยังสถานที่",
      placeName,
      dbClient
    );

    if (webAnswerResult?.answer) {
      const locationMessage = {
        type: "location",
        title: webAnswerResult.placeName,
        address: webAnswerResult.answer,
        latitude: 0,
        longitude: 0,
      };

      console.log("✅ Found location in web_answer table:", locationMessage);
      if (dbClient && userId) {
        await saveConversation(
          `เส้นทางไปยัง ${locationMessage.title}`,
          locationMessage.address,
          userId,
          null,
          null,
          "Location message",
          webAnswerResult.placeId,
          dbClient
        );
      }
      await client.pushMessage(userId, locationMessage);
      agent.add(`ได้เลยค่ะ นี่คือเส้นทางไป ${locationMessage.title} ค่ะ`);
      return;
    }

    //4. ค้นหาใน JSON files
    console.log(
      "Location not found in current database, searching in JSON files..."
    );

    let allResults = [];
    const dataFiles = [
      "./data/place1.json",
      "./data/place2.json",
      "./data/place3.json",
      "./data/cafe1.json",
      "./data/cafe2.json",
      "./data/cafe3.json",
      "./data/buffet1.json",
      "./data/buffet2.json",
      "./data/restaurant1.json",
      "./data/restaurant2.json",
    ];

    function createRegex(placeName) {
      const escapedPlaceName = placeName.replace(
        /[-/\\^$*+?.()|[\]{}]/g,
        "\\$&"
      );
      return new RegExp(`.*${escapedPlaceName}.*`, "i");
    }

    for (const file of dataFiles) {
      const webData = loadDataFromFile(file);

      if (!webData || webData.length === 0) {
        console.log(`No data found in file: ${file}`);
        continue;
      }

      const correctedLocation = getCorrectLocation(placeName, webData) || null;
      console.log(`Corrected Location from ${file}:`, correctedLocation);

      if (correctedLocation && correctedLocation.สถานที่) {
        const regex = createRegex(normalizeText(correctedLocation.สถานที่));
        const filteredData = webData.filter(
          (item) => item.สถานที่ && regex.test(normalizeText(item.สถานที่))
        );

        if (filteredData.length > 0) {
          allResults.push(
            ...filteredData.map((result) => ({
              ...result,
              fileName: file,
            }))
          );
        }
      }
    }

    if (allResults.length === 0) {
      console.log("No matching locations found in JSON files.");
      agent.add("ไม่พบข้อมูลสถานที่ที่ตรงกับคำถามในทุกเว็บไซต์");
      return;
    }

    const exactMatch = allResults.find((result) =>
      normalizeText(result.สถานที่).includes(normalizeText(placeName))
    );

    const bestResult = exactMatch
      ? exactMatch
      : allResults.reduce((best, current) =>
          current.similarityScore < best.similarityScore ? current : best
        );

    console.log(
      `Best Result Selected from ${bestResult.fileName}:`,
      bestResult
    );

    const correctedLocation = bestResult || null;

    if (correctedLocation && correctedLocation.ข้อมูลที่ค้นพบ) {
      const address = Array.isArray(correctedLocation.ข้อมูลที่ค้นพบ)
        ? correctedLocation.ข้อมูลที่ค้นพบ
            .find((info) =>
              info
                .trim()
                .match(/^(ที่อยู่สถานที่\s*:|ที่อยู่\s*:|Location\s*:)/)
            )
            ?.replace(/^(ที่อยู่สถานที่\s*:|ที่อยู่\s*:|Location\s*:)/, "")
            ?.replace(/\s+/g, " ")
            ?.trim() || "ไม่ได้ระบุข้อมูลที่อยู่"
        : "ไม่ได้ระบุข้อมูลที่อยู่";

      locationMessage = {
        type: "location",
        title: removeLeadingNumbers(correctedLocation.สถานที่),
        address: address,
        latitude: correctedLocation.latitude || 0,
        longitude: correctedLocation.longitude || 0,
      };

      console.log("Sending location message from JSON data:", locationMessage);
      agent.add(`นี่คือเส้นทางไป ${locationMessage.title} ค่ะ`);

      const responseMessage = locationMessage.address;
      const cleanedLocationName = locationMessage.title;
      const isFromWeb = true;
      const imageUrl = correctedLocation.รูปภาพ
        ? correctedLocation.รูปภาพ[0]
        : null;
      const imageDescription = correctedLocation.รายละเอียดรูปภาพ || null;
      const contactLink =
        correctedLocation.ข้อมูลที่ค้นพบ
          .find((info) => info.trim().match(/^(Facebook\s*:|เว็บไซต์\s*:)/))
          ?.replace(/^(Facebook\s*:|เว็บไซต์\s*:)/, "")
          ?.replace(/\s+/g, " ")
          ?.trim() || "ไม่ได้ระบุข้อมูลที่อยู่";

      await saveWebAnswer(
        responseMessage,
        cleanedLocationName,
        intentName,
        isFromWeb,
        dbClient,
        imageUrl,
        imageDescription,
        contactLink
      );
      console.log("Answer saved to database from webData sources.");

    } else {
      console.log("ข้อมูลที่ค้นพบไม่เป็นอาร์เรย์หรือไม่มีค่า.");
      agent.add("ไม่สามารถดึงข้อมูลตำแหน่งได้ในขณะนี้.");
    }

    console.log("Sending location message from JSON data:", locationMessage);
    const conversationId = userId || lineId;
    if (!conversationId) {
      console.warn("⚠️ Skipping saveConversation: No valid user ID found.");
      return;
    }

    if (dbClient && userId && locationMessage) {
      await saveConversation(
        `เส้นทางไปยัง ${locationMessage.title}`,
        locationMessage.address,
        userId,
        eventId,
        null,
        "Location message",
        null,
        dbClient
      );
    }
    if (locationMessage) {
      await client.pushMessage(userId, locationMessage);
    }
  } catch (error) {
    console.error("Error processing location request:", error);
    agent.add("ขออภัย, ไม่สามารถส่งข้อมูลตำแหน่งได้ในขณะนี้.");
  }
}

async function sendFlexMessage(agent, messageType, dbClient) {
  const userId = agent.originalRequest.payload.data.source.userId;
  const questionText = agent.query;
  let flexMessage;
  let flexMessageType;

  switch (messageType) {
    case "restaurant":
      flexMessage = createrestaurantFlexMessage();
      flexMessageType = "ประเภทร้านอาหาร";
      break;
    case "district":
      flexMessage = createDistrictFlexMessage();
      flexMessageType = "อำเภอ";
      break;
    case "districtType":
      flexMessage = createDistrictTypeFlexMessage();
      flexMessageType = "ประเภทอำเภอ";
      break;
    case "kkctype":
      flexMessage = createkkutypeFlexMessage();
      flexMessageType = "เลือกประเภทสถานที่";
      break;
    case "typeplaces":
      flexMessage = createTypeplacesFlexMessage();
      flexMessageType = "ประเภทสถานที่ในขอนแก่น";
      break;

    default:
      flexMessage = { type: "text", text: "ไม่พบข้อความที่ต้องการ" };
      flexMessageType = "ข้อความทั่วไป";
      break;
  }

  try {
    await client.pushMessage(userId, flexMessage);

    if (dbClient && questionText) {
      await saveConversation(
        questionText,
        `Flex message (${flexMessageType})`,
        userId,
        null,
        null,
        flexMessageType,
        null,
        dbClient
      );
      console.log(
        "Flex message saved to conversation history as 'Flex message'."
      );
    }

    agent.add("");
  } catch (error) {
    console.error("Error sending Flex message to LINE:", error);
    agent.add("ขออภัย, ไม่สามารถส่งข้อมูลให้คุณได้ในขณะนี้.");
  }
}

module.exports = { handleWebhookRequest };
