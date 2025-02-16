function createMueangFlex() {
  return {
    type: "flex",
    altText: "อำเภอเมือง",
    contents: {
      contents: [
        {
          body: {
            contents: [
              {
                type: "text",
                weight: "bold",
                size: "xl",
                color: "#000000FF",
                align: "start",
                contents: [],
                text: "พระมหาธาตุแก่นนคร",
              },
              {
                spacing: "sm",
                layout: "vertical",
                margin: "lg",
                type: "box",
                contents: [
                  {
                    layout: "baseline",
                    type: "box",
                    contents: [
                      {
                        text: "อำเภอ : เมือง",
                        color: "#5B5858FF",
                        contents: [],
                        size: "md",
                        type: "text",
                      },
                    ],
                    spacing: "sm",
                  },
                  {
                    contents: [
                      {
                        align: "start",
                        text: "ขอบคุณภาพจาก: เพจ มหัศจรรย์สกลนคร",
                        contents: [],
                        type: "text",
                        color: "#5B5858FF",
                        wrap: true,
                        size: "xs",
                      },
                    ],
                    layout: "baseline",
                    spacing: "sm",
                    type: "box",
                  },
                ],
              },
            ],
            type: "box",
            layout: "vertical",
            action: {
              type: "message",
              text: "พระมหาธาตุแก่นนคร",
              label: "พระมหาธาตุแก่นนคร",
            },
          },
          direction: "ltr",
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
                style: "secondary",
                type: "button",
                gravity: "bottom",
                height: "sm",
                action: {
                  text: "รายละเอียดพระมหาธาตุแก่นนคร",
                  type: "message",
                  label: "รายละเอียด",
                },
                color: "#FEFEFEFF",
              },
              {
                gravity: "bottom",
                color: "#FFFFFFFF",
                action: {
                  type: "message",
                  text: "เวลาเปิด-ปิดพระมหาธาตุแก่นนคร",
                  label: "เวลาเปิด-ปิด",
                },
                style: "secondary",
                height: "sm",
                type: "button",
              },
              {
                action: {
                  label: "แผนที่",
                  type: "message",
                  text: "เส้นทางไปพระมหาธาตุแก่นนคร",
                },
                color: "#FFFFFFFF",
                gravity: "bottom",
                type: "button",
                height: "sm",
                style: "secondary",
              },
              {
                gravity: "bottom",
                action: {
                  type: "message",
                  label: "ค่าเข้าชม",
                  text: "ค่าเข้าพระมหาธาตุแก่นนคร",
                },
                type: "button",
                color: "#FFFFFFFF",
                style: "secondary",
                height: "sm",
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
            layout: "vertical",
          },
          hero: {
            action: {
              type: "uri",
              uri: "https://linecorp.com/",
              label: "Line",
            },
            aspectRatio: "20:13",
            type: "image",
            aspectMode: "cover",
            size: "full",
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.6435-9/61424999_2199506873451591_2362166063577169920_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=mxj3yb3SagcQ7kNvgHGtqiW&_nc_ht=scontent.fkkc3-1.fna&oh=00_AYBcXXGve8hP4yuSAf7l1UcC1Y-Df6k2r1nKrH8xMAMnKA&oe=66D0C1D0",
          },
          type: "bubble",
        },
        {
          type: "bubble",
          hero: {
            action: {
              label: "Line",
              uri: "https://linecorp.com/",
              type: "uri",
            },
            aspectMode: "cover",
            url: "https://www.museumthailand.com/upload/evidence/1498641221_54801.jpg",
            type: "image",
            size: "full",
            aspectRatio: "20:13",
          },
          footer: {
            layout: "vertical",
            contents: [
              {
                color: "#696969FF",
                margin: "xl",
                type: "separator",
              },
              {
                style: "secondary",
                type: "button",
                color: "#FEFEFEFF",
                action: {
                  type: "message",
                  text: "รายละเอียดศาลหลักเมือง",
                  label: "รายละเอียด",
                },
                height: "sm",
                gravity: "bottom",
              },
              {
                color: "#FFFFFFFF",
                type: "button",
                style: "secondary",
                height: "sm",
                gravity: "bottom",
                action: {
                  label: "เวลาเปิด-ปิด",
                  text: "เวลาเปิด-ปิดศาลหลักเมือง",
                  type: "message",
                },
              },
              {
                color: "#FFFFFFFF",
                action: {
                  type: "message",
                  label: "แผนที่",
                  text: "เส้นทางไปศาลหลักเมือง",
                },
                gravity: "bottom",
                height: "sm",
                type: "button",
                style: "secondary",
              },
              {
                style: "secondary",
                height: "sm",
                type: "button",
                gravity: "bottom",
                color: "#FFFFFFFF",
                action: {
                  type: "message",
                  text: "ค่าเข้าศาลหลักเมือง",
                  label: "ค่าเข้าชม",
                },
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
            type: "box",
            spacing: "sm",
          },
          body: {
            action: {
              label: "ศาลหลักเมือง",
              type: "message",
              text: "ศาลหลักเมือง",
            },
            layout: "vertical",
            type: "box",
            contents: [
              {
                type: "text",
                contents: [],
                weight: "bold",
                text: "ศาลหลักเมือง",
                color: "#000000FF",
                size: "xl",
                align: "start",
              },
              {
                margin: "lg",
                contents: [
                  {
                    type: "box",
                    spacing: "sm",
                    contents: [
                      {
                        color: "#5B5858FF",
                        contents: [],
                        size: "md",
                        type: "text",
                        text: "อำเภอ : เมือง",
                      },
                    ],
                    layout: "baseline",
                  },
                  {
                    layout: "baseline",
                    type: "box",
                    spacing: "sm",
                    contents: [
                      {
                        contents: [],
                        color: "#5B5858FF",
                        wrap: true,
                        text: "ขอบคุณภาพจาก: museumthailand",
                        type: "text",
                        align: "start",
                        size: "xs",
                      },
                    ],
                  },
                ],
                layout: "vertical",
                type: "box",
                spacing: "sm",
              },
            ],
          },
          direction: "ltr",
        },
        {
          footer: {
            spacing: "sm",
            type: "box",
            contents: [
              {
                margin: "xl",
                color: "#696969FF",
                type: "separator",
              },
              {
                gravity: "bottom",
                color: "#FEFEFEFF",
                type: "button",
                height: "sm",
                style: "secondary",
                action: {
                  type: "message",
                  label: "รายละเอียด",
                  text: "รายละเอียดวัดทุ่งเศรษฐี",
                },
              },
              {
                height: "sm",
                gravity: "bottom",
                color: "#FFFFFFFF",
                type: "button",
                style: "secondary",
                action: {
                  type: "message",
                  label: "เวลาเปิด-ปิด",
                  text: "เวลาเปิด-ปิดวัดทุ่งเศรษฐี",
                },
              },
              {
                gravity: "bottom",
                height: "sm",
                color: "#FFFFFFFF",
                action: {
                  text: "เส้นทางไปวัดทุ่งเศรษฐี",
                  label: "แผนที่",
                  type: "message",
                },
                style: "secondary",
                type: "button",
              },
              {
                gravity: "bottom",
                action: {
                  label: "ค่าเข้าชม",
                  text: "ค่าเข้าวัดทุ่งเศรษฐี",
                  type: "message",
                },
                style: "secondary",
                height: "sm",
                type: "button",
                color: "#FFFFFFFF",
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
            layout: "vertical",
          },
          body: {
            contents: [
              {
                text: "วัดทุ่งเศรษฐี",
                align: "start",
                type: "text",
                size: "xl",
                color: "#000000FF",
                contents: [],
                weight: "bold",
              },
              {
                spacing: "sm",
                layout: "vertical",
                type: "box",
                contents: [
                  {
                    contents: [
                      {
                        text: "อำเภอ : เมือง",
                        contents: [],
                        color: "#5B5858FF",
                        size: "md",
                        type: "text",
                      },
                    ],
                    layout: "baseline",
                    spacing: "sm",
                    type: "box",
                  },
                  {
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        text: "ขอบคุณภาพจาก: thailandtourismdirectory",
                        contents: [],
                        wrap: true,
                        size: "xs",
                        color: "#5B5858FF",
                        type: "text",
                        align: "start",
                      },
                    ],
                    type: "box",
                  },
                ],
                margin: "lg",
              },
            ],
            layout: "vertical",
            type: "box",
            action: {
              type: "message",
              label: "วัดทุ่งเศรษฐี",
              text: "วัดทุ่งเศรษฐี",
            },
          },
          direction: "ltr",
          hero: {
            type: "image",
            aspectRatio: "20:13",
            url: "https://files.thailandtourismdirectory.go.th/assets/upload/2018/01/15/201801159d30b01afa014de703891cc6eaf40e2e154734.jpg",
            action: {
              label: "Line",
              type: "uri",
              uri: "https://linecorp.com/",
            },
            size: "full",
            aspectMode: "cover",
          },
          type: "bubble",
        },
        {
          direction: "ltr",
          hero: {
            type: "image",
            action: {
              label: "Line",
              uri: "https://linecorp.com/",
              type: "uri",
            },
            aspectMode: "cover",
            size: "full",
            url: "https://th.readme.me/f/17169/5b126dff8c213d49ed3fb6ca.jpg",
            aspectRatio: "20:13",
          },
          body: {
            action: {
              type: "message",
              label: "วัดถ้ำผาเกิ้ง",
              text: "วัดถ้ำผาเกิ้ง",
            },
            contents: [
              {
                align: "start",
                text: "วัดถ้ำผาเกิ้ง",
                size: "xl",
                weight: "bold",
                type: "text",
                color: "#000000FF",
                contents: [],
              },
              {
                layout: "vertical",
                contents: [
                  {
                    layout: "baseline",
                    contents: [
                      {
                        contents: [],
                        color: "#5B5858FF",
                        type: "text",
                        text: "อำเภอ : เมือง",
                        size: "md",
                      },
                    ],
                    type: "box",
                    spacing: "sm",
                  },
                  {
                    contents: [
                      {
                        type: "text",
                        text: "ขอบคุณภาพจาก: Readme.me",
                        contents: [],
                        wrap: true,
                        align: "start",
                        size: "xs",
                        color: "#5B5858FF",
                      },
                    ],
                    type: "box",
                    layout: "baseline",
                    spacing: "sm",
                  },
                ],
                spacing: "sm",
                type: "box",
                margin: "lg",
              },
            ],
            layout: "vertical",
            type: "box",
          },
          type: "bubble",
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                color: "#696969FF",
                type: "separator",
                margin: "xl",
              },
              {
                gravity: "bottom",
                color: "#FEFEFEFF",
                height: "sm",
                type: "button",
                action: {
                  label: "รายละเอียด",
                  text: "รายละเอียดวัดถ้ำผาเกิ้ง",
                  type: "message",
                },
                style: "secondary",
              },
              {
                gravity: "bottom",
                height: "sm",
                type: "button",
                color: "#FFFFFFFF",
                style: "secondary",
                action: {
                  type: "message",
                  label: "เวลาเปิด-ปิด",
                  text: "เวลาเปิด-ปิดวัดถ้ำผาเกิ้ง",
                },
              },
              {
                height: "sm",
                type: "button",
                color: "#FFFFFFFF",
                gravity: "bottom",
                style: "secondary",
                action: {
                  text: "เส้นทางไปวัดถ้ำผาเกิ้ง",
                  type: "message",
                  label: "แผนที่",
                },
              },
              {
                gravity: "bottom",
                height: "sm",
                action: {
                  type: "message",
                  label: "ค่าเข้าชม",
                  text: "ค่าเข้าวัดถ้ำผาเกิ้ง",
                },
                type: "button",
                color: "#FFFFFFFF",
                style: "secondary",
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
          },
        },
        {
          type: "bubble",
          hero: {
            action: {
              uri: "https://linecorp.com/",
              type: "uri",
              label: "Line",
            },
            aspectMode: "cover",
            aspectRatio: "20:13",
            size: "full",
            url: "https://t1.blockdit.com/photos/2023/03/64011c16263d5fed77a3e489_800x0xcover_5aVItd5A.jpg",
            type: "image",
          },
          body: {
            contents: [
              {
                type: "text",
                align: "start",
                size: "xl",
                text: "วัดป่าแสงอรุณ",
                color: "#000000FF",
                contents: [],
                weight: "bold",
              },
              {
                layout: "vertical",
                type: "box",
                margin: "lg",
                contents: [
                  {
                    spacing: "sm",
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        color: "#5B5858FF",
                        text: "อำเภอ : เมือง",
                        type: "text",
                        contents: [],
                        size: "md",
                      },
                    ],
                  },
                  {
                    contents: [
                      {
                        size: "xs",
                        contents: [],
                        color: "#5B5858FF",
                        wrap: true,
                        type: "text",
                        text: "ขอบคุณภาพจาก: ชีวิตนี้ต้องมี 1000 วัด",
                        align: "start",
                      },
                    ],
                    spacing: "sm",
                    layout: "baseline",
                    type: "box",
                  },
                ],
                spacing: "sm",
              },
            ],
            action: {
              text: "วัดป่าแสงอรุณ",
              label: "วัดป่าแสงอรุณ",
              type: "message",
            },
            layout: "vertical",
            type: "box",
          },
          direction: "ltr",
          footer: {
            contents: [
              {
                margin: "xl",
                type: "separator",
                color: "#696969FF",
              },
              {
                color: "#FEFEFEFF",
                gravity: "bottom",
                type: "button",
                style: "secondary",
                height: "sm",
                action: {
                  label: "รายละเอียด",
                  text: "รายละเอียดวัดป่าแสงอรุณ",
                  type: "message",
                },
              },
              {
                type: "button",
                action: {
                  label: "เวลาเปิด-ปิด",
                  type: "message",
                  text: "เวลาเปิด-ปิดวัดป่าแสงอรุณ",
                },
                gravity: "bottom",
                height: "sm",
                color: "#FFFFFFFF",
                style: "secondary",
              },
              {
                style: "secondary",
                type: "button",
                height: "sm",
                gravity: "bottom",
                color: "#FFFFFFFF",
                action: {
                  text: "เส้นทางไปวัดป่าแสงอรุณ",
                  label: "แผนที่",
                  type: "message",
                },
              },
              {
                style: "secondary",
                gravity: "bottom",
                color: "#FFFFFFFF",
                action: {
                  type: "message",
                  text: "ค่าเข้าวัดป่าแสงอรุณ",
                  label: "ค่าเข้าชม",
                },
                type: "button",
                height: "sm",
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
            spacing: "sm",
            layout: "vertical",
            type: "box",
          },
        },
        {
          hero: {
            aspectMode: "cover",
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.6435-9/43753374_1740409939419091_8747012141699039232_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Iz0KbpjHsjEQ7kNvgE6ug8X&_nc_ht=scontent.fkkc3-1.fna&gid=Aq0yIOhEDZxOtfi7DtEymhE&oh=00_AYC_3SLCCQfDgwD5lg6Pr3dxTZKCWYipbVHbfRoh-JoNWQ&oe=66D180EB",
            size: "full",
            action: {
              type: "uri",
              label: "Line",
              uri: "https://linecorp.com/",
            },
            aspectRatio: "20:13",
            type: "image",
          },
          type: "bubble",
          body: {
            action: {
              text: "เทวาลัยศิวะมหาเทพ",
              label: "เทวาลัยศิวะมหาเทพ",
              type: "message",
            },
            contents: [
              {
                weight: "bold",
                text: "เทวาลัยศิวะมหาเทพ",
                contents: [],
                size: "xl",
                type: "text",
                align: "start",
                color: "#000000FF",
              },
              {
                spacing: "sm",
                margin: "lg",
                layout: "vertical",
                contents: [
                  {
                    layout: "baseline",
                    type: "box",
                    contents: [
                      {
                        type: "text",
                        contents: [],
                        color: "#5B5858FF",
                        text: "อำเภอ : เมือง",
                        size: "md",
                      },
                    ],
                    spacing: "sm",
                  },
                  {
                    type: "box",
                    contents: [
                      {
                        type: "text",
                        text: "ขอบคุณภาพจาก: เพจ เทวาลัยศิวะมหาเทพ ขอนแก่น",
                        align: "start",
                        size: "xs",
                        wrap: true,
                        color: "#5B5858FF",
                        contents: [],
                      },
                    ],
                    layout: "baseline",
                    spacing: "sm",
                  },
                ],
                type: "box",
              },
            ],
            layout: "vertical",
            type: "box",
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
                type: "button",
                height: "sm",
                action: {
                  type: "message",
                  text: "รายละเอียดเทวาลัยศิวะมหาเทพ",
                  label: "รายละเอียด",
                },
                style: "secondary",
                color: "#FEFEFEFF",
              },
              {
                style: "secondary",
                action: {
                  type: "message",
                  text: "เวลาเปิด-ปิดเทวาลัยศิวะมหาเทพ",
                  label: "เวลาเปิด-ปิด",
                },
                color: "#FFFFFFFF",
                type: "button",
                gravity: "bottom",
                height: "sm",
              },
              {
                gravity: "bottom",
                action: {
                  type: "message",
                  text: "เส้นทางไปเทวาลัยศิวะมหาเทพ",
                  label: "แผนที่",
                },
                type: "button",
                color: "#FFFFFFFF",
                height: "sm",
                style: "secondary",
              },
              {
                color: "#FFFFFFFF",
                style: "secondary",
                gravity: "bottom",
                height: "sm",
                action: {
                  type: "message",
                  label: "ค่าเข้าชม",
                  text: "ค่าเข้าเทวาลัยศิวะมหาเทพ",
                },
                type: "button",
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
            layout: "vertical",
            type: "box",
          },
          direction: "ltr",
        },
        {
          hero: {
            action: {
              label: "Line",
              type: "uri",
              uri: "https://linecorp.com/",
            },
            type: "image",
            aspectMode: "cover",
            aspectRatio: "20:13",
            size: "full",
            url: "https://old.khonkaenlink.info/home/upload/photo/news/gkg6jnCr.jpg",
          },
          body: {
            type: "box",
            contents: [
              {
                align: "start",
                type: "text",
                color: "#000000FF",
                text: "บึงแก่นนคร",
                contents: [],
                weight: "bold",
                size: "xl",
              },
              {
                margin: "lg",
                spacing: "sm",
                layout: "vertical",
                type: "box",
                contents: [
                  {
                    layout: "baseline",
                    contents: [
                      {
                        color: "#5B5858FF",
                        type: "text",
                        text: "อำเภอ : เมือง",
                        size: "md",
                        contents: [],
                      },
                    ],
                    type: "box",
                    spacing: "sm",
                  },
                  {
                    contents: [
                      {
                        size: "xs",
                        color: "#5B5858FF",
                        align: "start",
                        type: "text",
                        text: "ขอบคุณภาพจาก: khonkaenlink",
                        contents: [],
                        wrap: true,
                      },
                    ],
                    layout: "baseline",
                    type: "box",
                    spacing: "sm",
                  },
                ],
              },
            ],
            action: {
              text: "บึงแก่นนคร",
              label: "บึงแก่นนคร",
              type: "message",
            },
            layout: "vertical",
          },
          direction: "ltr",
          footer: {
            contents: [
              {
                color: "#696969FF",
                margin: "xl",
                type: "separator",
              },
              {
                gravity: "bottom",
                action: {
                  label: "รายละเอียด",
                  type: "message",
                  text: "รายละเอียดบึงแก่นนคร",
                },
                height: "sm",
                type: "button",
                color: "#FEFEFEFF",
                style: "secondary",
              },
              {
                action: {
                  label: "เวลาเปิด-ปิด",
                  text: "เวลาเปิด-ปิดบึงแก่นนคร",
                  type: "message",
                },
                style: "secondary",
                color: "#FFFFFFFF",
                type: "button",
                height: "sm",
                gravity: "bottom",
              },
              {
                style: "secondary",
                height: "sm",
                color: "#FFFFFFFF",
                action: {
                  text: "เส้นทางไปบึงแก่นนคร",
                  label: "แผนที่",
                  type: "message",
                },
                gravity: "bottom",
                type: "button",
              },
              {
                color: "#FFFFFFFF",
                type: "button",
                action: {
                  text: "ค่าเข้าบึงแก่นนคร",
                  label: "ค่าเข้าชม",
                  type: "message",
                },
                style: "secondary",
                height: "sm",
                gravity: "bottom",
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
            spacing: "sm",
            layout: "vertical",
            type: "box",
          },
          type: "bubble",
        },
        {
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
                style: "secondary",
                type: "button",
                height: "sm",
                gravity: "bottom",
                action: {
                  label: "รายละเอียด",
                  type: "message",
                  text: "รายละเอียดบึงทุ่งสร้าง",
                },
                color: "#FEFEFEFF",
              },
              {
                color: "#FFFFFFFF",
                action: {
                  text: "เวลาเปิด-ปิดบึงทุ่งสร้าง",
                  type: "message",
                  label: "เวลาเปิด-ปิด",
                },
                height: "sm",
                style: "secondary",
                gravity: "bottom",
                type: "button",
              },
              {
                style: "secondary",
                gravity: "bottom",
                height: "sm",
                color: "#FFFFFFFF",
                action: {
                  label: "แผนที่",
                  text: "เส้นทางไปบึงทุ่งสร้าง",
                  type: "message",
                },
                type: "button",
              },
              {
                style: "secondary",
                color: "#FFFFFFFF",
                type: "button",
                action: {
                  label: "ค่าเข้าชม",
                  type: "message",
                  text: "ค่าเข้าบึงทุ่งสร้าง",
                },
                height: "sm",
                gravity: "bottom",
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
          },
          type: "bubble",
          body: {
            contents: [
              {
                size: "xl",
                type: "text",
                contents: [],
                weight: "bold",
                color: "#000000FF",
                text: "บึงทุ่งสร้าง",
                align: "start",
              },
              {
                type: "box",
                margin: "lg",
                layout: "vertical",
                spacing: "sm",
                contents: [
                  {
                    layout: "baseline",
                    spacing: "sm",
                    type: "box",
                    contents: [
                      {
                        color: "#5B5858FF",
                        contents: [],
                        size: "md",
                        type: "text",
                        text: "อำเภอ : เมือง",
                      },
                    ],
                  },
                  {
                    layout: "baseline",
                    contents: [
                      {
                        align: "start",
                        type: "text",
                        contents: [],
                        size: "xs",
                        text: "ขอบคุณภาพจาก: เพจ Khon Kaen City ขอนแก่นซิตี้",
                        wrap: true,
                        color: "#5B5858FF",
                      },
                    ],
                    type: "box",
                    spacing: "sm",
                  },
                ],
              },
            ],
            layout: "vertical",
            type: "box",
            action: {
              text: "บึงทุ่งสร้าง",
              label: "บึงทุ่งสร้าง",
              type: "message",
            },
          },
          hero: {
            aspectMode: "cover",
            action: {
              uri: "https://linecorp.com/",
              label: "Line",
              type: "uri",
            },
            url: "https://f.ptcdn.info/147/077/000/rb8djdh74IdYPXM5sh3-o.jpg",
            aspectRatio: "20:13",
            size: "full",
            type: "image",
          },
          direction: "ltr",
        },
      ],
      type: "carousel",
    },
  };
}

module.exports = {
  createMueangFlex,
};
