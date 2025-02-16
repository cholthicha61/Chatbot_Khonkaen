const line = require("@line/bot-sdk");

function createBuffetFlex() {
  return {
    type: "flex",
    altText: "บุฟเฟ่ชาบู หมูกะทะเจ้าดังขอนแก่น",
    contents: {
      type: "carousel",
      contents: [
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://www.ryoiireview.com/upload/article/202306/1686128874_bc0a2f8c6bc2335e7e6846cefff409fc.jpg",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              label: "Line",
              uri: "https://linecorp.com/",
            },
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "GAJA Grill & Shabu Korean buffet",
                weight: "bold",
                size: "xl",
                color: "#000000FF",
              },
              {
                type: "box",
                layout: "vertical",
                margin: "lg",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "ประเภท : อาหารบุฟเฟ่เจ้าดัง",
                        size: "md",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "ขอบคุณภาพจาก : GAJA Grill & Shabu Korean buffet",
                        size: "xs",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "ราคาบุฟเฟ่",
                  text: "ราคาบุฟเฟ่ GAJA Grill & Shabu Korean buffet",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "เวลาทำการ",
                  text: "เวลาทำการ GAJA Grill & Shabu Korean buffet",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "แผนที่ร้าน",
                  text: "เส้นทางไป GAJA Grill & Shabu Korean buffet",
                },
              },
              {
                type: "button",
                style: "secondary",
                height: "sm",
                color: "#FFFFFFFF",
                action: {
                  type: "uri",
                  label: "ช่องทางติดต่อร้าน",
                  uri: "https://www.facebook.com/p/GAJA-Grill-Korean-BBQ-Buffet-Tontann-100087032444106/",
                },
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
          },
        },
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.6435-9/194925444_1428075904216071_4249631453510123753_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9OUtQBJjc4EQ7kNvgFJ6ZJr&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=A_7_5oPoN9CB-N8DtBI91zw&oh=00_AYBco6DOzclAn8qGSbP2HDZ_2nnk89Aj2N7oH9TU8W-jhA&oe=67861BA7",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              label: "Line",
              uri: "https://linecorp.com/",
            },
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "โอชิเน ขอนแก่น",
                weight: "bold",
                size: "xl",
                color: "#000000FF",
              },
              {
                type: "box",
                layout: "vertical",
                margin: "lg",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "ประเภท : อาหารบุฟเฟ่เจ้าดัง",
                        size: "md",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "ขอบคุณภาพจาก : โอชิเน ขอนแก่น",
                        size: "xs",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "ราคาบุฟเฟ่",
                  text: "ราคาบุฟเฟ่ โอชิเน ขอนแก่น",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "เวลาทำการ",
                  text: "เวลาทำการโอชิเน ขอนแก่น",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "แผนที่ร้าน",
                  text: "เส้นทางไปโอชิเน ขอนแก่น",
                },
              },
              {
                type: "button",
                style: "secondary",
                height: "sm",
                color: "#FFFFFFFF",
                action: {
                  type: "uri",
                  label: "ช่องทางติดต่อร้าน",
                  uri: "https://www.facebook.com/@oshineikhonkaen/?locale=th_TH",
                },
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
          },
        },
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://www.ryoiireview.com/upload/article/202303/1680253867_f67cf89462fe70ffa372be89388a842b.jpg",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              label: "Line",
              uri: "https://linecorp.com/",
            },
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "kinn's the buta",
                weight: "bold",
                size: "xl",
                color: "#000000FF",
              },
              {
                type: "box",
                layout: "vertical",
                margin: "lg",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "อาหารบุฟเฟ่",
                        size: "md",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "ขอบคุณภาพจาก : kinn's the buta",
                        size: "xs",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "ราคาบุฟเฟ่",
                  text: "ราคาบุฟเฟ่kinn's the buta",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "เวลาทำการ",
                  text: "เวลาทำการkinn's the buta",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "แผนที่ร้าน",
                  text: "เส้นทางไปkinn's the buta",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "uri",
                  label: "ช่องทางติดต่อร้าน",
                  uri: "https://www.facebook.com/kinnsthebuta/?locale=th_TH",
                },
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
          },
        },
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://come.in.th/wp-content/uploads/2024/03/Shabulogy-%E0%B8%8A%E0%B8%B2%E0%B8%9A%E0%B8%B9%E0%B9%82%E0%B8%A5%E0%B8%88%E0%B8%B5%E0%B9%89.png",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              label: "Line",
              uri: "https://linecorp.com/",
            },
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "ชาบูโลจี้",
                weight: "bold",
                size: "xl",
                color: "#000000FF",
              },
              {
                type: "box",
                layout: "vertical",
                margin: "lg",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "อาหารบุฟเฟ่",
                        size: "md",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "ขอบคุณภาพจาก : ชาบูโลจี้",
                        size: "xs",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "ราคาบุฟเฟ่",
                  text: "ราคาบุฟเฟ่ชาบูโลจี้",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "เวลาทำการ",
                  text: "เวลาทำการชาบูโลจี้",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "แผนที่ร้าน",
                  text: "เส้นทางไปชาบูโลจี้",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "uri",
                  label: "ช่องทางติดต่อร้าน",
                  uri: "https://www.facebook.com/shabulogy/?locale=th_TH",
                },
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
          },
        },
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://www.ryoiireview.com/upload/article/202206/1655278780_d0096ec6c83575373e3a21d129ff8fef.jpg",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              label: "Line",
              uri: "https://linecorp.com/",
            },
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "Sometime On A Sunday",
                weight: "bold",
                size: "xl",
                color: "#000000FF",
              },
              {
                type: "box",
                layout: "vertical",
                margin: "lg",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "อาหารบุฟเฟ่",
                        size: "md",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "ขอบคุณภาพจาก : Sometime On A Sunday",
                        size: "xs",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "ราคาบุฟเฟ่",
                  text: "ราคาบุฟเฟ่ Sometime On A Sunday",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "เวลาทำการ",
                  text: "เวลาทำการ Sometime On A Sunday",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "แผนที่ร้าน",
                  text: "เส้นทางไป Sometime On A Sunday",
                },
              },
              {
                type: "button",
                style: "secondary",
                height: "sm",
                color: "#FFFFFFFF",
                action: {
                  type: "uri",
                  label: "ช่องทางติดต่อร้าน",
                  uri: "https://www.facebook.com/Sometimeonasundaycafe/",
                },
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
          },
        },
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://files.thailandtourismdirectory.go.th/assets/upload/2018/09/05/20180905c4ca4238a0b923820dcc509a6f75849b182525.jpg",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              label: "Line",
              uri: "https://linecorp.com/",
            },
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "ชาบู ชิวเล้า",
                weight: "bold",
                size: "xl",
                color: "#000000FF",
              },
              {
                type: "box",
                layout: "vertical",
                margin: "lg",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "อาหารบุฟเฟ่",
                        size: "md",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "ขอบคุณภาพจาก : thailandtourismdirectory",
                        size: "xs",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "ราคาบุฟเฟ่",
                  text: "ราคาบุฟเฟ่ชาบู ชิวเล้า",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "เวลาทำการ",
                  text: "เวลาทำการชาบู ชิวเล้า",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "แผนที่ร้าน",
                  text: "เส้นทางไปชาบู ชิวเล้า",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "uri",
                  label: "ช่องทางติดต่อร้าน",
                  uri: "https://www.facebook.com/p/%E0%B8%8A%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%A5%E0%B9%89%E0%B8%B2-Suki-Plaza-KhonKaen-100057117083325/",
                },
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
          },
        },
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://media.readthecloud.co/wp-content/uploads/2022/05/29111354/khon-kaen-bbq-6-1.jpg",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              label: "Line",
              uri: "https://linecorp.com/",
            },
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "นายตอง หมูกระทะ",
                weight: "bold",
                size: "xl",
                color: "#000000FF",
              },
              {
                type: "box",
                layout: "vertical",
                margin: "lg",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "อาหารบุฟเฟ่",
                        size: "md",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "ขอบคุณภาพจาก : นายตอง หมูกระทะ",
                        size: "xs",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "ราคาบุฟเฟ่",
                  text: "ราคาบุฟเฟ่นายตอง หมูกระทะ",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "เวลาทำการ",
                  text: "เวลาทำการนายตอง หมูกระทะ",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "แผนที่ร้าน",
                  text: "เส้นทางไปนายตอง หมูกระทะ",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "uri",
                  label: "ช่องทางติดต่อร้าน",
                  uri: "https://www.facebook.com/p/%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%95%E0%B8%AD%E0%B8%87-%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%B0-100058705015623/",
                },
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
          },
        },
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://www.sarakhamguide.com/upload/images/2023/06/2fd5384fdc8478b62d7d7d7acf753c29.jpg",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              label: "Line",
              uri: "https://linecorp.com/",
            },
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "ปลาวาฬใจดี",
                weight: "bold",
                size: "xl",
                color: "#000000FF",
              },
              {
                type: "box",
                layout: "vertical",
                margin: "lg",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "อาหารบุฟเฟ่",
                        size: "md",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "ขอบคุณภาพจาก : ปลาวาฬใจดี สุกี้&ชาบู",
                        size: "xs",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "ราคาบุฟเฟ่",
                  text: "ราคาบุฟเฟ่ปลาวาฬใจดี",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "เวลาทำการ",
                  text: "เวลาทำการปลาวาฬใจดี",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "แผนที่ร้าน",
                  text: "เส้นทางไปปลาวาฬใจดี",
                },
              },
              {
                type: "button",
                style: "secondary",
                height: "sm",
                color: "#FFFFFFFF",
                action: {
                  type: "uri",
                  label: "ช่องทางติดต่อร้าน",
                  uri: "https://www.facebook.com/WhaleJaiDee.KKU/?locale=th_TH",
                },
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
          },
        },
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://www.ryoiireview.com/upload/article/202304/1682490039_fb612ea12001751efe792782d341e386.jpg",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              label: "Line",
              uri: "https://linecorp.com/",
            },
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "ร้านคัม ขอนแก่น",
                weight: "bold",
                size: "xl",
                color: "#000000FF",
              },
              {
                type: "box",
                layout: "vertical",
                margin: "lg",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "อาหารบุฟเฟ่",
                        size: "md",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "ขอบคุณภาพจาก : ร้านคัม ขอนแก่น",
                        size: "xs",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "ราคาบุฟเฟ่",
                  text: "ราคาบุฟเฟ่ร้านคัม ขอนแก่น",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "เวลาทำการ",
                  text: "เวลาทำการร้านคัม ขอนแก่น",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "แผนที่ร้าน",
                  text: "เส้นทางไปร้านคัม ขอนแก่นง",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "uri",
                  label: "ช่องทางติดต่อร้าน",
                  uri: "https://www.facebook.com/pykmenu/?locale=th_TH",
                },
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
          },
        },
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://media.readthecloud.co/wp-content/uploads/2022/05/29111359/khon-kaen-bbq-2-1.jpg",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              label: "Line",
              uri: "https://linecorp.com/",
            },
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "เดอะนัวหมูกระทะบุฟเฟต์",
                weight: "bold",
                size: "xl",
                color: "#000000FF",
              },
              {
                type: "box",
                layout: "vertical",
                margin: "lg",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "อาหารบุฟเฟ่",
                        size: "md",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "ขอบคุณภาพจาก : เดอะนัวหมูกระทะบุฟเฟต์",
                        size: "xs",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "ราคาบุฟเฟ่",
                  text: "ราคาบุฟเฟ่ เดอะนัวหมูกระทะบุฟเฟต์",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "เวลาทำการ",
                  text: "เวลาทำการ เดอะนัวหมูกระทะบุฟเฟต์",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "แผนที่ร้าน",
                  text: "เส้นทางไป เดอะนัวหมูกระทะบุฟเฟต์",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "uri",
                  label: "ช่องทางติดต่อร้าน",
                  uri: "https://www.facebook.com/TheNuaBuffet/?locale=th_TH",
                },
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
          },
        },
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://media.readthecloud.co/wp-content/uploads/2022/05/29111357/khon-kaen-bbq-3-2.jpg",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              label: "Line",
              uri: "https://linecorp.com/",
            },
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "Dragon Grill BBQ",
                weight: "bold",
                size: "xl",
                color: "#000000FF",
              },
              {
                type: "box",
                layout: "vertical",
                margin: "lg",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "อาหารบุฟเฟ่",
                        size: "md",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "ขอบคุณภาพจาก : Dragon Grill BBQ",
                        size: "xs",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "ราคาบุฟเฟ่",
                  text: "ราคาบุฟเฟ่ Dragon Grill BBQ",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "เวลาทำการ",
                  text: "เวลาทำการ Dragon Grill BBQ",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "แผนที่ร้าน",
                  text: "เส้นทางไป Dragon Grill BBQ",
                },
              },
              {
                type: "button",
                style: "secondary",
                height: "sm",
                color: "#FFFFFFFF",
                action: {
                  type: "uri",
                  label: "ช่องทางติดต่อร้าน",
                  uri: "https://www.facebook.com/p/Dragon-Grill-BBQ-100063623076560/?locale=th_TH",
                },
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
          },
        },
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://media.readthecloud.co/wp-content/uploads/2022/05/29111352/khon-kaen-bbq-7-1.jpg",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              label: "Line",
              uri: "https://linecorp.com/",
            },
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "โอมายก้อน by โอปอ",
                weight: "bold",
                size: "xl",
                color: "#000000FF",
              },
              {
                type: "box",
                layout: "vertical",
                margin: "lg",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "อาหารบุฟเฟ่",
                        size: "md",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "ขอบคุณภาพจาก : โอมายก้อน by โอปอ",
                        size: "xs",
                        color: "#5B5858FF",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "ราคาบุฟเฟ่",
                  text: "ราคาบุฟเฟ่โอมายก้อน by โอปอ",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "เวลาทำการ",
                  text: "เวลาทำการโอมายก้อน by โอปอ",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "message",
                  label: "แผนที่ร้าน",
                  text: "เส้นทางไปโอมายก้อน by โอปอ",
                },
              },
              {
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  type: "uri",
                  label: "ช่องทางติดต่อร้าน",
                  uri: "https://www.facebook.com/OhMyGonByOporBuffet/",
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
  };
}

module.exports = {
  createBuffetFlex,
};
