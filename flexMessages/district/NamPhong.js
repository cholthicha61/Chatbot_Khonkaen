function createNamPhongFlex() {
  return {
    contents: {
      contents: [
        {
          body: {
            layout: "vertical",
            action: {
              type: "message",
              label: "พระธาตุขามแก่น",
              text: "พระธาตุขามแก่น",
            },
            type: "box",
            contents: [
              {
                align: "start",
                size: "xl",
                weight: "bold",
                text: "พระธาตุขามแก่น",
                color: "#000000FF",
                contents: [],
                type: "text",
              },
              {
                contents: [
                  {
                    spacing: "sm",
                    layout: "baseline",
                    contents: [
                      {
                        text: "อำเภอ : น้ำพอง",
                        color: "#5B5858FF",
                        contents: [],
                        size: "md",
                        type: "text",
                      },
                    ],
                    type: "box",
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        size: "xs",
                        contents: [],
                        text: "ขอบคุณภาพจาก: khonkaenlink",
                        wrap: true,
                        color: "#5B5858FF",
                        type: "text",
                        align: "start",
                      },
                    ],
                    spacing: "sm",
                  },
                ],
                type: "box",
                margin: "lg",
                spacing: "sm",
                layout: "vertical",
              },
            ],
          },
          hero: {
            aspectMode: "cover",
            aspectRatio: "20:13",
            size: "full",
            type: "image",
            url: "https://old.khonkaenlink.info/home/upload/photo/news/7Sin5Hxg.jpg",
            action: {
              uri: "https://linecorp.com/",
              type: "uri",
              label: "Line",
            },
          },
          type: "bubble",
          direction: "ltr",
          footer: {
            spacing: "sm",
            layout: "vertical",
            type: "box",
            contents: [
              {
                color: "#696969FF",
                type: "separator",
                margin: "xl",
              },
              {
                color: "#FEFEFEFF",
                style: "secondary",
                gravity: "bottom",
                type: "button",
                height: "sm",
                action: {
                  label: "รายละเอียด",
                  text: "รายละเอียดพระธาตุขามแก่น",
                  type: "message",
                },
              },
              {
                style: "secondary",
                gravity: "bottom",
                action: {
                  label: "เวลาเปิด-ปิด",
                  text: "เวลาเปิด-ปิดพระธาตุขามแก่น",
                  type: "message",
                },
                type: "button",
                color: "#FFFFFFFF",
                height: "sm",
              },
              {
                gravity: "bottom",
                style: "secondary",
                color: "#FFFFFFFF",
                action: {
                  type: "message",
                  label: "แผนที่",
                  text: "เส้นทางไปพระธาตุขามแก่น",
                },
                type: "button",
                height: "sm",
              },
              {
                height: "sm",
                action: {
                  type: "message",
                  label: "ค่าเข้าชม",
                  text: "ค่าเข้าพระธาตุขามแก่น",
                },
                style: "secondary",
                color: "#FFFFFFFF",
                type: "button",
                gravity: "bottom",
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
          },
        },
      ],
      type: "carousel",
    },
    type: "flex",
    altText: "อำเภอน้ำพอง",
  };
}

module.exports = {
  createNamPhongFlex,
};
