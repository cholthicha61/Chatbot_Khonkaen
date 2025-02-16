function createPueaiNoiFlex() {
  return {
    altText: "อำเภอเปือยน้อย",
    type: "flex",
    contents: {
      contents: [
        {
          hero: {
            size: "full",
            action: {
              uri: "https://linecorp.com/",
              label: "Line",
              type: "uri",
            },
            url: "https://cbtthailand.dasta.or.th/upload-file-api/Resources/RelateAttraction/Images/RAT400168/1.jpeg",
            aspectRatio: "20:13",
            aspectMode: "cover",
            type: "image",
          },
          direction: "ltr",
          type: "bubble",
          body: {
            action: {
              type: "message",
              label: "ปราสาทเปือยน้อย",
              text: "ปราสาทเปือยน้อย",
            },
            contents: [
              {
                text: "ปราสาทเปือยน้อย",
                size: "xl",
                weight: "bold",
                type: "text",
                align: "start",
                contents: [],
                color: "#000000FF",
              },
              {
                spacing: "sm",
                type: "box",
                contents: [
                  {
                    contents: [
                      {
                        contents: [],
                        size: "md",
                        text: "อำเภอ : เปือยน้อย",
                        type: "text",
                        color: "#5B5858FF",
                      },
                    ],
                    layout: "baseline",
                    spacing: "sm",
                    type: "box",
                  },
                  {
                    contents: [
                      {
                        color: "#5B5858FF",
                        contents: [],
                        type: "text",
                        wrap: true,
                        text: "ขอบคุณภาพจาก: CBT thailand",
                        size: "xs",
                        align: "start",
                      },
                    ],
                    type: "box",
                    spacing: "sm",
                    layout: "baseline",
                  },
                ],
                margin: "lg",
                layout: "vertical",
              },
            ],
            type: "box",
            layout: "vertical",
          },
          footer: {
            layout: "vertical",
            contents: [
              {
                margin: "xl",
                color: "#696969FF",
                type: "separator",
              },
              {
                gravity: "bottom",
                color: "#FEFEFEFF",
                style: "secondary",
                height: "sm",
                action: {
                  type: "message",
                  label: "รายละเอียด",
                  text: "รายละเอียดปราสาทเปือยน้อย",
                },
                type: "button",
              },
              {
                type: "button",
                style: "secondary",
                gravity: "bottom",
                action: {
                  label: "เวลาเปิด-ปิด",
                  text: "เวลาเปิด-ปิดปราสาทเปือยน้อย",
                  type: "message",
                },
                color: "#FFFFFFFF",
                height: "sm",
              },
              {
                action: {
                  text: "เส้นทางไปปราสาทเปือยน้อย",
                  type: "message",
                  label: "แผนที่",
                },
                type: "button",
                style: "secondary",
                gravity: "bottom",
                color: "#FFFFFFFF",
                height: "sm",
              },
              {
                gravity: "bottom",
                height: "sm",
                type: "button",
                style: "secondary",
                action: {
                  text: "ค่าเข้าปราสาทเปือยน้อย",
                  label: "ค่าเข้าชม",
                  type: "message",
                },
                color: "#FFFFFFFF",
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
            type: "box",
            spacing: "sm",
          },
        },
      ],
      type: "carousel",
    },
  };
}

module.exports = {
  createPueaiNoiFlex,
};
