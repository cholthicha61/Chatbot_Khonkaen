const line = require("@line/bot-sdk");

function createMichelinFlexMessage() {
  return {
    type: "flex",
    altText: "ร้านอาหารมิชลินไกด์",
    contents: {
      contents: [
        {
          footer: {
            spacing: "sm",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                gravity: "bottom",
                height: "sm",
                style: "secondary",
                action: {
                  label: "รายละเอียด",
                  type: "message",
                  text: "รายละเอียดร้านประไพร",
                },
                color: "#FFFFFFFF",
                type: "button",
              },
              {
                height: "sm",
                type: "button",
                gravity: "bottom",
                style: "secondary",
                action: {
                  type: "message",
                  text: "เวลาทำการประไพร",
                  label: "เวลาทำการ",
                },
                color: "#FFFFFFFF",
              },
              {
                action: {
                  text: "เส้นทางไปร้านประไพร",
                  type: "message",
                  label: "แผนที่ร้าน",
                },
                type: "button",
                color: "#FFFFFFFF",
                height: "sm",
                style: "secondary",
                gravity: "bottom",
              },
              {
                style: "secondary",
                gravity: "bottom",
                height: "sm",
                type: "button",
                color: "#FFFFFFFF",
                action: {
                  type: "uri",
                  uri: "https://www.facebook.com/prapraikhonkaen/?locale=th_TH",
                  label: "ช่องทางติดต่อร้าน",
                },
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
            layout: "vertical",
            type: "box",
          },
          hero: {
            aspectRatio: "20:13",
            size: "full",
            aspectMode: "cover",
            action: {
              label: "Line",
              uri: "https://linecorp.com/",
              type: "uri",
            },
            type: "image",
            url: "https://img.wongnai.com/p/1920x0/2023/11/04/72aced885d6443619858a6222e6fd94a.jpg",
          },
          type: "bubble",
          body: {
            type: "box",
            action: {
              label: "อาหารอีสาน",
              type: "message",
              text: "อาหารอีสาน",
            },
            contents: [
              {
                color: "#000000FF",
                contents: [],
                align: "start",
                weight: "bold",
                size: "xl",
                type: "text",
                text: "ประไพร",
              },
              {
                layout: "vertical",
                spacing: "sm",
                type: "box",
                contents: [
                  {
                    type: "box",
                    spacing: "sm",
                    layout: "baseline",
                    contents: [
                      {
                        contents: [],
                        color: "#5B5858FF",
                        type: "text",
                        size: "md",
                        text: "ประเภท : อาหารอีสาน",
                      },
                    ],
                  },
                  {
                    contents: [
                      {
                        color: "#5B5858FF",
                        text: "ขอบคุณภาพจาก : Gingunther",
                        align: "start",
                        contents: [],
                        size: "xs",
                        type: "text",
                      },
                    ],
                    type: "box",
                    layout: "baseline",
                    spacing: "sm",
                  },
                ],
                margin: "lg",
              },
            ],
            layout: "vertical",
          },
        },
        {
          hero: {
            action: {
              label: "Line",
              uri: "https://linecorp.com/",
              type: "uri",
            },
            aspectRatio: "20:13",
            type: "image",
            url: "https://img.wongnai.com/p/1920x0/2024/08/06/d399f423576f4004a0b7c79c56e10a7e.jpg",
            size: "full",
            aspectMode: "cover",
          },
          body: {
            type: "box",
            action: {
              label: "อาหารอีสาน",
              type: "message",
              text: "อาหารอีสาน",
            },
            layout: "vertical",
            contents: [
              {
                size: "xl",
                align: "start",
                weight: "bold",
                type: "text",
                contents: [],
                color: "#000000FF",
                text: "ตำกระเทย สาเกต",
              },
              {
                margin: "lg",
                layout: "vertical",
                spacing: "sm",
                contents: [
                  {
                    type: "box",
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        size: "md",
                        contents: [],
                        text: "ประเภท : อาหารอีสาน",
                        color: "#5B5858FF",
                      },
                    ],
                    layout: "baseline",
                  },
                  {
                    layout: "baseline",
                    contents: [
                      {
                        text: "ขอบคุณภาพจาก : Jitprasong Lamsaard",
                        size: "xs",
                        contents: [],
                        color: "#5B5858FF",
                        type: "text",
                        align: "start",
                      },
                    ],
                    spacing: "sm",
                    type: "box",
                  },
                ],
                type: "box",
              },
            ],
          },
          type: "bubble",
          footer: {
            spacing: "sm",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                gravity: "bottom",
                type: "button",
                style: "secondary",
                action: {
                  label: "รายละเอียด",
                  type: "message",
                  text: "รายละเอียดร้านตำกระเทย สาเกต",
                },
                height: "sm",
                color: "#FEFEFEFF",
              },
              {
                height: "sm",
                action: {
                  text: "เวลาทำการร้านตำกระเทย สาเกต",
                  type: "message",
                  label: "เวลาทำการ",
                },
                gravity: "bottom",
                color: "#FFFFFFFF",
                style: "secondary",
                type: "button",
              },
              {
                type: "button",
                gravity: "bottom",
                height: "sm",
                color: "#FFFFFFFF",
                action: {
                  text: "เส้นทางไปร้านตำกระเทย สาเกต",
                  type: "message",
                  label: "แผนที่ร้าน",
                },
                style: "secondary",
              },
              {
                color: "#FFFFFFFF",
                height: "sm",
                gravity: "bottom",
                action: {
                  uri: "https://www.facebook.com/sagate.tumkratoei/?locale=th_TH",
                  type: "uri",
                  label: "ช่องทางติดต่อร้าน",
                },
                style: "secondary",
                type: "button",
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
            layout: "vertical",
            type: "box",
          },
        },
        {
          footer: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                color: "#696969FF",
                margin: "xl",
                type: "separator",
              },
              {
                style: "secondary",
                color: "#FFFFFFFF",
                action: {
                  text: "รายละเอียดร้านมีกินฟาร์ม",
                  type: "message",
                  label: "รายละเอียด",
                },
                gravity: "bottom",
                height: "sm",
                type: "button",
              },
              {
                height: "sm",
                color: "#FFFFFFFF",
                style: "secondary",
                action: {
                  text: "เวลาทำการร้านมีกินฟาร์ม",
                  label: "เวลาทำการ",
                  type: "message",
                },
                type: "button",
                gravity: "bottom",
              },
              {
                style: "secondary",
                height: "sm",
                action: {
                  type: "message",
                  text: "เส้นทางไปร้านมีกินฟาร์ม",
                  label: "แผนที่ร้าน",
                },
                gravity: "bottom",
                color: "#FFFFFFFF",
                type: "button",
              },
              {
                color: "#FFFFFFFF",
                height: "sm",
                style: "secondary",
                action: {
                  label: "ช่องทางติดต่อร้าน",
                  type: "uri",
                  uri: "https://www.facebook.com/mekinfarmkhonkaen/?locale=th_TH",
                },
                type: "button",
                gravity: "bottom",
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
            spacing: "sm",
          },
          hero: {
            size: "full",
            aspectMode: "cover",
            action: {
              label: "Line",
              uri: "https://linecorp.com/",
              type: "uri",
            },
            type: "image",
            aspectRatio: "20:13",
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/462693755_879311657634519_304306488371042920_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Q53O6hL6Pf4Q7kNvgE9X2lt&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=ALu5zXR24OEHuaoE1LNuJiy&oh=00_AYAQEpNSfswRjGN2wnVXdQXNDCcTeJKFDCNCis_iRivqfQ&oe=67147CE6",
          },
          type: "bubble",
          body: {
            contents: [
              {
                color: "#000000FF",
                weight: "bold",
                contents: [],
                text: "มีกินฟาร์ม Mekin Farm",
                type: "text",
                size: "xl",
                align: "start",
              },
              {
                spacing: "sm",
                margin: "lg",
                type: "box",
                contents: [
                  {
                    layout: "baseline",
                    type: "box",
                    spacing: "sm",
                    contents: [
                      {
                        text: "ประเภท : อาหารอีสาน",
                        type: "text",
                        size: "md",
                        contents: [],
                        color: "#5B5858FF",
                      },
                    ],
                  },
                  {
                    type: "box",
                    contents: [
                      {
                        contents: [],
                        size: "xs",
                        align: "start",
                        text: "ขอบคุณภาพจาก : มีกินฟาร์ม",
                        type: "text",
                        color: "#5B5858FF",
                      },
                    ],
                    layout: "baseline",
                    spacing: "sm",
                  },
                ],
                layout: "vertical",
              },
            ],
            type: "box",
            layout: "vertical",
            action: {
              text: "อาหารอีสาน",
              label: "อาหารอีสาน",
              type: "message",
            },
          },
        },
        {
          body: {
            contents: [
              {
                weight: "bold",
                text: "ประสิทธิ์โภชนา",
                align: "start",
                color: "#000000FF",
                contents: [],
                type: "text",
                size: "xl",
              },
              {
                spacing: "sm",
                layout: "vertical",
                type: "box",
                contents: [
                  {
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        contents: [],
                        size: "md",
                        color: "#5B5858FF",
                        text: "ประเภท : อาหารอีสาน",
                      },
                    ],
                    type: "box",
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        align: "start",
                        color: "#5B5858FF",
                        contents: [],
                        type: "text",
                        size: "xs",
                        text: "ขอบคุณภาพจาก : 梓涵 Zǐ hán",
                      },
                    ],
                    spacing: "sm",
                  },
                ],
                margin: "lg",
              },
            ],
            type: "box",
            layout: "vertical",
            action: {
              label: "อาหารอีสาน",
              text: "อาหารอีสาน",
              type: "message",
            },
          },
          hero: {
            aspectRatio: "20:13",
            type: "image",
            aspectMode: "cover",
            url: "https://img.wongnai.com/p/1920x0/2023/10/26/1a3f8a62199d4f988ae83ca3aa544cb4.jpg",
            action: {
              type: "uri",
              uri: "https://linecorp.com/",
              label: "Line",
            },
            size: "full",
          },
          type: "bubble",
          footer: {
            spacing: "sm",
            contents: [
              {
                type: "separator",
                color: "#696969FF",
                margin: "xl",
              },
              {
                type: "button",
                color: "#FFFFFFFF",
                gravity: "bottom",
                style: "secondary",
                action: {
                  text: "รายละเอียดร้านประสิทธิ์โภชนา",
                  label: "รายละเอียด",
                  type: "message",
                },
                height: "sm",
              },
              {
                color: "#FFFFFFFF",
                action: {
                  label: "เวลาทำการ",
                  type: "message",
                  text: "เวลาทำการร้านประสิทธิ์โภชนา",
                },
                height: "sm",
                style: "secondary",
                gravity: "bottom",
                type: "button",
              },
              {
                height: "sm",
                gravity: "bottom",
                type: "button",
                action: {
                  text: "เส้นทางไปร้านประสิทธิ์โภชนา",
                  type: "message",
                  label: "แผนที่ร้าน",
                },
                style: "secondary",
                color: "#FFFFFFFF",
              },
              {
                gravity: "bottom",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  uri: "https://www.facebook.com/Prasitpochana/?locale=th_TH",
                  label: "ช่องทางติดต่อร้าน",
                  type: "uri",
                },
                type: "button",
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
            type: "box",
            layout: "vertical",
          },
        },
        {
          footer: {
            spacing: "sm",
            type: "box",
            layout: "vertical",
            contents: [
              {
                margin: "xl",
                color: "#696969FF",
                type: "separator",
              },
              {
                color: "#FFFFFFFF",
                gravity: "bottom",
                height: "sm",
                action: {
                  type: "message",
                  text: "รายละเอียดร้านสุขใจแลนด์",
                  label: "รายละเอียด",
                },
                type: "button",
                style: "secondary",
              },
              {
                gravity: "bottom",
                color: "#FFFFFFFF",
                style: "secondary",
                type: "button",
                height: "sm",
                action: {
                  label: "เวลาทำการ",
                  type: "message",
                  text: "เวลาทำการร้านสุขใจแลนด์",
                },
              },
              {
                type: "button",
                height: "sm",
                style: "secondary",
                action: {
                  text: "เส้นทางไปร้านสุขใจแลนด์",
                  label: "แผนที่ร้าน",
                  type: "message",
                },
                gravity: "bottom",
                color: "#FFFFFFFF",
              },
              {
                color: "#FFFFFFFF",
                height: "sm",
                type: "button",
                gravity: "bottom",
                style: "secondary",
                action: {
                  uri: "https://www.facebook.com/sookjailand/?locale=th_TH",
                  label: "ช่องทางติดต่อร้าน",
                  type: "uri",
                },
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
          },
          body: {
            contents: [
              {
                align: "start",
                type: "text",
                color: "#000000FF",
                weight: "bold",
                size: "xl",
                contents: [],
                text: "สุขใจแลนด์",
              },
              {
                contents: [
                  {
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        contents: [],
                        size: "md",
                        color: "#5B5858FF",
                        text: "ประเภท : อาหารอีสาน",
                      },
                    ],
                    type: "box",
                  },
                  {
                    layout: "baseline",
                    type: "box",
                    contents: [
                      {
                        align: "start",
                        color: "#5B5858FF",
                        contents: [],
                        text: "ขอบคุณภาพจาก : Pipatpong Promchan",
                        type: "text",
                        size: "xs",
                      },
                    ],
                    spacing: "sm",
                  },
                ],
                type: "box",
                margin: "lg",
                layout: "vertical",
                spacing: "sm",
              },
            ],
            layout: "vertical",
            type: "box",
            action: {
              label: "อาหารอีสาน",
              text: "อาหารอีสาน",
              type: "message",
            },
          },
          hero: {
            size: "full",
            aspectMode: "cover",
            type: "image",
            url: "https://img.wongnai.com/p/1920x0/2023/03/06/90349c4739694d93bdce309aad5e12fe.jpg",
            aspectRatio: "20:13",
            action: {
              label: "Line",
              type: "uri",
              uri: "https://linecorp.com/",
            },
          },
          type: "bubble",
        },
        {
          body: {
            layout: "vertical",
            type: "box",
            action: {
              label: "อาหารอีสาน",
              text: "อาหารอีสาน",
              type: "message",
            },
            contents: [
              {
                size: "xl",
                contents: [],
                weight: "bold",
                text: "ไก่ย่างวรรณา",
                align: "start",
                color: "#000000FF",
                type: "text",
              },
              {
                margin: "lg",
                contents: [
                  {
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        contents: [],
                        text: "ประเภท : อาหารอีสาน",
                        color: "#5B5858FF",
                        size: "md",
                      },
                    ],
                    layout: "baseline",
                    type: "box",
                  },
                  {
                    layout: "baseline",
                    type: "box",
                    spacing: "sm",
                    contents: [
                      {
                        text: "ขอบคุณภาพจาก : ไก่ย่างวรรณา เขาสวนกวาง ",
                        type: "text",
                        size: "xs",
                        color: "#5B5858FF",
                        contents: [],
                        align: "start",
                      },
                    ],
                  },
                ],
                spacing: "sm",
                type: "box",
                layout: "vertical",
              },
            ],
          },
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
                style: "secondary",
                height: "sm",
                color: "#FFFFFFFF",
                action: {
                  type: "message",
                  text: "รายละเอียดร้านไก่ย่างวรรณา",
                  label: "รายละเอียด",
                },
                gravity: "bottom",
                type: "button",
              },
              {
                height: "sm",
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                gravity: "bottom",
                action: {
                  label: "เวลาทำการ",
                  text: "เวลาทำการร้านไก่ย่างวรรณา",
                  type: "message",
                },
              },
              {
                color: "#FFFFFFFF",
                type: "button",
                style: "secondary",
                height: "sm",
                gravity: "bottom",
                action: {
                  text: "เส้นทางไปร้านไก่ย่างวรรณา",
                  label: "แผนที่ร้าน",
                  type: "message",
                },
              },
              {
                color: "#FFFFFFFF",
                type: "button",
                style: "secondary",
                action: {
                  type: "uri",
                  uri: "https://www.facebook.com/wankaiyang/?locale=th_TH",
                  label: "ช่องทางติดต่อร้าน",
                },
                gravity: "bottom",
                height: "sm",
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
            type: "box",
          },
          type: "bubble",
          hero: {
            aspectMode: "cover",
            aspectRatio: "20:13",
            size: "full",
            action: {
              uri: "https://linecorp.com/",
              type: "uri",
              label: "Line",
            },
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/462032397_3532962870335163_1153313577726494887_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DOuXQx8Jxh0Q7kNvgE7XJY_&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=AFdjNtyJ0kIbUB4Jdy0pEuh&oh=00_AYC_PtRLcDno4Ztk5GLNRxl9vms5XT5t-mF4VBWySf_mDQ&oe=67149FEB",
            type: "image",
          },
        },
        {
          body: {
            action: {
              label: "อาหารอีสาน",
              text: "อาหารอีสาน",
              type: "message",
            },
            type: "box",
            layout: "vertical",
            contents: [
              {
                text: "ไก่ย่างระเบียบ เขาสวนกวาง",
                weight: "bold",
                size: "xl",
                type: "text",
                align: "start",
                color: "#000000FF",
                contents: [],
              },
              {
                layout: "vertical",
                margin: "lg",
                type: "box",
                spacing: "sm",
                contents: [
                  {
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        size: "md",
                        contents: [],
                        text: "ประเภท : อาหารอีสาน",
                        color: "#5B5858FF",
                      },
                    ],
                    spacing: "sm",
                    type: "box",
                  },
                  {
                    contents: [
                      {
                        type: "text",
                        contents: [],
                        text: "ขอบคุณภาพจาก : ย้ำคิดย้ำฝัน",
                        size: "xs",
                        color: "#5B5858FF",
                        align: "start",
                      },
                    ],
                    spacing: "sm",
                    layout: "baseline",
                    type: "box",
                  },
                ],
              },
            ],
          },
          type: "bubble",
          hero: {
            type: "image",
            size: "full",
            url: "https://f.ptcdn.info/330/081/000/rz0dfa19c6292EFsqK7kQ-o.jpg",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              label: "Line",
              type: "uri",
              uri: "https://linecorp.com/",
            },
          },
          footer: {
            type: "box",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                style: "secondary",
                height: "sm",
                type: "button",
                color: "#FFFFFFFF",
                gravity: "bottom",
                action: {
                  type: "message",
                  text: "รายละเอียดร้านไก่ย่างระเบียบ เขาสวนกวาง",
                  label: "รายละเอียด",
                },
              },
              {
                gravity: "bottom",
                style: "secondary",
                height: "sm",
                color: "#FFFFFFFF",
                type: "button",
                action: {
                  label: "เวลาทำการ",
                  type: "message",
                  text: "เวลาทำการร้านไก่ย่างระเบียบ เขาสวนกวาง",
                },
              },
              {
                action: {
                  label: "แผนที่ร้าน",
                  type: "message",
                  text: "เส้นทางไปร้านไก่ย่างระเบียบ เขาสวนกวาง",
                },
                type: "button",
                gravity: "bottom",
                style: "secondary",
                height: "sm",
                color: "#FFFFFFFF",
              },
              {
                gravity: "bottom",
                color: "#FFFFFFFF",
                action: {
                  type: "uri",
                  uri: "https://www.facebook.com/kaiyangzap/?locale=th_TH",
                  label: "ช่องทางติดต่อร้าน",
                },
                style: "secondary",
                height: "sm",
                type: "button",
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
            spacing: "sm",
            layout: "vertical",
          },
        },
      ],
      type: "carousel",
    },
    altText: "อาหารอีสาน",
    type: "flex",
  };
}

module.exports = {
  createMichelinFlexMessage,
};
