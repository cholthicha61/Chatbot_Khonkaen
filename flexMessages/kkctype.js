const line = require("@line/bot-sdk");

function createkkutypeFlexMessage() {
  return {
    type: "carousel",
    altText: "เลือกประเภทสถานที่",
    type: "flex",
      contents: {
        hero: {
          size: "full",
          aspectMode: "cover",
          action: {
            uri: "http://linecorp.com/",
            type: "uri",
          },
          type: "image",
          url: "https://my.kapook.com/imagescontent/fb_img/635/s_197044_8359.jpg",
          aspectRatio: "20:13",
        },
        type: "bubble",
        footer: {
          contents: [
            {
              type: "button",
              height: "sm",
              style: "primary",
              action: {
                type: "message",
                text: "ภูเขา",
                label: "ภูเขา",
              },
              color: "#3399FF",
            },
            {
              layout: "vertical",
              type: "box",
              contents: [],
              margin: "sm",
            },
            {
              layout: "vertical",
              type: "box",
              contents: [
                {
                  action: {
                    text: "สวนสัตว์",
                    type: "message",
                    label: "สวนสัตว์",
                  },
                  type: "button",
                  color: "#3399FF",
                  height: "sm",
                  style: "primary",
                },
                {
                  contents: [],
                  type: "box",
                  margin: "sm",
                  layout: "vertical",
                },
              ],
              spacing: "sm",
            },
            {
              spacing: "sm",
              layout: "vertical",
              contents: [
                {
                  color: "#3399FF",
                  style: "primary",
                  action: {
                    label: "อุทยานแห่งชาติ",
                    type: "message",
                    text: "อุทยานแห่งชาติ",
                  },
                  height: "sm",
                  type: "button",
                },
                {
                  type: "box",
                  layout: "vertical",
                  margin: "sm",
                  contents: [],
                },
              ],
              type: "box",
            },
            {
              layout: "vertical",
              spacing: "sm",
              type: "box",
              contents: [
                {
                  color: "#3399FF",
                  type: "button",
                  style: "primary",
                  action: {
                    type: "message",
                    text: "วัด",
                    label: "วัด",
                  },
                  height: "sm",
                },
                {
                  margin: "sm",
                  type: "box",
                  layout: "vertical",
                  contents: [],
                },
              ],
            },
            {
              type: "box",
              spacing: "sm",
              layout: "vertical",
              contents: [
                {
                  type: "button",
                  style: "primary",
                  color: "#3399FF",
                  height: "sm",
                  action: {
                    type: "message",
                    label: "พิพิธภัณฑ์",
                    text: "พิพิธภัณฑ์",
                  },
                },
                {
                  margin: "sm",
                  layout: "vertical",
                  contents: [],
                  type: "box",
                },
              ],
            },
            {
              type: "box",
              layout: "vertical",
              spacing: "sm",
              contents: [
                {
                  style: "primary",
                  color: "#3399FF",
                  height: "sm",
                  type: "button",
                  action: {
                    label: "สวนน้ำ",
                    type: "message",
                    text: "เล่นน้ำ",
                  },
                },
                {
                  contents: [],
                  layout: "vertical",
                  margin: "sm",
                  type: "box",
                },
              ],
            },
            {
              layout: "vertical",
              type: "box",
              contents: [
                {
                  color: "#3399FF",
                  style: "primary",
                  action: {
                    text: "สวนสาธารณะ",
                    type: "message",
                    label: "สวนสาธารณะ",
                  },
                  type: "button",
                  height: "sm",
                },
                {
                  layout: "vertical",
                  contents: [],
                  type: "box",
                  margin: "sm",
                },
              ],
              spacing: "sm",
            },
            {
              contents: [
                {
                  color: "#3399FF",
                  style: "primary",
                  height: "sm",
                  action: {
                    text: "ช็อปปิ้ง",
                    type: "message",
                    label: "ช็อปปิ้ง",
                  },
                  type: "button",
                },
                {
                  type: "box",
                  contents: [],
                  spacing: "sm",
                  layout: "vertical",
                },
              ],
              layout: "vertical",
              type: "box",
              spacing: "sm",
            },
          ],
          layout: "vertical",
          spacing: "sm",
          type: "box",
        },
        body: {
          contents: [
            {
              text: "เลือกประเภทสถานที่",
              size: "xl",
              align: "start",
              contents: [],
              type: "text",
              color: "#000000FF",
              weight: "bold",
            },
            {
              type: "box",
              contents: [
                {
                  type: "box",
                  spacing: "sm",
                  contents: [],
                  layout: "baseline",
                },
              ],
              layout: "vertical",
              margin: "lg",
            },
            {
              margin: "lg",
              layout: "vertical",
              contents: [
                {
                  layout: "baseline",
                  contents: [
                    {
                      wrap: true,
                      color: "#5B5858FF",
                      type: "text",
                      contents: [],
                      text: "ขอบคุณภาพจาก: K@POOK!",
                      size: "xs",
                    },
                  ],
                  spacing: "sm",
                  type: "box",
                },
              ],
              spacing: "sm",
              type: "box",
            },
          ],
          layout: "vertical",
          type: "box",
        },
      },
  };
}

module.exports = {
  createkkutypeFlexMessage,
};
