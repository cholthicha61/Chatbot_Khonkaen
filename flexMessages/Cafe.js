function createCafeFlex() {
  return {
    type: "flex",
    altText: "คาเฟ่",
    contents: {
      type: "carousel",
      contents: [
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://miro.medium.com/v2/resize:fit:828/1*d7K8aKRe4NODbov4F2Wo-g.jpeg",
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
                text: "11AM cafe and space",
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
                        text: "ประเภท : คาเฟ่",
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
                        text: "ขอบคุณภาพจาก : 11AM cafe and space",
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
                  label: "เวลาทำการ",
                  text: "เวลาทำการ 11AM cafe and space",
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
                  text: "เส้นทางไป 11AM cafe and space",
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
                  uri: "https://www.facebook.com/11AMcafeandspace/?locale=th_TH",
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
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/453185459_849529253904845_5200057326287002003_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zMRr-NnSkBUQ7kNvgHRoE-g&_nc_oc=AdhfD0sdHN00GspZ2WDfvJ1OKG2C3VkVnKCiILElEiQ72Im-NaLDtQ_dDwWryR7yiuA&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=AxKijR9SkKjbtOCJmVUpGoo&oh=00_AYB9I40Mn1NNMXCksH0QRw4R4ct5QAC71SkXSHt7ycGJRA&oe=6768FDE0",
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
                text: "แจ่ม Cafe&Eatery",
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
                        text: "ประเภท : คาเฟ่",
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
                        text: "ขอบคุณภาพจาก : แจ่ม Cafe&Eatery",
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
                  label: "เวลาทำการ",
                  text: "เวลาทำการแจ่ม Cafe&Eatery",
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
                  text: "เส้นทางไปแจ่ม Cafe&Eatery",
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
                  uri: "https://www.facebook.com/JamCafe.Khonkaen?locale=th_TH",
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
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/436301747_764952179071866_7177433749407959297_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FueCqBV5DvIQ7kNvgGAQxrT&_nc_oc=AdiEyOuCeKIPs4aaKklSx9rkoQve2Uhyjt-gXN9RFw7J0UXIJtKDOoo8PcDomaWsPUg&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=AXGk_swKSgpwzTyCneateof&oh=00_AYBXH5fSEgWio39cJ4pG9tvmIhP_paZeyESKhJmYZO-c7A&oe=6768FCD3",
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
                text: "ดูฟาร์ม คาเฟ่ (Dofarm Cafe)",
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
                        text: "ประเภท : คาเฟ่",
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
                        text: "ขอบคุณภาพจาก : ดูฟาร์มคาเฟ่",
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
                  label: "เวลาทำการ",
                  text: "เวลาทำการดูฟาร์ม คาเฟ่ (Dofarm Cafe)",
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
                  text: "เส้นทางไปดูฟาร์ม คาเฟ่ (Dofarm Cafe)",
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
                  uri: "https://www.facebook.com/dofarmcafe?locale=th_TH",
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
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.6435-9/82933476_105515024345514_8336040224521977856_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=2PivbyyCn5MQ7kNvgHpA8HR&_nc_oc=AdjJsCcnM9fw3ryLflipseFnOIeOV0p2P9teebyaeFzu1GRfD4DTfzlUhvzr5gt0Ivc&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=Aap-wmHn4-GiZvZA4aOt-3X&oh=00_AYCl84MfoAvq0Xm13tgZzGOk298638vt3CsZkKIf0bundw&oe=678A9F31",
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
                text: "พายคอฟฟี่ (Pi Coffee)",
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
                        text: "ประเภท : คาเฟ่",
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
                        text: "ขอบคุณภาพจาก : Pi coffee",
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
                  label: "เวลาทำการ",
                  text: "เวลาทำการพายคอฟฟี่ (Pi Coffee)",
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
                  text: "เส้นทางไปพายคอฟฟี่ (Pi Coffee)",
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
                  uri: "https://www.facebook.com/picoffeecafe?locale=th_TH",
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
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/278004976_2381004152039355_4368521753862916256_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=gVnTerccpRgQ7kNvgFR_QaC&_nc_oc=AdgxHX3x7mlk0j7mJWMHtV7kbKbFM8qEtwNLek9Nt4Nv3ToWgYxAODyC6fsDePujGSg&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=AUKHkKa3-fbI9iqTvWd23Hy&oh=00_AYCgSuUh3RECZ_oz_86ZoOesEnb2mapef_XLQJQ_wwjhkQ&oe=6768D4CA",
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
                text: "มาร์คอฟฟ์ คอฟฟี่:ดิออริจิ้น (MarKoff:The Origin)",
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
                        text: "ประเภท : คาเฟ่",
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
                        text: "ขอบคุณภาพจาก : MarKoff",
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
                  label: "เวลาทำการ",
                  text: "เวลาทำการมาร์คอฟฟ์ คอฟฟี่:ดิออริจิ้น (MarKoff:The Origin)",
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
                  text: "เส้นทางไปมาร์คอฟฟ์ คอฟฟี่:ดิออริจิ้น (MarKoff:The Origin)",
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
                  uri: "https://www.facebook.com/MarKoffcoffee?locale=th_TH",
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
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/465163832_962739435871327_5831043679533871399_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rrWd57JPny4Q7kNvgENpeBb&_nc_oc=AdiiyOzrpPOXCM3jemDsnTIXpFIEdqr7EX1plohIWL6VeHBIkEdmvbnYNK98ZzB2LPQ&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=Abw_iE2HjNb_Difd8sCI463&oh=00_AYA3FPsKaHMx323vPvDDko5Ko5BI83IsRr9FFWcVZd-0Xw&oe=6769066E",
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
                text: "คาเฟ่ เดอ ปารีส (Café de Paris)",
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
                        text: "ประเภท : คาเฟ่",
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
                        text: "ขอบคุณภาพจาก : Café de Paris - คาเฟ่เดอปารีสขอนแก่น",
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
                  label: "เวลาทำการ",
                  text: "เวลาทำการคาเฟ่ เดอ ปารีส (Café de Paris)",
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
                  text: "เส้นทางไปคาเฟ่ เดอ ปารีส (Café de Paris)",
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
                  uri: "https://www.facebook.com/cafedepariskk/",
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
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.6435-9/117175560_187349366113768_5438258485741339940_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=942s9uP8y3oQ7kNvgGeIj8L&_nc_oc=AdiLBjbdE_g0FzdlmAhDw6SYXqNhHeujx9lAxMoFaGM1ujdG1EtKQiyYQzT9xtE-J1A&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=AD-oWZ-N-K-UsWdM-QvmaTQ&oh=00_AYAI-v1A-j5jDW5KGysNr_EnCBoq6upOjOPsysWifzWXnQ&oe=678AA818",
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
                text: "จ้วดคาเฟ่ (Juad Cafe)",
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
                        text: "ประเภท : คาเฟ่",
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
                        text: "ขอบคุณภาพจาก : จ้วดคาเฟ่ ขอนแก่น ",
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
                  label: "เวลาทำการ",
                  text: "เวลาทำการจ้วดคาเฟ่ (Juad Cafe)",
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
                  text: "เส้นทางไปจ้วดคาเฟ่ (Juad Cafe)",
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
                  uri: "https://www.facebook.com/Juadcafe?locale=th_TH",
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
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/462088280_3774755342792784_7014857059021005753_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=mNH6zbQMRhcQ7kNvgFFDJu8&_nc_oc=AdhbJJN9czd7xHLEEBg2GyBxE5SEziHWXqcOeTXQmFo_iCxNqKHCaRsy_eNn68zKlXI&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=AJPyVGSNud4I4haFFP_kMG8&oh=00_AYCSxZd88YoEW9j0cm4-zZC1jKwgTEdDKarDNTOuu68OPA&oe=6768E0C8",
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
                text: "เนเบอร์ คาเฟ่ (Neighbour Cafe)",
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
                        text: "ประเภท : คาเฟ่",
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
                        text: "ขอบคุณภาพจาก : Neighbour Café",
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
                  label: "เวลาทำการ",
                  text: "เวลาทำการเนเบอร์ คาเฟ่ (Neighbour Cafe)",
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
                  text: "เส้นทางไปเนเบอร์ คาเฟ่ (Neighbour Cafe)ง",
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
                  uri: "https://www.facebook.com/neighbourcafe?locale=th_TH",
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
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.6435-9/159226418_284910859921359_8109133020366266814_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=U-NUOqPdLzIQ7kNvgEJnfh9&_nc_oc=AdiZ-RZzcZfLZ5pNN6f17Uoq72Z_QSN0p311g7-Q4zwuogp5bcTADz-ZAfg6kiv7ys8&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=AfAYr53otEUe9XU7XKLDbd6&oh=00_AYBFcV03kmh-HIg5GHtt2Bcyqawhe5WI1ZKunZ3dKW8P_w&oe=678A9A40",
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
                text: "Lecithin Special Coffee",
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
                        text: "ประเภท : คาเฟ่",
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
                        text: "ขอบคุณภาพจาก : Lecithin specialty coffee",
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
                  label: "เวลาทำการ",
                  text: "เวลาทำการ Lecithin Special Coffee",
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
                  text: "เส้นทางไป Lecithin Special Coffee",
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
                  uri: "https://www.facebook.com/p/Lecithin-specialty-coffee-100057126353302/",
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
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/277672718_5704607066223375_1146800235751104021_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=KgM_W4wCK1IQ7kNvgHgeRpL&_nc_oc=AdjoERY26501BnvJc4resKVs3cC1WgXVjGjVOKi4e-GCklOQz9vDVpTsEcyMNOlhW6s&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=AWi93RDSdQce_gt9Mbks55u&oh=00_AYCKl21TEPHUeczT5Szzq8y7vJVMoYV0qlaR28LmyNOgAA&oe=6768E5CF",
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
                text: "Garden Cafe",
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
                        text: "ประเภท : คาเฟ่",
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
                        text: "ขอบคุณภาพจาก : Garden Cafe",
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
                  label: "เวลาทำการ",
                  text: "เวลาทำการ Garden Cafe",
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
                  text: "เส้นทางไป Garden Cafe",
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
                  uri: "https://www.facebook.com/garden.cafe.thailand/",
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
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/327206908_696914198597354_3200286475164039381_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=r3aPiQDtMogQ7kNvgGnsEdM&_nc_oc=Adggf1jCRKVLU-1eJNFRfaGyUsHzEb3vf_n9nuRyTxTnYcpPUlkGwMaEGWNY70Q7bqs&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=AQ4G1M2HqWLxrSV-wsw71AN&oh=00_AYAoTmyENeGXreFEW_7HHmeatns5T9n_sxq_bC_LrnPHPw&oe=6768FF5B",
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
                text: "Sri Brown Coffee Roastery",
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
                        text: "ประเภท : คาเฟ่",
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
                        text: "ขอบคุณภาพจาก : Sri Brown Coffee Roastery",
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
                  label: "เวลาทำการ",
                  text: "เวลาทำการ Sri Brown Coffee Roastery",
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
                  text: "เส้นทางไป Sri Brown Coffee Roastery",
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
                  uri: "https://www.facebook.com/Sribrowncafe?locale=th_TH",
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
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/469340814_1008368144666979_803232646906191763_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=XY_nhZVUSxYQ7kNvgGvjACN&_nc_oc=AdhpBK-pBFxyXosQxOYy4IwVwjnyWLgdRut0o1B-6rzNmpaSY1-hpxXKNJZwWG_UGOk&_nc_zt=23&_nc_ht=scontent.fkkc3-1.fna&_nc_gid=AAQNDFcImIImKdQCeA75qzX&oh=00_AYCR9Qb_mTVnT_k0ppulKovotEGePK6pURAwCx2AcoY4zg&oe=6769020F",
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
                text: "ดับเบิ้ล ยู คาเฟ่ (Double you Cafe)",
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
                        text: "ประเภท : คาเฟ่",
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
                        text: "ขอบคุณภาพจาก : Doubleyou Cafe Khonkaen",
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
                  label: "เวลาทำการ",
                  text: "เวลาทำการดับเบิ้ล ยู คาเฟ่ (Double you Cafe)",
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
                  text: "เส้นทางไปดับเบิ้ล ยู คาเฟ่ (Double you Cafe)",
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
                  uri: "https://www.facebook.com/Doubleyoucafekhonkaen?locale=th_TH",
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
  createCafeFlex,
};
