function createBanFangFlex() {
  return {
    contents: {
      type: "carousel",
      contents: [
        {
          hero: {
            size: "full",
            type: "image",
            aspectMode: "cover",
            aspectRatio: "20:13",
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/449782110_395162950216981_6377125386005475829_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Kt7vLbVcL2UQ7kNvgHCZce5&_nc_ht=scontent.fkkc3-1.fna&oh=00_AYD3idrSh0GOTAJJ_yBleKYVdxxYzntNGhBfpbbnwWYygw&oe=66B14B51",
            action: {
              uri: "https://linecorp.com/",
              type: "uri",
              label: "Line",
            },
          },
          body: {
            type: "box",
            action: {
              type: "message",
              text: "จุดชมวิวหินช้างสี",
              label: "จุดชมวิวหินช้างสี",
            },
            contents: [
              {
                size: "xl",
                weight: "bold",
                color: "#000000FF",
                text: "จุดชมวิวหินช้างสี",
                type: "text",
                align: "start",
                contents: [],
              },
              {
                contents: [
                  {
                    type: "box",
                    contents: [
                      {
                        size: "md",
                        type: "text",
                        text: "อำเภอ : บ้านฝาง",
                        contents: [],
                        color: "#5B5858FF",
                      },
                    ],
                    spacing: "sm",
                    layout: "baseline",
                  },
                  {
                    spacing: "sm",
                    layout: "baseline",
                    contents: [
                      {
                        contents: [],
                        align: "start",
                        text: "ขอบคุณภาพจาก: เพจ หน่วยพิทักษ์ หินช้างสี",
                        size: "xs",
                        type: "text",
                        color: "#5B5858FF",
                      },
                    ],
                    type: "box",
                  },
                ],
                layout: "vertical",
                spacing: "sm",
                type: "box",
                margin: "lg",
              },
            ],
            layout: "vertical",
          },
          direction: "ltr",
          footer: {
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "separator",
                color: "#696969FF",
                margin: "xl",
              },
              {
                style: "secondary",
                color: "#FEFEFEFF",
                gravity: "bottom",
                height: "sm",
                type: "button",
                action: {
                  type: "message",
                  text: "รายละเอียดจุดชมวิวหินช้างสี",
                  label: "รายละเอียด",
                },
              },
              {
                height: "sm",
                gravity: "bottom",
                style: "secondary",
                type: "button",
                action: {
                  type: "message",
                  label: "เวลาเปิด-ปิด",
                  text: "เวลาเปิด-ปิดจุดชมวิวหินช้างสี",
                },
                color: "#FFFFFFFF",
              },
              {
                height: "sm",
                color: "#FFFFFFFF",
                type: "button",
                style: "secondary",
                action: {
                  type: "message",
                  text: "เส้นทางไปจุดชมวิวหินช้างสี",
                  label: "แผนที่",
                },
                gravity: "bottom",
              },
              {
                action: {
                  label: "ค่าเข้าชม",
                  type: "message",
                  text: "ค่าเข้าจุดชมวิวหินช้างสี",
                },
                style: "secondary",
                height: "sm",
                color: "#FFFFFFFF",
                gravity: "bottom",
                type: "button",
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
            type: "box",
          },
          type: "bubble",
        },
        {
          hero: {
            aspectRatio: "20:13",
            url: "https://img.wongnai.com/p/1920x0/2019/08/31/2493edf8ab78412a806bce1eb7b240a5.jpg",
            type: "image",
            aspectMode: "cover",
            size: "full",
            action: {
              uri: "https://linecorp.com/",
              type: "uri",
              label: "Line",
            },
          },
          body: {
            contents: [
              {
                type: "text",
                size: "xl",
                align: "start",
                contents: [],
                color: "#000000FF",
                weight: "bold",
                text: "พิพิธภัณฑ์ไดโนเสาร์ภูเวียง",
              },
              {
                layout: "vertical",
                contents: [
                  {
                    contents: [
                      {
                        size: "md",
                        contents: [],
                        text: "อำเภอ : บ้านฝาง",
                        type: "text",
                        color: "#5B5858FF",
                      },
                    ],
                    type: "box",
                    spacing: "sm",
                    layout: "baseline",
                  },
                  {
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        size: "xs",
                        contents: [],
                        align: "start",
                        text: "ขอบคุณภาพจาก: TASTE-TEST",
                        color: "#5B5858FF",
                      },
                    ],
                    type: "box",
                  },
                ],
                type: "box",
                spacing: "sm",
                margin: "lg",
              },
            ],
            action: {
              text: "พิพิธภัณฑ์ไดโนเสาร์ภูเวียง",
              label: "พิพิธภัณฑ์ไดโนเสาร์ภูเวียง",
              type: "message",
            },
            layout: "vertical",
            type: "box",
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
                color: "#FEFEFEFF",
                gravity: "bottom",
                action: {
                  type: "message",
                  text: "รายละเอียดพิพิธภัณฑ์ไดโนเสาร์ภูเวียง",
                  label: "รายละเอียด",
                },
                style: "secondary",
                type: "button",
              },
              {
                action: {
                  text: "เวลาเปิด-ปิดพิพิธภัณฑ์ไดโนเสาร์ภูเวียง",
                  label: "เวลาเปิด-ปิด",
                  type: "message",
                },
                type: "button",
                style: "secondary",
                height: "sm",
                color: "#FFFFFFFF",
                gravity: "bottom",
              },
              {
                height: "sm",
                gravity: "bottom",
                style: "secondary",
                color: "#FFFFFFFF",
                type: "button",
                action: {
                  type: "message",
                  text: "เส้นทางไปพิพิธภัณฑ์ไดโนเสาร์ภูเวียง",
                  label: "แผนที่",
                },
              },
              {
                color: "#FFFFFFFF",
                action: {
                  label: "ค่าเข้าชม",
                  type: "message",
                  text: "ค่าเข้าพิพิธภัณฑ์ไดโนเสาร์ภูเวียง",
                },
                type: "button",
                gravity: "bottom",
                style: "secondary",
                height: "sm",
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
            spacing: "sm",
            type: "box",
          },
          direction: "ltr",
          type: "bubble",
        },
      ],
    },
    type: "flex",
    altText: "อำเภอบ้านฝาง",
  };
}

module.exports = {
  createBanFangFlex,
};
