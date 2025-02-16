function createUbolratanaFlex() {
  return {
    altText: "อำเภออุบลรัตน์",
    contents: {
      type: "carousel",
      contents: [
        {
          hero: {
            type: "image",
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.6435-9/67835403_2759464787421614_2493009776938582016_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=0B4cc7-fgV0Q7kNvgHw74r-&_nc_ht=scontent.fkkc3-1.fna&oh=00_AYA05idWRbap2ffctxSQqHR3vHUr8QRSImXEVlp8W_tIiQ&oe=66D05E2F",
            aspectMode: "cover",
            action: {
              type: "uri",
              uri: "https://linecorp.com/",
              label: "Line",
            },
            aspectRatio: "20:13",
            size: "full",
          },
          type: "bubble",
          body: {
            action: {
              text: "บางแสน 2",
              label: "บางแสน 2",
              type: "message",
            },
            contents: [
              {
                align: "start",
                text: "บางแสน 2",
                contents: [],
                weight: "bold",
                size: "xl",
                color: "#000000FF",
                type: "text",
              },
              {
                margin: "lg",
                spacing: "sm",
                layout: "vertical",
                type: "box",
                contents: [
                  {
                    spacing: "sm",
                    layout: "baseline",
                    contents: [
                      {
                        size: "md",
                        type: "text",
                        color: "#5B5858FF",
                        text: "ประเภท : ภูเขา",
                        contents: [],
                      },
                    ],
                    type: "box",
                  },
                  {
                    type: "box",
                    contents: [
                      {
                        size: "xs",
                        contents: [],
                        color: "#5B5858FF",
                        wrap: true,
                        align: "start",
                        type: "text",
                        text: "ขอบคุณภาพจาก: เพจ Khon Kaen City : ขอนแก่นซิตี้ ",
                      },
                    ],
                    spacing: "sm",
                    layout: "baseline",
                  },
                ],
              },
            ],
            layout: "vertical",
            type: "box",
          },
          footer: {
            contents: [
              {
                margin: "xl",
                color: "#696969FF",
                type: "separator",
              },
              {
                height: "sm",
                action: {
                  type: "message",
                  text: "รายละเอียดบางแสน 2",
                  label: "รายละเอียด",
                },
                gravity: "bottom",
                type: "button",
                style: "secondary",
                color: "#FEFEFEFF",
              },
              {
                action: {
                  text: "เวลาเปิด-ปิดบางแสน 2",
                  label: "เวลาเปิด-ปิด",
                  type: "message",
                },
                height: "sm",
                style: "secondary",
                type: "button",
                gravity: "bottom",
                color: "#FFFFFFFF",
              },
              {
                type: "button",
                color: "#FFFFFFFF",
                gravity: "bottom",
                style: "secondary",
                height: "sm",
                action: {
                  label: "แผนที่",
                  text: "เส้นทางไปบางแสน 2",
                  type: "message",
                },
              },
              {
                gravity: "bottom",
                color: "#FFFFFFFF",
                type: "button",
                height: "sm",
                style: "secondary",
                action: {
                  label: "ค่าเข้าชม",
                  text: "ค่าเข้าบางแสน 2",
                  type: "message",
                },
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
          direction: "ltr",
        },
        {
          direction: "ltr",
          type: "bubble",
          hero: {
            action: {
              type: "uri",
              uri: "https://linecorp.com/",
              label: "Line",
            },
            url: "https://cms.dmpcdn.com/travel/2020/11/17/33efc790-28a1-11eb-a028-275648f720c6_original.jpg",
            type: "image",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
          },
          body: {
            type: "box",
            action: {
              type: "message",
              label: "เขื่อนอุบลรัตน์",
              text: "เขื่อนอุบลรัตน์",
            },
            contents: [
              {
                weight: "bold",
                size: "xl",
                color: "#000000FF",
                align: "start",
                contents: [],
                type: "text",
                text: "เขื่อนอุบลรัตน์",
              },
              {
                margin: "lg",
                contents: [
                  {
                    type: "box",
                    contents: [
                      {
                        size: "md",
                        contents: [],
                        text: "อำเภอ : อุบลรัตน์",
                        type: "text",
                        color: "#5B5858FF",
                      },
                    ],
                    layout: "baseline",
                    spacing: "sm",
                  },
                  {
                    contents: [
                      {
                        wrap: true,
                        type: "text",
                        size: "xs",
                        contents: [],
                        color: "#5B5858FF",
                        align: "start",
                        text: "ขอบคุณภาพจาก: kwanchai/Shutterstock.com",
                      },
                    ],
                    layout: "baseline",
                    type: "box",
                    spacing: "sm",
                  },
                ],
                type: "box",
                spacing: "sm",
                layout: "vertical",
              },
            ],
            layout: "vertical",
          },
          footer: {
            contents: [
              {
                margin: "xl",
                type: "separator",
                color: "#696969FF",
              },
              {
                color: "#FEFEFEFF",
                height: "sm",
                gravity: "bottom",
                type: "button",
                action: {
                  text: "รายละเอียดเขื่อนอุบลรัตน์",
                  label: "รายละเอียด",
                  type: "message",
                },
                style: "secondary",
              },
              {
                gravity: "bottom",
                type: "button",
                action: {
                  label: "เวลาเปิด-ปิด",
                  text: "เวลาเปิด-ปิดเขื่อนอุบลรัตน์",
                  type: "message",
                },
                style: "secondary",
                height: "sm",
                color: "#FFFFFFFF",
              },
              {
                type: "button",
                height: "sm",
                gravity: "bottom",
                action: {
                  type: "message",
                  label: "แผนที่",
                  text: "เส้นทางไปเขื่อนอุบลรัตน์",
                },
                style: "secondary",
                color: "#FFFFFFFF",
              },
              {
                color: "#FFFFFFFF",
                action: {
                  label: "ค่าเข้าชม",
                  text: "ค่าเข้าเขื่อนอุบลรัตน์",
                  type: "message",
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
            type: "box",
            spacing: "sm",
            layout: "vertical",
          },
        },
      ],
    },
    type: "flex",
  };
}

module.exports = {
  createUbolratanaFlex,
};
