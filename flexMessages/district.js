const line = require("@line/bot-sdk");

function createDistrictFlexMessage() {
  return {
    type: "flex",
    altText: "เที่ยวอำเภอไหนดี",
    contents: {
      type: "bubble",
      footer: {
        contents: [
          {
            style: "primary",
            height: "sm",
            color: "#6666FF",
            type: "button",
            action: {
              label: "อำเภอเมือง ",
              text: "อำเภอเมือง",
              type: "message",
            },
          },
          {
            action: {
              type: "message",
              text: "อำเภอน้ำพอง",
              label: "อำเภอน้ำพอง",
            },
            style: "primary",
            color: "#6666FF",
            type: "button",
            height: "sm",
          },
          {
            style: "primary",
            height: "sm",
            type: "button",
            color: "#6666FF",
            action: {
              label: "อำเภอสีชมพู",
              text: "อำเภอสีชมพู",
              type: "message",
            },
          },
          {
            height: "sm",
            type: "button",
            action: {
              text: "อำเภอภูเวียง",
              type: "message",
              label: "อำเภอภูเวียง",
            },
            color: "#6666FF",
            style: "primary",
          },
          {
            action: {
              type: "message",
              label: "อำเภอหนองเรือ",
              text: "อำเภอหนองเรือ",
            },
            type: "button",
            style: "primary",
            color: "#6666FF",
            height: "sm",
          },
          {
            height: "sm",
            action: {
              text: "อำเภอชุมแพ",
              type: "message",
              label: "อำเภอชุมแพ",
            },
            color: "#6666FF",
            style: "primary",
            type: "button",
          },
          {
            action: {
              type: "message",
              text: "อำเภอเขาสวนกวาง",
              label: "อำเภอเขาสวนกวาง",
            },
            height: "sm",
            style: "primary",
            color: "#6666FF",
            type: "button",
          },
          {
            height: "sm",
            type: "button",
            color: "#6666FF",
            action: {
              text: "อำเภอเปือยน้อย",
              type: "message",
              label: "อำเภอเปือยน้อย",
            },
            style: "primary",
          },
          {
            color: "#6666FF",
            height: "sm",
            type: "button",
            style: "primary",
            action: {
              text: "อำเภอภูผาม่าน",
              type: "message",
              label: "อำเภอภูผาม่าน",
            },
          },
          {
            action: {
              text: "อำเภอกระนวน",
              type: "message",
              label: "อำเภอกระนวน",
            },
            type: "button",
            height: "sm",
            style: "primary",
            color: "#6666FF",
          },
          {
            type: "button",
            color: "#6666FF",
            style: "primary",
            action: {
              type: "message",
              text: "อำเภอเวียงเก่า",
              label: "อำเภอเวียงเก่า",
            },
            height: "sm",
          },
          {
            height: "sm",
            style: "primary",
            type: "button",
            action: {
              text: "อำเภอบ้านฝาง",
              type: "message",
              label: "อำเภอบ้านฝาง",
            },
            color: "#6666FF",
          },
          {
            size: "sm",
            type: "spacer",
          },
        ],
        layout: "vertical",
        spacing: "sm",
        type: "box",
      },
      hero: {
        aspectMode: "cover",
        type: "image",
        size: "full",
        url: "https://s359.kapook.com/pagebuilder/9e8a4cb1-cc1a-40f3-846b-b82e9871b1a8.jpg",
        action: {
          label: "Line",
          uri: "https://linecorp.com/",
          type: "uri",
        },
        aspectRatio: "20:13",
      },
      body: {
        action: {
          label: "ประเภทสถานที่",
          type: "message",
          text: "ประเภทสถานที่ท่องเที่ยว",
        },
        layout: "vertical",
        contents: [
          {
            weight: "regular",
            contents: [],
            text: "เลือกโปรแกรมการเที่ยวเลยค่ะ",
            color: "#000000FF",
            size: "md",
            align: "start",
            type: "text",
            margin: "md",
          },
          {
            contents: [],
            type: "text",
            weight: "bold",
            color: "#000000FF",
            align: "start",
            size: "xl",
            text: "เลือกอำเภอ",
          },
          {
            weight: "regular",
            gravity: "bottom",
            color: "#5B5858FF",
            size: "xs",
            contents: [],
            type: "text",
            align: "start",
            text: "ขอบคุณภาพจาก : K@POOK!",
            margin: "xxl",
          },
        ],
        type: "box",
      },
    },
  };
}

module.exports = {
  createDistrictFlexMessage,
};
