function createPhuPhaManFlex() {
  return {
    type: "flex",
    altText: "อำเภอภูผาม่าน",
    contents: {
      contents: [
        {
          footer: {
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                margin: "xl",
                type: "separator",
                color: "#696969FF",
              },
              {
                gravity: "bottom",
                height: "sm",
                style: "secondary",
                color: "#FEFEFEFF",
                type: "button",
                action: {
                  type: "message",
                  label: "รายละเอียด",
                  text: "รายละเอียดล่องแพห้วยม่วง",
                },
              },
              {
                color: "#FFFFFFFF",
                action: {
                  label: "เวลาเปิด-ปิด",
                  text: "เวลาเปิด-ปิดล่องแพห้วยม่วง",
                  type: "message",
                },
                height: "sm",
                type: "button",
                style: "secondary",
                gravity: "bottom",
              },
              {
                height: "sm",
                gravity: "bottom",
                type: "button",
                style: "secondary",
                action: {
                  text: "เส้นทางไปล่องแพห้วยม่วง",
                  label: "แผนที่",
                  type: "message",
                },
                color: "#FFFFFFFF",
              },
              {
                style: "secondary",
                type: "button",
                action: {
                  label: "ค่าเข้าชม",
                  type: "message",
                  text: "ค่าเข้าล่องแพห้วยม่วง",
                },
                gravity: "bottom",
                height: "sm",
                color: "#FFFFFFFF",
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
            type: "box",
          },
          type: "bubble",
          body: {
            type: "box",
            contents: [
              {
                size: "xl",
                weight: "bold",
                align: "start",
                contents: [],
                type: "text",
                color: "#000000FF",
                text: "ล่องแพห้วยม่วง",
              },
              {
                spacing: "sm",
                margin: "lg",
                type: "box",
                contents: [
                  {
                    spacing: "sm",
                    layout: "baseline",
                    contents: [
                      {
                        color: "#5B5858FF",
                        contents: [],
                        text: "ประเภท : อำเภอภูผาม่าน",
                        type: "text",
                        size: "md",
                      },
                    ],
                    type: "box",
                  },
                  {
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        color: "#5B5858FF",
                        align: "start",
                        text: "ขอบคุณภาพจาก : คุณ Mr​Deer ",
                        contents: [],
                        size: "xs",
                      },
                    ],
                    layout: "baseline",
                    type: "box",
                  },
                ],
                layout: "vertical",
              },
            ],
            action: {
              type: "message",
              text: "ล่องแพห้วยม่วง",
              label: "ล่องแพห้วยม่วง",
            },
            layout: "vertical",
          },
          hero: {
            aspectMode: "cover",
            action: {
              type: "uri",
              uri: "https://linecorp.com/",
              label: "Line",
            },
            aspectRatio: "20:13",
            size: "full",
            type: "image",
            url: "https://img-prod.api-onscene.com/cdn-cgi/image/format=auto,width=1600,height=900/https://sls-prod.api-onscene.com/partner_files/trueidintrend/391531/img_20201209_140308_1.jpg",
          },
          direction: "ltr",
        },
        {
          body: {
            action: {
              text: "จุดชมวิวหนองสมอ",
              label: "จุดชมวิวหนองสมอ",
              type: "message",
            },
            contents: [
              {
                type: "text",
                color: "#000000FF",
                weight: "bold",
                align: "start",
                contents: [],
                text: "จุดชมวิวหนองสมอ",
                size: "xl",
              },
              {
                type: "box",
                margin: "lg",
                contents: [
                  {
                    contents: [
                      {
                        contents: [],
                        text: "ประเภท : อำเภอภูผาม่าน",
                        size: "md",
                        color: "#5B5858FF",
                        type: "text",
                      },
                    ],
                    spacing: "sm",
                    type: "box",
                    layout: "baseline",
                  },
                  {
                    contents: [
                      {
                        contents: [],
                        size: "xs",
                        color: "#5B5858FF",
                        align: "start",
                        text: "ขอบคุณภาพจาก : คุณ Mr​Deer ",
                        type: "text",
                      },
                    ],
                    spacing: "sm",
                    type: "box",
                    layout: "baseline",
                  },
                ],
                layout: "vertical",
                spacing: "sm",
              },
            ],
            type: "box",
            layout: "vertical",
          },
          direction: "ltr",
          hero: {
            type: "image",
            aspectRatio: "20:13",
            aspectMode: "cover",
            size: "full",
            action: {
              label: "Line",
              type: "uri",
              uri: "https://linecorp.com/",
            },
            url: "https://img-prod.api-onscene.com/cdn-cgi/image/format=auto,width=1200,height=675/https://sls-prod.api-onscene.com/partner_files/trueidintrend/391531/img_20230331_132558_1.jpg",
          },
          footer: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "separator",
                color: "#696969FF",
                margin: "xl",
              },
              {
                color: "#FEFEFEFF",
                style: "secondary",
                gravity: "bottom",
                height: "sm",
                action: {
                  text: "รายละเอียดจุดชมวิวหนองสมอ",
                  label: "รายละเอียด",
                  type: "message",
                },
                type: "button",
              },
              {
                height: "sm",
                style: "secondary",
                gravity: "bottom",
                type: "button",
                color: "#FFFFFFFF",
                action: {
                  text: "เวลาจุดชมวิวหนองสมอ",
                  label: "เวลาเปิด-ปิด",
                  type: "message",
                },
              },
              {
                action: {
                  label: "แผนที่",
                  type: "message",
                  text: "เส้นทางไปจุดชมวิวหนองสมอ",
                },
                color: "#FFFFFFFF",
                type: "button",
                gravity: "bottom",
                style: "secondary",
                height: "sm",
              },
              {
                height: "sm",
                gravity: "bottom",
                type: "button",
                action: {
                  text: "ค่าเข้าจุดชมวิวหนองสมอ",
                  type: "message",
                  label: "ค่าเข้าชม",
                },
                style: "secondary",
                color: "#FFFFFFFF",
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
            spacing: "sm",
          },
          type: "bubble",
        },
        {
          body: {
            layout: "vertical",
            action: {
              type: "message",
              text: "Blue Lagoon ภูผาม่าน",
              label: "Blue Lagoon ภูผาม่าน",
            },
            type: "box",
            contents: [
              {
                contents: [],
                align: "start",
                color: "#000000FF",
                type: "text",
                text: "Blue Lagoon ภูผาม่าน",
                weight: "bold",
                size: "xl",
              },
              {
                margin: "lg",
                layout: "vertical",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        color: "#5B5858FF",
                        contents: [],
                        text: "ประเภท : อำเภอภูผาม่าน",
                        type: "text",
                        size: "md",
                      },
                    ],
                  },
                  {
                    spacing: "sm",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "ขอบคุณภาพจาก : คุณ Mr​Deer ",
                        align: "start",
                        size: "xs",
                        contents: [],
                        color: "#5B5858FF",
                      },
                    ],
                    type: "box",
                  },
                ],
                type: "box",
                spacing: "sm",
              },
            ],
          },
          hero: {
            action: {
              label: "Line",
              uri: "https://linecorp.com/",
              type: "uri",
            },
            size: "full",
            type: "image",
            url: "https://img-prod.api-onscene.com/cdn-cgi/image/format=auto,width=1600,height=900/https://sls-prod.api-onscene.com/partner_files/trueidintrend/391531/img_20221001_170236.jpg",
            aspectMode: "cover",
            aspectRatio: "20:13",
          },
          footer: {
            spacing: "sm",
            layout: "vertical",
            type: "box",
            contents: [
              {
                type: "separator",
                color: "#696969FF",
                margin: "xl",
              },
              {
                type: "button",
                gravity: "bottom",
                color: "#FEFEFEFF",
                action: {
                  label: "รายละเอียด",
                  text: "รายละเอียด Blue Lagoon ภูผาม่าน",
                  type: "message",
                },
                style: "secondary",
                height: "sm",
              },
              {
                color: "#FFFFFFFF",
                gravity: "bottom",
                type: "button",
                action: {
                  text: "เวลาBlue Lagoon ภูผาม่าน",
                  type: "message",
                  label: "เวลาเปิด-ปิด",
                },
                style: "secondary",
                height: "sm",
              },
              {
                height: "sm",
                action: {
                  type: "message",
                  label: "แผนที่",
                  text: "เส้นทางไป Blue Lagoon ภูผาม่าน",
                },
                style: "secondary",
                gravity: "bottom",
                type: "button",
                color: "#FFFFFFFF",
              },
              {
                type: "button",
                height: "sm",
                gravity: "bottom",
                style: "secondary",
                action: {
                  type: "message",
                  text: "ค่าเข้าBlue Lagoon ภูผาม่าน",
                  label: "ค่าเข้าชม",
                },
                color: "#FFFFFFFF",
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
          },
          direction: "ltr",
          type: "bubble",
        },
        {
          direction: "ltr",
          type: "bubble",
          hero: {
            url: "https://img-prod.api-onscene.com/cdn-cgi/image/format=auto,width=1200,height=675/https://sls-prod.api-onscene.com/partner_files/trueidintrend/391531/1688918424328_0.jpg",
            size: "full",
            action: {
              uri: "https://linecorp.com/",
              label: "Line",
              type: "uri",
            },
            aspectRatio: "20:13",
            aspectMode: "cover",
            type: "image",
          },
          body: {
            layout: "vertical",
            action: {
              text: "น้ำตกตาดใหญ่",
              label: "น้ำตกตาดใหญ่",
              type: "message",
            },
            type: "box",
            contents: [
              {
                type: "text",
                size: "xl",
                contents: [],
                text: "น้ำตกตาดใหญ่",
                color: "#000000FF",
                weight: "bold",
                align: "start",
              },
              {
                margin: "lg",
                type: "box",
                spacing: "sm",
                contents: [
                  {
                    spacing: "sm",
                    layout: "baseline",
                    type: "box",
                    contents: [
                      {
                        text: "ประเภท : อำเภอภูผาม่าน",
                        color: "#5B5858FF",
                        size: "md",
                        contents: [],
                        type: "text",
                      },
                    ],
                  },
                  {
                    type: "box",
                    spacing: "sm",
                    layout: "baseline",
                    contents: [
                      {
                        align: "start",
                        text: "ขอบคุณภาพจาก : คุณ Mr​Deer ",
                        contents: [],
                        type: "text",
                        color: "#5B5858FF",
                        size: "xs",
                      },
                    ],
                  },
                ],
                layout: "vertical",
              },
            ],
          },
          footer: {
            layout: "vertical",
            type: "box",
            spacing: "sm",
            contents: [
              {
                color: "#696969FF",
                margin: "xl",
                type: "separator",
              },
              {
                style: "secondary",
                color: "#FEFEFEFF",
                gravity: "bottom",
                type: "button",
                height: "sm",
                action: {
                  type: "message",
                  text: "รายละเอียดน้ำตกตาดใหญ่",
                  label: "รายละเอียด",
                },
              },
              {
                type: "button",
                gravity: "bottom",
                color: "#FFFFFFFF",
                style: "secondary",
                height: "sm",
                action: {
                  text: "เวลาน้ำตกตาดใหญ่",
                  label: "เวลาเปิด-ปิด",
                  type: "message",
                },
              },
              {
                height: "sm",
                style: "secondary",
                gravity: "bottom",
                color: "#FFFFFFFF",
                action: {
                  text: "เส้นทางไปน้ำตกตาดใหญ่",
                  label: "แผนที่",
                  type: "message",
                },
                type: "button",
              },
              {
                gravity: "bottom",
                action: {
                  label: "ค่าเข้าชม",
                  text: "ค่าเข้าน้ำตกตาดใหญ่",
                  type: "message",
                },
                type: "button",
                color: "#FFFFFFFF",
                height: "sm",
                style: "secondary",
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
          },
        },
        {
          direction: "ltr",
          hero: {
            size: "full",
            url: "https://img-prod.api-onscene.com/cdn-cgi/image/format=auto,width=1200,height=675/https://sls-prod.api-onscene.com/partner_files/trueidintrend/391531/img_20230331_122638.jpg",
            type: "image",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              label: "Line",
              uri: "https://linecorp.com/",
            },
          },
          type: "bubble",
          footer: {
            layout: "vertical",
            spacing: "sm",
            type: "box",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                type: "button",
                color: "#FEFEFEFF",
                gravity: "bottom",
                style: "secondary",
                height: "sm",
                action: {
                  text: "รายละเอียดน้ำผุดตาดเต่า",
                  type: "message",
                  label: "รายละเอียด",
                },
              },
              {
                height: "sm",
                gravity: "bottom",
                type: "button",
                color: "#FFFFFFFF",
                style: "secondary",
                action: {
                  type: "message",
                  text: "เวลาน้ำผุดตาดเต่า",
                  label: "เวลาเปิด-ปิด",
                },
              },
              {
                action: {
                  type: "message",
                  text: "เส้นทางไปน้ำผุดตาดเต่า",
                  label: "แผนที่",
                },
                color: "#FFFFFFFF",
                style: "secondary",
                height: "sm",
                gravity: "bottom",
                type: "button",
              },
              {
                height: "sm",
                action: {
                  label: "ค่าเข้าชม",
                  type: "message",
                  text: "ค่าเข้าน้ำผุดตาดเต่า",
                },
                type: "button",
                color: "#FFFFFFFF",
                style: "secondary",
                gravity: "bottom",
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
          },
          body: {
            layout: "vertical",
            action: {
              type: "message",
              text: "น้ำผุดตาดเต่า",
              label: "น้ำผุดตาดเต่า",
            },
            type: "box",
            contents: [
              {
                text: "น้ำผุดตาดเต่า",
                contents: [],
                weight: "bold",
                align: "start",
                type: "text",
                size: "xl",
                color: "#000000FF",
              },
              {
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        size: "md",
                        color: "#5B5858FF",
                        text: "ประเภท : อำเภอภูผาม่าน",
                        contents: [],
                        type: "text",
                      },
                    ],
                    spacing: "sm",
                  },
                  {
                    layout: "baseline",
                    spacing: "sm",
                    type: "box",
                    contents: [
                      {
                        type: "text",
                        align: "start",
                        color: "#5B5858FF",
                        text: "ขอบคุณภาพจาก : คุณ Mr​Deer ",
                        contents: [],
                        size: "xs",
                      },
                    ],
                  },
                ],
                layout: "vertical",
                spacing: "sm",
                type: "box",
                margin: "lg",
              },
            ],
          },
        },
        {
          body: {
            action: {
              label: "ถ้ำค้างคาว",
              type: "message",
              text: "ถ้ำค้างคาว",
            },
            type: "box",
            contents: [
              {
                text: "ถ้ำค้างคาว",
                type: "text",
                contents: [],
                weight: "bold",
                size: "xl",
                align: "start",
                color: "#000000FF",
              },
              {
                contents: [
                  {
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        contents: [],
                        size: "md",
                        type: "text",
                        text: "ประเภท : อำเภอภูผาม่าน",
                        color: "#5B5858FF",
                      },
                    ],
                    type: "box",
                  },
                  {
                    contents: [
                      {
                        contents: [],
                        color: "#5B5858FF",
                        type: "text",
                        text: "ขอบคุณภาพจาก : สำนักอุทยานแห่งชาติ",
                        size: "xs",
                        align: "start",
                      },
                    ],
                    layout: "baseline",
                    spacing: "sm",
                    type: "box",
                  },
                ],
                layout: "vertical",
                margin: "lg",
                spacing: "sm",
                type: "box",
              },
            ],
            layout: "vertical",
          },
          direction: "ltr",
          footer: {
            type: "box",
            spacing: "sm",
            layout: "vertical",
            contents: [
              {
                type: "separator",
                color: "#696969FF",
                margin: "xl",
              },
              {
                height: "sm",
                style: "secondary",
                action: {
                  label: "รายละเอียด",
                  type: "message",
                  text: "รายละเอียดถ้ำค้างคาว",
                },
                type: "button",
                color: "#FEFEFEFF",
                gravity: "bottom",
              },
              {
                style: "secondary",
                action: {
                  type: "message",
                  text: "เวลาถ้ำค้างคาว",
                  label: "เวลาเปิด-ปิด",
                },
                height: "sm",
                gravity: "bottom",
                type: "button",
                color: "#FFFFFFFF",
              },
              {
                color: "#FFFFFFFF",
                action: {
                  text: "เส้นทางไปถ้ำค้างคาว",
                  type: "message",
                  label: "แผนที่",
                },
                style: "secondary",
                type: "button",
                height: "sm",
                gravity: "bottom",
              },
              {
                color: "#FFFFFFFF",
                gravity: "bottom",
                type: "button",
                action: {
                  label: "ค่าเข้าชม",
                  text: "ค่าเข้าถ้ำค้างคาว",
                  type: "message",
                },
                height: "sm",
                style: "secondary",
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
          },
          type: "bubble",
          hero: {
            url: "https://portal.dnp.go.th/DNP/FileSystem/download?uuid=0dc2078c-229d-4508-bc6f-f0ca46287bb1.jpg",
            size: "full",
            aspectMode: "cover",
            type: "image",
            aspectRatio: "20:13",
            action: {
              label: "Line",
              uri: "https://linecorp.com/",
              type: "uri",
            },
          },
        },
      ],
      type: "carousel",
    },
  };
}

module.exports = {
  createPhuPhaManFlex,
};
