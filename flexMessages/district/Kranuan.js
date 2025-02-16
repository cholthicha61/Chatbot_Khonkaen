function createKranuanFlex() {
  return {
    altText: "อำเภอกระนวน",
    type: "flex",
    contents: {
      type: "carousel",
      contents: [
        {
          hero: {
            action: {
              uri: "https://linecorp.com/",
              label: "Line",
              type: "uri",
            },
            type: "image",
            aspectMode: "cover",
            aspectRatio: "20:13",
            size: "full",
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.6435-9/131478779_197121675462735_2579772142138151274_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5WHcxIyKGl8Q7kNvgH9zxj7&_nc_ht=scontent.fkkc3-1.fna&gid=ApOc4J3xXWdfMRl4Ka1BLYD&oh=00_AYCoKWaPCQMmJN2fyCkiP1FVXUCfkFzChkWOt7wk4Gy4pA&oe=66D359D0",
          },
          type: "bubble",
          body: {
            contents: [
              {
                text: "น้ำตกบ๋าหลวง",
                type: "text",
                weight: "bold",
                color: "#000000FF",
                size: "xl",
                align: "start",
                contents: [],
              },
              {
                margin: "lg",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        contents: [],
                        size: "md",
                        text: "อำเภอ : กระนวน",
                        color: "#5B5858FF",
                        type: "text",
                      },
                    ],
                  },
                  {
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        text: "ขอบคุณภาพจาก: เพจ สถานีขอนแก่น : รีวิวคาเฟ่ อาหาร สถานที่ท่องเที่ยว",
                        contents: [],
                        size: "xs",
                        align: "start",
                        wrap: true,
                        color: "#5B5858FF",
                      },
                    ],
                    type: "box",
                  },
                ],
                spacing: "sm",
                layout: "vertical",
                type: "box",
              },
            ],
            type: "box",
            layout: "vertical",
            action: {
              label: "น้ำตกบ๋าหลวง",
              type: "message",
              text: "น้ำตกบ๋าหลวง",
            },
          },
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
                color: "#FEFEFEFF",
                gravity: "bottom",
                action: {
                  label: "รายละเอียด",
                  type: "message",
                  text: "รายละเอียดน้ำตกบ๋าหลวง",
                },
                height: "sm",
                style: "secondary",
                type: "button",
              },
              {
                color: "#FFFFFFFF",
                height: "sm",
                gravity: "bottom",
                type: "button",
                action: {
                  type: "message",
                  text: "เวลาเปิด-ปิดน้ำตกบ๋าหลวง",
                  label: "เวลาเปิด-ปิด",
                },
                style: "secondary",
              },
              {
                color: "#FFFFFFFF",
                gravity: "bottom",
                type: "button",
                style: "secondary",
                action: {
                  label: "แผนที่",
                  text: "เส้นทางไปน้ำตกบ๋าหลวง",
                  type: "message",
                },
                height: "sm",
              },
              {
                height: "sm",
                style: "secondary",
                color: "#FFFFFFFF",
                type: "button",
                gravity: "bottom",
                action: {
                  text: "ค่าเข้าน้ำตกบ๋าหลวง",
                  label: "ค่าเข้าชม",
                  type: "message",
                },
              },
              {
                size: "sm",
                type: "spacer",
              },
            ],
            type: "box",
          },
          direction: "ltr",
        },
      ],
    },
  };
}

module.exports = {
  createKranuanFlex,
};
