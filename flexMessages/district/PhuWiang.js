function createPhuWiangFlex() {
  return {
    altText: "อำเภอภูเวียง",
    contents: {
      contents: [
        {
          body: {
            layout: "vertical",
            action: {
              type: "message",
              label: "วัดแก้วจักรพรรดิสิริสุทธาวาส",
              text: "วัดแก้วจักรพรรดิสิริสุทธาวาส",
            },
            contents: [
              {
                weight: "bold",
                color: "#000000FF",
                size: "xl",
                text: "วัดแก้วจักรพรรดิสิริสุทธาวาส",
                type: "text",
                contents: [],
                align: "start",
              },
              {
                margin: "lg",
                layout: "vertical",
                type: "box",
                contents: [
                  {
                    type: "box",
                    contents: [
                      {
                        color: "#5B5858FF",
                        text: "อำเภอ : ภูเวียง",
                        type: "text",
                        contents: [],
                        size: "md",
                      },
                    ],
                    spacing: "sm",
                    layout: "baseline",
                  },
                  {
                    contents: [
                      {
                        size: "xs",
                        contents: [],
                        color: "#5B5858FF",
                        text: "ขอบคุณภาพจาก: ประสมสุข เล็ก สงวนเงิน, เพจ ขอนแก่น-Khonkaen Station",
                        type: "text",
                        wrap: true,
                        align: "start",
                      },
                    ],
                    layout: "baseline",
                    type: "box",
                    spacing: "sm",
                  },
                ],
                spacing: "sm",
              },
            ],
            type: "box",
          },
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
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
                action: {
                  text: "รายละเอียดวัดแก้วจักรพรรดิสิริสุทธาวาส",
                  label: "รายละเอียด",
                  type: "message",
                },
                height: "sm",
              },
              {
                color: "#FFFFFFFF",
                gravity: "bottom",
                height: "sm",
                style: "secondary",
                type: "button",
                action: {
                  type: "message",
                  label: "เวลาเปิด-ปิด",
                  text: "เวลาเปิด-ปิดวัดแก้วจักรพรรดิสิริสุทธาวาส",
                },
              },
              {
                color: "#FFFFFFFF",
                type: "button",
                style: "secondary",
                action: {
                  text: "เส้นทางไปวัดแก้วจักรพรรดิสิริสุทธาวาส",
                  label: "แผนที่",
                  type: "message",
                },
                gravity: "bottom",
                height: "sm",
              },
              {
                gravity: "bottom",
                action: {
                  type: "message",
                  label: "ค่าเข้าชม",
                  text: "ค่าเข้าวัดแก้วจักรพรรดิสิริสุทธาวาส",
                },
                type: "button",
                style: "secondary",
                color: "#FFFFFFFF",
                height: "sm",
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
          },
          type: "bubble",
          direction: "ltr",
          hero: {
            size: "full",
            action: {
              label: "Line",
              uri: "https://linecorp.com/",
              type: "uri",
            },
            aspectMode: "cover",
            aspectRatio: "20:13",
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.6435-9/109760615_2620720794867942_5063219837794997359_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=uWPlUdhdqxQQ7kNvgGHe6O1&_nc_ht=scontent.fkkc3-1.fna&oh=00_AYA34z-EjDFYYct_qSTX18o4woHflxbWJLJwjCb8Mrcj3w&oe=66D189EA",
            type: "image",
          },
        },
      ],
      type: "carousel",
    },
    type: "flex",
  };
}

module.exports = {
  createPhuWiangFlex,
};
