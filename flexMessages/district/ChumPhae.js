function createChumPhaeFlex() {
  return {
    type: "flex",
    altText: "อำเภอชุมแพ",
    contents: {
        type: "carousel",
      contents: [
        {
          body: {
            layout: "vertical",
            type: "box",
            action: {
              type: "message",
              label: "อุทยานแห่งชาติภูผาม่าน",
              text: "อุทยานแห่งชาติภูผาม่าน",
            },
            contents: [
              {
                size: "xl",
                align: "start",
                weight: "bold",
                contents: [],
                type: "text",
                text: "อุทยานแห่งชาติภูผาม่าน",
                color: "#000000FF",
              },
              {
                spacing: "sm",
                layout: "vertical",
                type: "box",
                contents: [
                  {
                    layout: "baseline",
                    type: "box",
                    contents: [
                      {
                        size: "md",
                        color: "#5B5858FF",
                        type: "text",
                        text: "อำเภอ : ชุมแพ",
                        contents: [],
                      },
                    ],
                    spacing: "sm",
                  },
                  {
                    type: "box",
                    contents: [
                      {
                        text: "ขอบคุณภาพจาก: เพจ สถานีขอนแก่น : รีวิวคาเฟ่ อาหาร สถานที่ท่องเที่ยว",
                        align: "start",
                        type: "text",
                        contents: [],
                        size: "xs",
                        color: "#5B5858FF",
                        wrap: true,
                      },
                    ],
                    spacing: "sm",
                    layout: "baseline",
                  },
                ],
                margin: "lg",
              },
            ],
          },
          type: "bubble",
          footer: {
            type: "box",
            contents: [
              {
                margin: "xl",
                color: "#696969FF",
                type: "separator",
              },
              {
                action: {
                  text: "รายละเอียดอุทยานแห่งชาติภูผาม่าน",
                  type: "message",
                  label: "รายละเอียด",
                },
                style: "secondary",
                type: "button",
                gravity: "bottom",
                color: "#FEFEFEFF",
                height: "sm",
              },
              {
                color: "#FFFFFFFF",
                gravity: "bottom",
                action: {
                  type: "message",
                  label: "เวลาเปิด-ปิด",
                  text: "เวลาเปิด-ปิดอุทยานแห่งชาติภูผาม่าน",
                },
                height: "sm",
                type: "button",
                style: "secondary",
              },
              {
                color: "#FFFFFFFF",
                style: "secondary",
                gravity: "bottom",
                action: {
                  type: "message",
                  label: "แผนที่",
                  text: "เส้นทางไปอุทยานแห่งชาติภูผาม่าน",
                },
                type: "button",
                height: "sm",
              },
              {
                action: {
                  type: "message",
                  text: "ค่าเข้าอุทยานแห่งชาติภูผาม่าน",
                  label: "ค่าเข้าชม",
                },
                color: "#FFFFFFFF",
                type: "button",
                height: "sm",
                gravity: "bottom",
                style: "secondary",
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
            spacing: "sm",
            layout: "vertical",
          },
          direction: "ltr",
          hero: {
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.6435-9/131589759_197121945462708_3803542638704065317_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6vqnlvkKOXAQ7kNvgG0d7rN&_nc_ht=scontent.fkkc3-1.fna&gid=AZLF5AsSIjr9fG39pej-MJV&oh=00_AYCgCIsKmYtLHbHdvhHddxuDcd5Hn6mS3QjY8Dao2meiUg&oe=66D34455",
            action: {
              uri: "https://linecorp.com/",
              type: "uri",
              label: "Line",
            },
            aspectRatio: "20:13",
            type: "image",
            aspectMode: "cover",
            size: "full",
          },
        },
        {
          type: "bubble",
          footer: {
            type: "box",
            spacing: "sm",
            layout: "vertical",
            contents: [
              {
                color: "#696969FF",
                margin: "xl",
                type: "separator",
              },
              {
                type: "button",
                color: "#FEFEFEFF",
                action: {
                  label: "รายละเอียด",
                  type: "message",
                  text: "รายละเอียดป่าสนดงลาน",
                },
                style: "secondary",
                height: "sm",
                gravity: "bottom",
              },
              {
                color: "#FFFFFFFF",
                height: "sm",
                action: {
                  text: "เวลาเปิด-ปิดป่าสนดงลาน",
                  label: "เวลาเปิด-ปิด",
                  type: "message",
                },
                type: "button",
                style: "secondary",
                gravity: "bottom",
              },
              {
                type: "button",
                color: "#FFFFFFFF",
                style: "secondary",
                height: "sm",
                action: {
                  type: "message",
                  label: "แผนที่",
                  text: "เส้นทางไปป่าสนดงลาน",
                },
                gravity: "bottom",
              },
              {
                type: "button",
                gravity: "bottom",
                action: {
                  label: "ค่าเข้าชม",
                  text: "ค่าเข้าป่าสนดงลาน",
                  type: "message",
                },
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
          direction: "ltr",
          hero: {
            action: {
              uri: "https://linecorp.com/",
              label: "Line",
              type: "uri",
            },
            aspectMode: "cover",
            aspectRatio: "20:13",
            type: "image",
            size: "full",
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.6435-9/131692725_197122145462688_1617851023977770556_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hsoxECJjqbAQ7kNvgEnOZcg&_nc_ht=scontent.fkkc3-1.fna&gid=A5ts_cCiN6Fp_Sfaq7lYNsI&oh=00_AYBeM_UgwTj2oeUqRMpAJoktwUh5VmN8D_V4DKDUDp8uzQ&oe=66D33FC2",
          },
          body: {
            layout: "vertical",
            action: {
              type: "message",
              text: "ป่าสนดงลาน",
              label: "ป่าสนดงลาน",
            },
            contents: [
              {
                type: "text",
                contents: [],
                size: "xl",
                weight: "bold",
                align: "start",
                text: "ป่าสนดงลาน",
                color: "#000000FF",
              },
              {
                layout: "vertical",
                contents: [
                  {
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        text: "อำเภอ : ชุมแพ",
                        size: "md",
                        contents: [],
                        type: "text",
                        color: "#5B5858FF",
                      },
                    ],
                    type: "box",
                  },
                  {
                    layout: "baseline",
                    type: "box",
                    contents: [
                      {
                        size: "xs",
                        type: "text",
                        text: "ขอบคุณภาพจาก: เพจ สถานีขอนแก่น : รีวิวคาเฟ่ อาหาร สถานที่ท่องเที่ยว",
                        contents: [],
                        color: "#5B5858FF",
                        align: "start",
                        wrap: true,
                      },
                    ],
                    spacing: "sm",
                  },
                ],
                margin: "lg",
                type: "box",
                spacing: "sm",
              },
            ],
            type: "box",
          },
        },
      ],
    },
  };
}

module.exports = {
  createChumPhaeFlex,
};
