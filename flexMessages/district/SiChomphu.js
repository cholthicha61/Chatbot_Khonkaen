function createSiChomphuFlex() {
  return {
    contents: {
      contents: [
        {
          body: {
            contents: [
              {
                weight: "bold",
                type: "text",
                color: "#000000FF",
                size: "xl",
                text: "วัดถ้ำแสงธรรม",
                align: "start",
                contents: [],
              },
              {
                margin: "lg",
                contents: [
                  {
                    type: "box",
                    contents: [
                      {
                        color: "#5B5858FF",
                        type: "text",
                        size: "md",
                        contents: [],
                        text: "อำเภอ : สีชมพู",
                      },
                    ],
                    layout: "baseline",
                    spacing: "sm",
                  },
                  {
                    spacing: "sm",
                    contents: [
                      {
                        text: "ขอบคุณภาพจาก: องค์การบริหารส่วนตำบลบริบูรณ์",
                        color: "#5B5858FF",
                        align: "start",
                        size: "xs",
                        type: "text",
                        wrap: true,
                        contents: [],
                      },
                    ],
                    layout: "baseline",
                    type: "box",
                  },
                ],
                spacing: "sm",
                type: "box",
                layout: "vertical",
              },
            ],
            type: "box",
            action: {
              label: "วัดถ้ำแสงธรรม",
              type: "message",
              text: "วัดถ้ำแสงธรรม",
            },
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
                height: "sm",
                style: "secondary",
                gravity: "bottom",
                type: "button",
                color: "#FEFEFEFF",
                action: {
                  text: "รายละเอียดวัดถ้ำแสงธรรม",
                  type: "message",
                  label: "รายละเอียด",
                },
              },
              {
                color: "#FFFFFFFF",
                type: "button",
                height: "sm",
                style: "secondary",
                action: {
                  text: "เวลาเปิด-ปิดวัดถ้ำแสงธรรม",
                  label: "เวลาเปิด-ปิด",
                  type: "message",
                },
                gravity: "bottom",
              },
              {
                action: {
                  text: "เส้นทางไปวัดถ้ำแสงธรรม",
                  label: "แผนที่",
                  type: "message",
                },
                gravity: "bottom",
                type: "button",
                color: "#FFFFFFFF",
                style: "secondary",
                height: "sm",
              },
              {
                gravity: "bottom",
                color: "#FFFFFFFF",
                style: "secondary",
                height: "sm",
                type: "button",
                action: {
                  text: "ค่าเข้าวัดถ้ำแสงธรรม",
                  label: "ค่าเข้าชม",
                  type: "message",
                },
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
            spacing: "sm",
            type: "box",
          },
          hero: {
            size: "full",
            type: "image",
            action: {
              uri: "https://linecorp.com/",
              type: "uri",
              label: "Line",
            },
            aspectRatio: "20:13",
            url: "https://www.boriboon.go.th/docs/img/83caf9c0-e091-11ec-8d9d-1ffa639e91b5_webp_original.jpg",
            aspectMode: "cover",
          },
          type: "bubble",
          direction: "ltr",
        },
      ],
      type: "carousel",
    },
    altText: "อำเภอสีชมพู",
    type: "flex",
  };
}

module.exports = {
  createSiChomphuFlex,
};
