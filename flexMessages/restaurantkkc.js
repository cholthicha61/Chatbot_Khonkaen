const line = require("@line/bot-sdk");

function createRestaurantkkcFlexMessage() {
  return {
    type: "flex",
    altText: "ร้านอาหารในเมืองขอนแก่น",
    type: "flex",
    contents: {
      type: "carousel",
      contents: [
        {
          type: "bubble",
          footer: {
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                margin: "xl",
                color: "#696969FF",
                type: "separator",
              },
              {
                action: {
                  type: "message",
                  label: "รายละเอียด",
                  text: "รายละเอียดร้านสีนานวล คาเฟ่ (กังสดาล)",
                },
                type: "button",
                gravity: "bottom",
                height: "sm",
                style: "secondary",
                color: "#FFFFFFFF",
              },
              {
                action: {
                  text: "เวลาทำการร้านสีนานวล คาเฟ่ (กังสดาล)",
                  label: "เวลาทำการ",
                  type: "message",
                },
                gravity: "bottom",
                height: "sm",
                type: "button",
                color: "#FFFFFFFF",
                style: "secondary",
              },
              {
                style: "secondary",
                height: "sm",
                action: {
                  label: "แผนที่ร้าน",
                  type: "message",
                  text: "เส้นทางไปร้านสีนานวล คาเฟ่ (กังสดาล)",
                },
                gravity: "bottom",
                color: "#FFFFFFFF",
                type: "button",
              },
              {
                height: "sm",
                action: {
                  label: "ช่องทางติดต่อร้าน",
                  type: "uri",
                  uri: "https://come.in.th/wp-content/uploads/2024/04/%E0%B8%9B%E0%B8%81-1.png",
                },
                type: "button",
                gravity: "bottom",
                style: "secondary",
                color: "#FFFFFFFF",
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
            type: "box",
          },
          hero: {
            size: "full",
            aspectMode: "cover",
            aspectRatio: "20:13",
            action: {
              label: "Line",
              uri: "https://linecorp.com/",
              type: "uri",
            },
            type: "image",
            url: "https://img.wongnai.com/p/1920x0/2023/08/21/2d7ce1e920804a728b759b825f03d1c1.jpg",
          },
          body: {
            action: {
              text: "ร้านอาหารในเมืองขอนแก่น",
              label: "ร้านอาหารในเมืองขอนแก่น",
              type: "message",
            },
            contents: [
              {
                weight: "bold",
                size: "xl",
                text: "สีนานวล คาเฟ่ (กังสดาล)",
                contents: [],
                color: "#000000FF",
                type: "text",
                align: "start",
              },
              {
                margin: "lg",
                contents: [
                  {
                    contents: [
                      {
                        text: "ประเภท : อาหารไทย",
                        color: "#5B5858FF",
                        contents: [],
                        type: "text",
                        size: "md",
                      },
                    ],
                    spacing: "sm",
                    layout: "baseline",
                    type: "box",
                  },
                  {
                    type: "box",
                    spacing: "sm",
                    contents: [
                      {
                        text: "ขอบคุณภาพจาก : จอจูนพาเพลิน",
                        align: "start",
                        contents: [],
                        size: "xs",
                        type: "text",
                        color: "#5B5858FF",
                      },
                    ],
                    layout: "baseline",
                  },
                ],
                layout: "vertical",
                spacing: "sm",
                type: "box",
              },
            ],
            layout: "vertical",
            type: "box",
          },
        },
        {
          body: {
            type: "box",
            contents: [
              {
                align: "start",
                type: "text",
                text: "Vacca Italian Restaurant",
                color: "#000000FF",
                weight: "bold",
                contents: [],
                size: "xl",
              },
              {
                spacing: "sm",
                layout: "vertical",
                type: "box",
                margin: "lg",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        size: "md",
                        text: "ประเภท : อาหารไทย-จีน-อิตาลี",
                        type: "text",
                        contents: [],
                        color: "#5B5858FF",
                      },
                    ],
                  },
                  {
                    spacing: "sm",
                    type: "box",
                    contents: [
                      {
                        type: "text",
                        color: "#5B5858FF",
                        contents: [],
                        size: "xs",
                        text: "ขอบคุณภาพจาก : Vacca Italian Restaurant",
                        align: "start",
                      },
                    ],
                    layout: "baseline",
                  },
                ],
              },
            ],
            layout: "vertical",
            action: {
              type: "message",
              label: "อาหารไทย-จีน-อิตาลี",
              text: "อาหารไทย-จีน-อิตาลี",
            },
          },
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                margin: "xl",
                color: "#696969FF",
                type: "separator",
              },
              {
                style: "secondary",
                action: {
                  text: "รายละเอียด Vacca Italian Restaurant",
                  label: "รายละเอียด",
                  type: "message",
                },
                type: "button",
                gravity: "bottom",
                color: "#FFFFFFFF",
                height: "sm",
              },
              {
                type: "button",
                gravity: "bottom",
                action: {
                  text: "เวลาทำการ Vacca Italian Restaurant",
                  label: "เวลาทำการ",
                  type: "message",
                },
                height: "sm",
                style: "secondary",
                color: "#FFFFFFFF",
              },
              {
                type: "button",
                color: "#FFFFFFFF",
                height: "sm",
                style: "secondary",
                gravity: "bottom",
                action: {
                  text: "เส้นทางไป Vacca Italian Restaurant",
                  label: "แผนที่ร้าน",
                  type: "message",
                },
              },
              {
                action: {
                  uri: "https://www.facebook.com/vaccaitalianbyfabio/?locale=th_TH",
                  type: "uri",
                  label: "ช่องทางติดต่อร้าน",
                },
                type: "button",
                height: "sm",
                gravity: "bottom",
                style: "secondary",
                color: "#FFFFFFFF",
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
          },
          hero: {
            action: {
              uri: "https://linecorp.com/",
              label: "Line",
              type: "uri",
            },
            type: "image",
            url: "https://files.thailandtourismdirectory.go.th/assets/upload/2018/09/04/20180904c4ca4238a0b923820dcc509a6f75849b152147.jpg",
            aspectMode: "cover",
            aspectRatio: "20:13",
            size: "full",
          },
          type: "bubble",
        },
        {
          type: "bubble",
          hero: {
            aspectRatio: "20:13",
            action: {
              uri: "https://linecorp.com/",
              label: "Line",
              type: "uri",
            },
            size: "full",
            url: "https://img.wongnai.com/p/1920x0/2021/08/04/1e01c1acab0d43e686b787bb06e8b1ec.jpg",
            type: "image",
            aspectMode: "cover",
          },
          footer: {
            layout: "vertical",
            type: "box",
            spacing: "sm",
            contents: [
              {
                color: "#696969FF",
                type: "separator",
                margin: "xl",
              },
              {
                gravity: "bottom",
                type: "button",
                height: "sm",
                style: "secondary",
                color: "#FEFEFEFF",
                action: {
                  text: "รายละเอียดร้านบ้านเฮง",
                  label: "รายละเอียด",
                  type: "message",
                },
              },
              {
                type: "button",
                height: "sm",
                color: "#FFFFFFFF",
                action: {
                  label: "เวลาทำการ",
                  type: "message",
                  text: "เวลาทำการร้านบ้านเฮง",
                },
                gravity: "bottom",
                style: "secondary",
              },
              {
                gravity: "bottom",
                action: {
                  label: "แผนที่ร้าน",
                  text: "เส้นทางไปร้านบ้านเฮง",
                  type: "message",
                },
                style: "secondary",
                type: "button",
                color: "#FFFFFFFF",
                height: "sm",
              },
              {
                color: "#FFFFFFFF",
                style: "secondary",
                action: {
                  uri: "https://www.facebook.com/baanheng/?locale=th_TH",
                  label: "ช่องทางติดต่อร้าน",
                  type: "uri",
                },
                height: "sm",
                type: "button",
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
            type: "box",
            action: {
              label: "อาหารไทย-จีน-อิตาลี",
              text: "อาหารไทย-จีน-อิตาลี",
              type: "message",
            },
            contents: [
              {
                type: "text",
                contents: [],
                weight: "bold",
                text: "บ้านเฮง",
                color: "#000000FF",
                size: "xl",
                align: "start",
              },
              {
                margin: "lg",
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: [
                  {
                    spacing: "sm",
                    layout: "baseline",
                    type: "box",
                    contents: [
                      {
                        size: "md",
                        type: "text",
                        contents: [],
                        color: "#5B5858FF",
                        text: "ประเภท : อาหารไทย-จีน-อิตาลี",
                      },
                    ],
                  },
                  {
                    layout: "baseline",
                    type: "box",
                    contents: [
                      {
                        color: "#5B5858FF",
                        type: "text",
                        text: "ขอบคุณภาพจาก :  บ้านเฮง ร้านอาหารเช้า และของฝากขอนแก่น",
                        align: "start",
                        contents: [],
                        size: "xs",
                      },
                    ],
                    spacing: "sm",
                  },
                ],
              },
            ],
          },
        },
        {
          hero: {
            aspectMode: "cover",
            size: "full",
            url: "https://come.in.th/wp-content/uploads/2024/04/%E0%B8%A1%E0%B8%B2%E0%B8%99%E0%B8%B0%E0%B9%82%E0%B8%A0%E0%B8%8A%E0%B8%99%E0%B8%B2-1.png",
            action: {
              uri: "https://linecorp.com/",
              type: "uri",
              label: "Line",
            },
            type: "image",
            aspectRatio: "20:13",
          },
          type: "bubble",
          body: {
            action: {
              label: "อาหารไทย-จีน-อิตาลี",
              type: "message",
              text: "อาหารไทย-จีน-อิตาลี",
            },
            type: "box",
            contents: [
              {
                text: "มานะโภชนาการ",
                size: "xl",
                contents: [],
                color: "#000000FF",
                align: "start",
                weight: "bold",
                type: "text",
              },
              {
                spacing: "sm",
                contents: [
                  {
                    type: "box",
                    spacing: "sm",
                    contents: [
                      {
                        text: "ประเภท : อาหารไทย-จีน-อิตาลี",
                        size: "md",
                        contents: [],
                        color: "#5B5858FF",
                        type: "text",
                      },
                    ],
                    layout: "baseline",
                  },
                  {
                    type: "box",
                    contents: [
                      {
                        text: "ขอบคุณภาพจาก : คุณนงนุช จากเว็บ ร้านคัมขอนแก่น",
                        size: "xs",
                        type: "text",
                        contents: [],
                        color: "#5B5858FF",
                        align: "start",
                      },
                    ],
                    layout: "baseline",
                    spacing: "sm",
                  },
                ],
                type: "box",
                margin: "lg",
                layout: "vertical",
              },
            ],
            layout: "vertical",
          },
          footer: {
            contents: [
              {
                color: "#696969FF",
                margin: "xl",
                type: "separator",
              },
              {
                height: "sm",
                action: {
                  text: "รายละเอียดร้านมานะโภชนาการ",
                  type: "message",
                  label: "รายละเอียด",
                },
                gravity: "bottom",
                type: "button",
                color: "#FFFFFFFF",
                style: "secondary",
              },
              {
                color: "#FFFFFFFF",
                action: {
                  text: "เวลาทำการร้านมานะโภชนาการ",
                  type: "message",
                  label: "เวลาทำการ",
                },
                style: "secondary",
                gravity: "bottom",
                height: "sm",
                type: "button",
              },
              {
                color: "#FFFFFFFF",
                type: "button",
                height: "sm",
                style: "secondary",
                gravity: "bottom",
                action: {
                  text: "เส้นทางไปร้านมานะโภชนาการ",
                  type: "message",
                  label: "แผนที่ร้าน",
                },
              },
              {
                height: "sm",
                type: "button",
                action: {
                  label: "ช่องทางติดต่อร้าน",
                  type: "uri",
                  uri: "https://www.facebook.com/pages/%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%A1%E0%B8%B2%E0%B8%99%E0%B8%B0%E0%B9%82%E0%B8%A0%E0%B8%8A%E0%B8%99%E0%B8%B2/408907989191048/",
                },
                gravity: "bottom",
                color: "#FFFFFFFF",
                style: "secondary",
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
            layout: "vertical",
            type: "box",
            spacing: "sm",
          },
        },
        {
          type: "bubble",
          body: {
            layout: "vertical",
            type: "box",
            action: {
              type: "message",
              text: "ร้านอาหารในเมืองขอนแก่น",
              label: "ร้านอาหารในเมืองขอนแก่น",
            },
            contents: [
              {
                text: "แก่น",
                align: "start",
                type: "text",
                contents: [],
                color: "#000000FF",
                size: "xl",
                weight: "bold",
              },
              {
                layout: "vertical",
                margin: "lg",
                type: "box",
                spacing: "sm",
                contents: [
                  {
                    layout: "baseline",
                    type: "box",
                    contents: [
                      {
                        color: "#5B5858FF",
                        type: "text",
                        contents: [],
                        text: "ประเภท : อาหารไทย",
                        size: "md",
                      },
                    ],
                    spacing: "sm",
                  },
                  {
                    contents: [
                      {
                        align: "start",
                        size: "xs",
                        color: "#5B5858FF",
                        contents: [],
                        text: "ขอบคุณภาพจาก :  แก่น ",
                        type: "text",
                      },
                    ],
                    layout: "baseline",
                    spacing: "sm",
                    type: "box",
                  },
                ],
              },
            ],
          },
          footer: {
            contents: [
              {
                margin: "xl",
                type: "separator",
                color: "#696969FF",
              },
              {
                gravity: "bottom",
                color: "#FEFEFEFF",
                height: "sm",
                type: "button",
                style: "secondary",
                action: {
                  type: "message",
                  label: "รายละเอียด",
                  text: "รายละเอียดร้านแก่น",
                },
              },
              {
                gravity: "bottom",
                action: {
                  text: "เวลาทำการร้านแก่น",
                  label: "เวลาทำการ",
                  type: "message",
                },
                height: "sm",
                color: "#FFFFFFFF",
                type: "button",
                style: "secondary",
              },
              {
                style: "secondary",
                action: {
                  text: "เส้นทางไปร้านแก่น",
                  type: "message",
                  label: "แผนที่ร้าน",
                },
                type: "button",
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
                  type: "uri",
                  label: "ช่องทางติดต่อร้าน",
                  uri: "https://www.facebook.com/kaendining/?locale=th_TH",
                },
                color: "#FFFFFFFF",
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
            type: "box",
            layout: "vertical",
            spacing: "sm",
          },
          hero: {
            type: "image",
            url: "https://media.readthecloud.co/wp-content/uploads/2022/05/29111751/kaendining-36.jpg",
            action: {
              uri: "https://linecorp.com/",
              type: "uri",
              label: "Line",
            },
            aspectMode: "cover",
            size: "full",
            aspectRatio: "20:13",
          },
        },
        {
          type: "bubble",
          body: {
            contents: [
              {
                color: "#000000FF",
                size: "xl",
                text: "ครัวสุพรรณิการ์ บาย คุณยายสมศรี",
                align: "start",
                weight: "bold",
                contents: [],
                type: "text",
              },
              {
                spacing: "sm",
                layout: "vertical",
                margin: "lg",
                contents: [
                  {
                    type: "box",
                    contents: [
                      {
                        size: "md",
                        type: "text",
                        color: "#5B5858FF",
                        contents: [],
                        text: "ประเภท : อาหารไทย",
                      },
                    ],
                    spacing: "sm",
                    layout: "baseline",
                  },
                  {
                    contents: [
                      {
                        text: "ขอบคุณภาพจาก : WoWVal",
                        size: "xs",
                        type: "text",
                        color: "#5B5858FF",
                        contents: [],
                        align: "start",
                      },
                    ],
                    layout: "baseline",
                    spacing: "sm",
                    type: "box",
                  },
                ],
                type: "box",
              },
            ],
            layout: "vertical",
            action: {
              text: "ร้านอาหารในเมืองขอนแก่น",
              type: "message",
              label: "ร้านอาหารในเมืองขอนแก่น",
            },
            type: "box",
          },
          footer: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                margin: "xl",
                type: "separator",
                color: "#696969FF",
              },
              {
                height: "sm",
                color: "#FFFFFFFF",
                type: "button",
                action: {
                  label: "รายละเอียด",
                  type: "message",
                  text: "รายละเอียดร้านครัวสุพรรณิการ์ บาย คุณยายสมศรี",
                },
                style: "secondary",
                gravity: "bottom",
              },
              {
                color: "#FFFFFFFF",
                style: "secondary",
                height: "sm",
                gravity: "bottom",
                type: "button",
                action: {
                  type: "message",
                  label: "เวลาทำการ",
                  text: "เวลาทำการร้านครัวสุพรรณิการ์ บาย คุณยายสมศรี",
                },
              },
              {
                gravity: "bottom",
                color: "#FFFFFFFF",
                action: {
                  text: "เส้นทางไปร้านครัวสุพรรณิการ์ บาย คุณยายสมศรี",
                  type: "message",
                  label: "แผนที่ร้าน",
                },
                type: "button",
                style: "secondary",
                height: "sm",
              },
              {
                height: "sm",
                type: "button",
                gravity: "bottom",
                style: "secondary",
                action: {
                  type: "uri",
                  uri: "https://www.facebook.com/supannigahome/?locale=th_TH",
                  label: "ช่องทางติดต่อร้าน",
                },
                color: "#FFFFFFFF",
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
            spacing: "sm",
          },
          hero: {
            action: {
              type: "uri",
              uri: "https://linecorp.com/",
              label: "Line",
            },
            type: "image",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            url: "https://img.wongnai.com/p/1920x0/2024/08/06/5bd49293b3c041aeb0542982e5376705.jpg",
          },
        },
        {
          body: {
            type: "box",
            action: {
              type: "message",
              text: "ร้านอาหารในเมืองขอนแก่น",
              label: "ร้านอาหารในเมืองขอนแก่น",
            },
            layout: "vertical",
            contents: [
              {
                text: "คุณแจง ก๋วยเตี๋ยวปากหม้อเข้าวัง",
                contents: [],
                color: "#000000FF",
                type: "text",
                align: "start",
                weight: "bold",
                size: "xl",
              },
              {
                contents: [
                  {
                    layout: "baseline",
                    type: "box",
                    contents: [
                      {
                        size: "md",
                        contents: [],
                        type: "text",
                        color: "#5B5858FF",
                        text: "ประเภท : อาหารไทย",
                      },
                    ],
                    spacing: "sm",
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        size: "xs",
                        contents: [],
                        type: "text",
                        text: "ขอบคุณภาพจาก : เดินสายกิน เดินสายเที่ยว ศราทราเวล",
                        align: "start",
                        color: "#5B5858FF",
                      },
                    ],
                    spacing: "sm",
                  },
                ],
                layout: "vertical",
                type: "box",
                margin: "lg",
                spacing: "sm",
              },
            ],
          },
          footer: {
            spacing: "sm",
            type: "box",
            contents: [
              {
                type: "separator",
                color: "#696969FF",
                margin: "xl",
              },
              {
                gravity: "bottom",
                action: {
                  label: "รายละเอียด",
                  text: "รายละเอียดร้านคุณแจง ก๋วยเตี๋ยวปากหม้อเข้าวัง",
                  type: "message",
                },
                type: "button",
                style: "secondary",
                height: "sm",
                color: "#FFFFFFFF",
              },
              {
                height: "sm",
                gravity: "bottom",
                type: "button",
                style: "secondary",
                action: {
                  label: "เวลาทำการ",
                  text: "เวลาทำการร้านคุณแจง ก๋วยเตี๋ยวปากหม้อเข้าวัง",
                  type: "message",
                },
                color: "#FFFFFFFF",
              },
              {
                height: "sm",
                gravity: "bottom",
                color: "#FFFFFFFF",
                style: "secondary",
                action: {
                  text: "เส้นทางไปร้านคุณแจง ก๋วยเตี๋ยวปากหม้อเข้าวัง",
                  label: "แผนที่ร้าน",
                  type: "message",
                },
                type: "button",
              },
              {
                style: "secondary",
                action: {
                  label: "ช่องทางติดต่อร้าน",
                  uri: "https://www.facebook.com/p/%E0%B8%B8%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B9%81%E0%B8%88%E0%B8%87-%E0%B8%81%E0%B9%8B%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B9%8B%E0%B8%A2%E0%B8%A7%E0%B8%9B%E0%B8%B2%E0%B8%81%E0%B8%AB%E0%B8%A1%E0%B9%89%E0%B8%AD%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%B1%E0%B8%87-100063747722650/?paipv=0&eav=AfZ2tcIfempfXHWVN5P-98Qgyl_rcFmH8xleN-F4fynN218JSMYKBVa1-kXNV0DpTO0&_rdr",
                  type: "uri",
                },
                color: "#FFFFFFFF",
                height: "sm",
                type: "button",
                gravity: "bottom",
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
            layout: "vertical",
          },
          hero: {
            url: "https://img.wongnai.com/p/1920x0/2024/01/02/64d8fb1971a14a37ab14ba4886eb74c3.jpg",
            type: "image",
            action: {
              label: "Line",
              uri: "https://linecorp.com/",
              type: "uri",
            },
            aspectMode: "cover",
            aspectRatio: "20:13",
            size: "full",
          },
          type: "bubble",
        },
        {
          type: "bubble",
          footer: {
            layout: "vertical",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                action: {
                  type: "message",
                  text: "รายละเอียดร้านไมล์ ขอนแก่น",
                  label: "รายละเอียด",
                },
                style: "secondary",
                height: "sm",
                gravity: "bottom",
                type: "button",
                color: "#FFFFFFFF",
              },
              {
                action: {
                  type: "message",
                  text: "เวลาทำการร้านไมล์ ขอนแก่น",
                  label: "เวลาทำการ",
                },
                color: "#FFFFFFFF",
                style: "secondary",
                type: "button",
                height: "sm",
                gravity: "bottom",
              },
              {
                style: "secondary",
                type: "button",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  text: "เส้นทางไปร้านไมล์ ขอนแก่น",
                  label: "แผนที่ร้าน",
                },
                gravity: "bottom",
              },
              {
                action: {
                  label: "ช่องทางติดต่อร้าน",
                  type: "uri",
                  uri: "https://www.facebook.com/p/Miles-%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%9A%E0%B8%B6%E0%B8%87%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99%E0%B8%99%E0%B8%84%E0%B8%A3-100063964578542/?locale=th_TH",
                },
                gravity: "bottom",
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
            spacing: "sm",
            type: "box",
          },
          hero: {
            type: "image",
            aspectRatio: "20:13",
            aspectMode: "cover",
            size: "full",
            url: "https://blog.drivehub.co/wp-content/uploads/2024/07/04-2-1024x576.jpg",
            action: {
              uri: "https://linecorp.com/",
              label: "Line",
              type: "uri",
            },
          },
          body: {
            action: {
              type: "message",
              text: "ร้านอาหารในเมืองขอนแก่น",
              label: "ร้านอาหารในเมืองขอนแก่น",
            },
            type: "box",
            layout: "vertical",
            contents: [
              {
                color: "#000000FF",
                size: "xl",
                type: "text",
                contents: [],
                align: "start",
                weight: "bold",
                text: "ร้านไมล์ ขอนแก่น",
              },
              {
                margin: "lg",
                contents: [
                  {
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        size: "md",
                        contents: [],
                        text: "ประเภท : อาหารไทยและอาหารอีสาน",
                        color: "#5B5858FF",
                        type: "text",
                      },
                    ],
                    type: "box",
                  },
                  {
                    contents: [
                      {
                        size: "xs",
                        type: "text",
                        color: "#5B5858FF",
                        text: "ขอบคุณภาพจาก : เพจร้านไมล์ ขอนแก่น",
                        align: "start",
                        contents: [],
                      },
                    ],
                    type: "box",
                    spacing: "sm",
                    layout: "baseline",
                  },
                ],
                layout: "vertical",
                spacing: "sm",
                type: "box",
              },
            ],
          },
        },
        {
          type: "bubble",
          footer: {
            layout: "vertical",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                action: {
                  type: "message",
                  text: "รายละเอียดจ้วดคาเฟ่",
                  label: "รายละเอียด",
                },
                style: "secondary",
                height: "sm",
                gravity: "bottom",
                type: "button",
                color: "#FFFFFFFF",
              },
              {
                action: {
                  type: "message",
                  text: "เวลาทำการจ้วดคาเฟ่",
                  label: "เวลาทำการ",
                },
                color: "#FFFFFFFF",
                style: "secondary",
                type: "button",
                height: "sm",
                gravity: "bottom",
              },
              {
                style: "secondary",
                type: "button",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  text: "เส้นทางไปจ้วดคาเฟ่",
                  label: "แผนที่ร้าน",
                },
                gravity: "bottom",
              },
              {
                action: {
                  label: "ช่องทางติดต่อร้าน",
                  type: "uri",
                  uri: "https://www.jaudcafe.com",
                },
                gravity: "bottom",
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
            spacing: "sm",
            type: "box",
          },
          hero: {
            type: "image",
            aspectRatio: "20:13",
            aspectMode: "cover",
            size: "full",
            url: "https://blog.drivehub.co/wp-content/uploads/2023/08/15-3-768x1365.jpg",
            action: {
              uri: "https://linecorp.com/",
              label: "Line",
              type: "uri",
            },
          },
          body: {
            action: {
              type: "message",
              text: "ร้านอาหารในเมืองขอนแก่น",
              label: "ร้านอาหารในเมืองขอนแก่น",
            },
            type: "box",
            layout: "vertical",
            contents: [
              {
                color: "#000000FF",
                size: "xl",
                type: "text",
                contents: [],
                align: "start",
                weight: "bold",
                text: "จ้วดคาเฟ่",
              },
              {
                margin: "lg",
                contents: [
                  {
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        size: "md",
                        contents: [],
                        text: "ประเภท : อาหารไทยและอาหารอีสาน",
                        color: "#5B5858FF",
                        type: "text",
                      },
                    ],
                    type: "box",
                  },
                  {
                    contents: [
                      {
                        size: "xs",
                        type: "text",
                        color: "#5B5858FF",
                        text: "ขอบคุณภาพจาก : จ้วดคาเฟ่",
                        align: "start",
                        contents: [],
                      },
                    ],
                    type: "box",
                    spacing: "sm",
                    layout: "baseline",
                  },
                ],
                layout: "vertical",
                spacing: "sm",
                type: "box",
              },
            ],
          },
        },
        {
          body: {
            action: {
              text: "ร้านอาหารในเมืองขอนแก่น",
              label: "ร้านอาหารในเมืองขอนแก่น",
              type: "message",
            },
            contents: [
              {
                align: "start",
                size: "xl",
                text: "แซบนัว ครัวอิสาน",
                type: "text",
                weight: "bold",
                color: "#000000FF",
                contents: [],
              },
              {
                type: "box",
                margin: "lg",
                spacing: "sm",
                contents: [
                  {
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        color: "#5B5858FF",
                        size: "md",
                        text: "ประเภท : อาหารไทยและอาหารอีสาน",
                        contents: [],
                      },
                    ],
                    type: "box",
                    layout: "baseline",
                  },
                  {
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        size: "xs",
                        align: "start",
                        color: "#5B5858FF",
                        contents: [],
                        text: "ขอบคุณภาพจาก : เพจแซบนัว ครัวอิสาน",
                      },
                    ],
                    type: "box",
                    spacing: "sm",
                  },
                ],
                layout: "vertical",
              },
            ],
            type: "box",
            layout: "vertical",
          },
          type: "bubble",
          hero: {
            aspectMode: "cover",
            url: "https://blog.drivehub.co/wp-content/uploads/2023/08/10-3-1024x576.jpg",
            aspectRatio: "20:13",
            size: "full",
            action: {
              type: "uri",
              label: "Line",
              uri: "https://linecorp.com/",
            },
            type: "image",
          },
          footer: {
            spacing: "sm",
            contents: [
              {
                color: "#696969FF",
                type: "separator",
                margin: "xl",
              },
              {
                gravity: "bottom",
                height: "sm",
                type: "button",
                action: {
                  text: "รายละเอียดร้านแซบนัว ครัวอิสาน",
                  label: "รายละเอียด",
                  type: "message",
                },
                color: "#FFFFFFFF",
                style: "secondary",
              },
              {
                gravity: "bottom",
                height: "sm",
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                action: {
                  label: "เวลาทำการ",
                  type: "message",
                  text: "เวลาทำการร้านแซบนัว ครัวอิสาน",
                },
              },
              {
                color: "#FFFFFFFF",
                type: "button",
                height: "sm",
                gravity: "bottom",
                style: "secondary",
                action: {
                  type: "message",
                  text: "เส้นทางไปร้านแซบนัว ครัวอิสาน",
                  label: "แผนที่ร้าน",
                },
              },
              {
                style: "secondary",
                action: {
                  uri: "https://www.facebook.com/zabnour",
                  label: "ช่องทางติดต่อร้าน",
                  type: "uri",
                },
                type: "button",
                height: "sm",
                gravity: "bottom",
                color: "#FFFFFFFF",
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
            type: "box",
            layout: "vertical",
          },
        },
        {
          type: "bubble",
          body: {
            type: "box",
            contents: [
              {
                type: "text",
                color: "#000000FF",
                weight: "bold",
                contents: [],
                text: "บึงก้ามปู",
                size: "xl",
                align: "start",
              },
              {
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        color: "#5B5858FF",
                        type: "text",
                        text: "ประเภท : อาหารไทยและอาหารอีสาน",
                        contents: [],
                        size: "md",
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        contents: [],
                        text: "ขอบคุณภาพจาก : เพจบึงก้ามปู",
                        size: "xs",
                        type: "text",
                        color: "#5B5858FF",
                        align: "start",
                      },
                    ],
                  },
                ],
                margin: "lg",
                type: "box",
                layout: "vertical",
                spacing: "sm",
              },
            ],
            layout: "vertical",
            action: {
              text: "ร้านอาหารในเมืองขอนแก่น",
              type: "message",
              label: "ร้านอาหารในเมืองขอนแก่น",
            },
          },
          hero: {
            url: "https://blog.drivehub.co/wp-content/uploads/2023/08/09-3-768x1365.jpg",
            aspectRatio: "20:13",
            action: {
              label: "Line",
              type: "uri",
              uri: "https://linecorp.com/",
            },
            aspectMode: "cover",
            size: "full",
            type: "image",
          },
          footer: {
            contents: [
              {
                margin: "xl",
                type: "separator",
                color: "#696969FF",
              },
              {
                type: "button",
                gravity: "bottom",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  label: "รายละเอียด",
                  type: "message",
                  text: "รายละเอียดร้านบึงก้ามปู",
                },
                style: "secondary",
              },
              {
                height: "sm",
                action: {
                  label: "เวลาทำการ",
                  text: "เวลาทำการร้านบึงก้ามปู",
                  type: "message",
                },
                style: "secondary",
                color: "#FFFFFFFF",
                type: "button",
                gravity: "bottom",
              },
              {
                gravity: "bottom",
                style: "secondary",
                action: {
                  type: "message",
                  label: "แผนที่ร้าน",
                  text: "เส้นทางไปร้านบึงก้ามปู",
                },
                type: "button",
                height: "sm",
                color: "#FFFFFFFF",
              },
              {
                color: "#FFFFFFFF",
                style: "secondary",
                height: "sm",
                type: "button",
                action: {
                  label: "ช่องทางติดต่อร้าน",
                  uri: "https://www.facebook.com/kampookkc",
                  type: "uri",
                },
                gravity: "bottom",
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
            type: "box",
            spacing: "sm",
            layout: "vertical",
          },
        },
        {
          hero: {
            size: "full",
            action: {
              label: "Line",
              uri: "https://linecorp.com/",
              type: "uri",
            },
            aspectRatio: "20:13",
            aspectMode: "cover",
            type: "image",
            url: "https://blog.drivehub.co/wp-content/uploads/2023/08/04-4-1024x576.jpg",
          },
          type: "bubble",
          body: {
            action: {
              text: "ร้านอาหารในเมืองขอนแก่น",
              label: "ร้านอาหารในเมืองขอนแก่น",
              type: "message",
            },
            contents: [
              {
                align: "start",
                type: "text",
                weight: "bold",
                color: "#000000FF",
                text: "โต้งปลาเผา",
                size: "xl",
                contents: [],
              },
              {
                spacing: "sm",
                type: "box",
                layout: "vertical",
                margin: "lg",
                contents: [
                  {
                    contents: [
                      {
                        text: "ประเภท : อาหารไทยและอาหารอีสาน",
                        type: "text",
                        size: "md",
                        color: "#5B5858FF",
                        contents: [],
                      },
                    ],
                    type: "box",
                    spacing: "sm",
                    layout: "baseline",
                  },
                  {
                    layout: "baseline",
                    type: "box",
                    spacing: "sm",
                    contents: [
                      {
                        align: "start",
                        color: "#5B5858FF",
                        contents: [],
                        size: "xs",
                        type: "text",
                        text: "ขอบคุณภาพจาก : เพจโต้งปลาเผา",
                      },
                    ],
                  },
                ],
              },
            ],
            layout: "vertical",
            type: "box",
          },
          footer: {
            layout: "vertical",
            type: "box",
            contents: [
              {
                color: "#696969FF",
                type: "separator",
                margin: "xl",
              },
              {
                type: "button",
                height: "sm",
                color: "#FFFFFFFF",
                style: "secondary",
                action: {
                  label: "รายละเอียด",
                  text: "รายละเอียดร้านโต้งปลาเผา",
                  type: "message",
                },
                gravity: "bottom",
              },
              {
                action: {
                  label: "เวลาทำการ",
                  text: "เวลาทำการร้านโต้งปลาเผา",
                  type: "message",
                },
                style: "secondary",
                type: "button",
                gravity: "bottom",
                height: "sm",
                color: "#FFFFFFFF",
              },
              {
                action: {
                  label: "แผนที่ร้าน",
                  type: "message",
                  text: "เส้นทางไปร้านโต้งปลาเผา",
                },
                gravity: "bottom",
                height: "sm",
                style: "secondary",
                color: "#FFFFFFFF",
                type: "button",
              },
              {
                height: "sm",
                type: "button",
                action: {
                  uri: "https://www.facebook.com/profile.php?id=100053684775311",
                  label: "ช่องทางติดต่อร้าน",
                  type: "uri",
                },
                style: "secondary",
                color: "#FFFFFFFF",
                gravity: "bottom",
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
            spacing: "sm",
          },
        },
      ],
    },
  };
}

module.exports = {
  createRestaurantkkcFlexMessage,
};
