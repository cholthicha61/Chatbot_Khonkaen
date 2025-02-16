function createWiangKaoFlex() {
  return {
    altText: "อำเภอเวียงเก่า",
    type: "flex",
    contents: {
      contents: [
        {
          footer: {
            layout: "vertical",
            contents: [
              {
                color: "#696969FF",
                type: "separator",
                margin: "xl",
              },
              {
                gravity: "bottom",
                height: "sm",
                action: {
                  text: "รายละเอียดอุทยานแห่งชาติภูเวียง",
                  type: "message",
                  label: "รายละเอียด",
                },
                color: "#FEFEFEFF",
                style: "secondary",
                type: "button",
              },
              {
                style: "secondary",
                gravity: "bottom",
                color: "#FFFFFFFF",
                height: "sm",
                type: "button",
                action: {
                  text: "เวลาเปิด-ปิดอุทยานแห่งชาติภูเวียง",
                  type: "message",
                  label: "เวลาเปิด-ปิด",
                },
              },
              {
                type: "button",
                style: "secondary",
                gravity: "bottom",
                color: "#FFFFFFFF",
                action: {
                  text: "เส้นทางไปอุทยานแห่งชาติภูเวียง",
                  label: "แผนที่",
                  type: "message",
                },
                height: "sm",
              },
              {
                height: "sm",
                style: "secondary",
                gravity: "bottom",
                type: "button",
                color: "#FFFFFFFF",
                action: {
                  type: "message",
                  text: "ค่าเข้าอุทยานแห่งชาติภูเวียง",
                  label: "ค่าเข้าชม",
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
          direction: "ltr",
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                contents: [],
                text: "อุทยานแห่งชาติภูเวียง",
                weight: "bold",
                align: "start",
                size: "xl",
                type: "text",
                color: "#000000FF",
              },
              {
                contents: [
                  {
                    layout: "baseline",
                    type: "box",
                    contents: [
                      {
                        contents: [],
                        size: "md",
                        text: "อำเภอ : เวียงเก่า",
                        color: "#5B5858FF",
                        type: "text",
                      },
                    ],
                    spacing: "sm",
                  },
                  {
                    spacing: "sm",
                    contents: [
                      {
                        align: "start",
                        color: "#5B5858FF",
                        type: "text",
                        contents: [],
                        size: "xs",
                        text: "ขอบคุณภาพจาก: CBT Thailand ",
                        wrap: true,
                      },
                    ],
                    layout: "baseline",
                    type: "box",
                  },
                ],
                margin: "lg",
                type: "box",
                spacing: "sm",
                layout: "vertical",
              },
            ],
            action: {
              type: "message",
              text: "อุทยานแห่งชาติภูเวียง",
              label: "อุทยานแห่งชาติภูเวียง",
            },
          },
          type: "bubble",
          hero: {
            type: "image",
            url: "https://cbtthailand.dasta.or.th/upload-file-api/Resources/RelateAttraction/Images/RAT400041/2.jpeg",
            aspectMode: "cover",
            size: "full",
            action: {
              label: "Line",
              uri: "https://linecorp.com/",
              type: "uri",
            },
            aspectRatio: "20:13",
          },
        },
        {
          type: "bubble",
          direction: "ltr",
          hero: {
            size: "full",
            aspectRatio: "20:13",
            type: "image",
            action: {
              label: "Line",
              type: "uri",
              uri: "https://linecorp.com/",
            },
            aspectMode: "cover",
            url: "https://mpics.mgronline.com/pics/Images/563000010199301.JPEG",
          },
          body: {
            layout: "vertical",
            contents: [
              {
                contents: [],
                text: "ผาชมตะวัน",
                type: "text",
                color: "#000000FF",
                align: "start",
                size: "xl",
                weight: "bold",
              },
              {
                type: "box",
                spacing: "sm",
                contents: [
                  {
                    contents: [
                      {
                        text: "อำเภอ : เวียงเก่า",
                        contents: [],
                        size: "md",
                        type: "text",
                        color: "#5B5858FF",
                      },
                    ],
                    layout: "baseline",
                    spacing: "sm",
                    type: "box",
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        color: "#5B5858FF",
                        wrap: true,
                        size: "xs",
                        contents: [],
                        align: "start",
                        text: "ขอบคุณภาพจาก: เพจ อุทยานแห่งชาติภูเวียง - Phu Wiang National Park",
                        type: "text",
                      },
                    ],
                  },
                ],
                layout: "vertical",
                margin: "lg",
              },
            ],
            action: {
              label: "ผาชมตะวัน",
              type: "message",
              text: "ผาชมตะวัน",
            },
            type: "box",
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
                style: "secondary",
                type: "button",
                gravity: "bottom",
                action: {
                  text: "รายละเอียดผาชมตะวัน",
                  type: "message",
                  label: "รายละเอียด",
                },
                height: "sm",
                color: "#FEFEFEFF",
              },
              {
                height: "sm",
                style: "secondary",
                color: "#FFFFFFFF",
                gravity: "bottom",
                action: {
                  label: "เวลาเปิด-ปิด",
                  type: "message",
                  text: "เวลาเปิด-ปิดผาชมตะวัน",
                },
                type: "button",
              },
              {
                style: "secondary",
                type: "button",
                color: "#FFFFFFFF",
                height: "sm",
                gravity: "bottom",
                action: {
                  label: "แผนที่",
                  type: "message",
                  text: "เส้นทางไปผาชมตะวัน",
                },
              },
              {
                action: {
                  type: "message",
                  text: "ค่าเข้าผาชมตะวัน",
                  label: "ค่าเข้าชม",
                },
                height: "sm",
                style: "secondary",
                color: "#FFFFFFFF",
                type: "button",
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
        {
          direction: "ltr",
          footer: {
            type: "box",
            contents: [
              {
                type: "separator",
                margin: "xl",
                color: "#696969FF",
              },
              {
                gravity: "bottom",
                style: "secondary",
                action: {
                  label: "รายละเอียด",
                  text: "รายละเอียดน้ำตกตาดฟ้า",
                  type: "message",
                },
                height: "sm",
                color: "#FEFEFEFF",
                type: "button",
              },
              {
                gravity: "bottom",
                height: "sm",
                color: "#FFFFFFFF",
                type: "button",
                action: {
                  type: "message",
                  text: "เวลาเปิด-ปิดน้ำตกตาดฟ้า",
                  label: "เวลาเปิด-ปิด",
                },
                style: "secondary",
              },
              {
                height: "sm",
                style: "secondary",
                action: {
                  text: "เส้นทางไปน้ำตกตาดฟ้า",
                  type: "message",
                  label: "แผนที่",
                },
                type: "button",
                gravity: "bottom",
                color: "#FFFFFFFF",
              },
              {
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  label: "ค่าเข้าชม",
                  text: "ค่าเข้าน้ำตกตาดฟ้า",
                  type: "message",
                },
                type: "button",
                style: "secondary",
                gravity: "bottom",
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
            layout: "vertical",
            spacing: "sm",
          },
          body: {
            action: {
              type: "message",
              text: "น้ำตกตาดฟ้า",
              label: "น้ำตกตาดฟ้า",
            },
            contents: [
              {
                size: "xl",
                color: "#000000FF",
                contents: [],
                text: "น้ำตกตาดฟ้า",
                align: "start",
                type: "text",
                weight: "bold",
              },
              {
                margin: "lg",
                type: "box",
                contents: [
                  {
                    spacing: "sm",
                    contents: [
                      {
                        text: "อำเภอ : เวียงเก่า",
                        color: "#5B5858FF",
                        type: "text",
                        contents: [],
                        size: "md",
                      },
                    ],
                    type: "box",
                    layout: "baseline",
                  },
                  {
                    spacing: "sm",
                    contents: [
                      {
                        wrap: true,
                        contents: [],
                        align: "start",
                        color: "#5B5858FF",
                        text: "ขอบคุณภาพจาก: เพจ กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช ",
                        type: "text",
                        size: "xs",
                      },
                    ],
                    layout: "baseline",
                    type: "box",
                  },
                ],
                layout: "vertical",
                spacing: "sm",
              },
            ],
            type: "box",
            layout: "vertical",
          },
          type: "bubble",
          hero: {
            type: "image",
            aspectMode: "cover",
            size: "full",
            action: {
              label: "Line",
              type: "uri",
              uri: "https://linecorp.com/",
            },
            aspectRatio: "20:13",
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t31.18172-8/21167912_1849933695321530_6211588566787677931_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=WL2YxKdK3F0Q7kNvgHHxhcL&_nc_ht=scontent.fkkc3-1.fna&oh=00_AYCYfhT4mW22GxzBzjAjNsaAGN6bVO1I7I4t4GusBm8eHw&oe=66C9EC6A",
          },
        },
      ],
      type: "carousel",
    },
  };
}

module.exports = {
  createWiangKaoFlex,
};
