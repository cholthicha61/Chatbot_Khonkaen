function createNongRueaFlex() {
  return {
    type: "flex",
    contents: {
      type: "carousel",
      contents: [
        {
          body: {
            action: {
              label: "อุทยานแห่งชาติน้ำพอง",
              text: "อุทยานแห่งชาติน้ำพอง",
              type: "message",
            },
            type: "box",
            layout: "vertical",
            contents: [
              {
                size: "xl",
                weight: "bold",
                type: "text",
                color: "#000000FF",
                contents: [],
                text: "อุทยานแห่งชาติน้ำพอง",
                align: "start",
              },
              {
                contents: [
                  {
                    type: "box",
                    spacing: "sm",
                    layout: "baseline",
                    contents: [
                      {
                        text: "อำเภอ : หนองเรือ",
                        contents: [],
                        type: "text",
                        color: "#5B5858FF",
                        size: "md",
                      },
                    ],
                  },
                  {
                    spacing: "sm",
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        size: "xs",
                        wrap: true,
                        contents: [],
                        color: "#5B5858FF",
                        align: "start",
                        type: "text",
                        text: "ขอบคุณภาพจาก: เพจ อุทยานแห่งชาติน้ำพอง - Namphong National Park",
                      },
                    ],
                  },
                ],
                type: "box",
                margin: "lg",
                layout: "vertical",
                spacing: "sm",
              },
            ],
          },
          direction: "ltr",
          type: "bubble",
          hero: {
            aspectMode: "cover",
            action: {
              type: "uri",
              label: "Line",
              uri: "https://linecorp.com/",
            },
            aspectRatio: "20:13",
            url: "https://s.isanook.com/tr/0/ui/283/1418945/mg_0609-768x512_1578661114.jpg",
            size: "full",
            type: "image",
          },
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
                height: "sm",
                gravity: "bottom",
                type: "button",
                style: "secondary",
                action: {
                  text: "รายละเอียดอุทยานแห่งชาติน้ำพอง",
                  type: "message",
                  label: "รายละเอียด",
                },
                color: "#FEFEFEFF",
              },
              {
                gravity: "bottom",
                style: "secondary",
                action: {
                  text: "เวลาเปิด-ปิดอุทยานแห่งชาติน้ำพอง",
                  label: "เวลาเปิด-ปิด",
                  type: "message",
                },
                color: "#FFFFFFFF",
                height: "sm",
                type: "button",
              },
              {
                style: "secondary",
                color: "#FFFFFFFF",
                gravity: "bottom",
                type: "button",
                height: "sm",
                action: {
                  label: "แผนที่",
                  text: "เส้นทางไปอุทยานแห่งชาติน้ำพอง",
                  type: "message",
                },
              },
              {
                height: "sm",
                type: "button",
                gravity: "bottom",
                color: "#FFFFFFFF",
                style: "secondary",
                action: {
                  label: "ค่าเข้าชม",
                  type: "message",
                  text: "ค่าเข้าอุทยานแห่งชาติน้ำพอง",
                },
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
          },
        },
      ],
    },
    altText: "อำเภอหนองเรือ",
  };
}

module.exports = {
  createNongRueaFlex,
};
