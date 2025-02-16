function createKhaoSuanKwangFlex() {
  return {
    type: "flex",
    contents: {
      contents: [
        {
          hero: {
            type: "image",
            size: "full",
            aspectRatio: "20:13",
            action: {
              label: "Line",
              uri: "https://linecorp.com/",
              type: "uri",
            },
            aspectMode: "cover",
            url: "https://scontent.fkkc3-1.fna.fbcdn.net/v/t1.6435-9/57484788_2170373409724328_6673510314689953792_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=0Y3sSGSqnLAQ7kNvgH_nD1n&_nc_ht=scontent.fkkc3-1.fna&gid=A_bDCJypa_q7G0oWI8hallE&oh=00_AYBGyYglQbo9R_6X_A65P89ea0ncTWWjdqSau61VsjM_Vw&oe=66D1D335",
          },
          type: "bubble",
          direction: "ltr",
          body: {
            layout: "vertical",
            type: "box",
            contents: [
              {
                color: "#000000FF",
                text: "สวนน้ำสวนสัตว์ขอนแก่น",
                weight: "bold",
                size: "xl",
                type: "text",
                contents: [],
                align: "start",
              },
              {
                layout: "vertical",
                type: "box",
                margin: "lg",
                spacing: "sm",
                contents: [
                  {
                    type: "box",
                    spacing: "sm",
                    contents: [
                      {
                        size: "md",
                        color: "#5B5858FF",
                        contents: [],
                        type: "text",
                        text: "อำเภอ : เขาสวนกวาง",
                      },
                    ],
                    layout: "baseline",
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        wrap: true,
                        color: "#5B5858FF",
                        text: "ขอบคุณภาพจาก: เพจ สวนสัตว์ขอนแก่น khonkaen zoo",
                        size: "xs",
                        align: "start",
                        type: "text",
                        contents: [],
                      },
                    ],
                    spacing: "sm",
                  },
                ],
              },
            ],
            action: {
              label: "สวนน้ำสวนสัตว์ขอนแก่น",
              text: "สวนน้ำสวนสัตว์ขอนแก่น",
              type: "message",
            },
          },
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                color: "#696969FF",
                margin: "xl",
                type: "separator",
              },
              {
                type: "button",
                style: "secondary",
                action: {
                  type: "message",
                  label: "รายละเอียด",
                  text: "รายละเอียดสวนน้ำสวนสัตว์ขอนแก่น",
                },
                height: "sm",
                color: "#FEFEFEFF",
                gravity: "bottom",
              },
              {
                style: "secondary",
                action: {
                  type: "message",
                  text: "เวลาเปิด-ปิดสวนน้ำสวนสัตว์ขอนแก่น",
                  label: "เวลาเปิด-ปิด",
                },
                color: "#FFFFFFFF",
                gravity: "bottom",
                type: "button",
                height: "sm",
              },
              {
                gravity: "bottom",
                style: "secondary",
                action: {
                  type: "message",
                  text: "เส้นทางไปสวนน้ำสวนสัตว์ขอนแก่น",
                  label: "แผนที่",
                },
                height: "sm",
                color: "#FFFFFFFF",
                type: "button",
              },
              {
                style: "secondary",
                type: "button",
                color: "#FFFFFFFF",
                gravity: "bottom",
                action: {
                  label: "ค่าเข้าชม",
                  type: "message",
                  text: "ค่าเข้าสวนน้ำสวนสัตว์ขอนแก่น",
                },
                height: "sm",
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
          body: {
            action: {
              text: "สวนสัตว์ขอนแก่น",
              label: "สวนสัตว์ขอนแก่น",
              type: "message",
            },
            contents: [
              {
                text: "สวนสัตว์ขอนแก่น",
                contents: [],
                size: "xl",
                weight: "bold",
                color: "#000000FF",
                align: "start",
                type: "text",
              },
              {
                margin: "lg",
                spacing: "sm",
                contents: [
                  {
                    type: "box",
                    contents: [
                      {
                        type: "text",
                        color: "#5B5858FF",
                        contents: [],
                        text: "อำเภอ : เขาสวนกวาง",
                        size: "md",
                      },
                    ],
                    spacing: "sm",
                    layout: "baseline",
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        contents: [],
                        type: "text",
                        color: "#5B5858FF",
                        size: "xs",
                        text: "ขอบคุณภาพจาก: เว็บไซต์ thailandtourismdirectory",
                        wrap: true,
                        align: "start",
                      },
                    ],
                    spacing: "sm",
                  },
                ],
                layout: "vertical",
                type: "box",
              },
            ],
            layout: "vertical",
            type: "box",
          },
          footer: {
            contents: [
              {
                color: "#696969FF",
                margin: "xl",
                type: "separator",
              },
              {
                gravity: "bottom",
                height: "sm",
                style: "secondary",
                type: "button",
                color: "#FEFEFEFF",
                action: {
                  label: "รายละเอียด",
                  type: "message",
                  text: "รายละเอียดสวนสัตว์ขอนแก่น",
                },
              },
              {
                color: "#FFFFFFFF",
                style: "secondary",
                action: {
                  text: "เวลาเปิด-ปิดสวนสัตว์ขอนแก่น",
                  type: "message",
                  label: "เวลาเปิด-ปิด",
                },
                type: "button",
                height: "sm",
                gravity: "bottom",
              },
              {
                type: "button",
                style: "secondary",
                action: {
                  type: "message",
                  text: "เส้นทางไปสวนสัตว์ขอนแก่น",
                  label: "แผนที่",
                },
                gravity: "bottom",
                height: "sm",
                color: "#FFFFFFFF",
              },
              {
                style: "secondary",
                color: "#FFFFFFFF",
                action: {
                  label: "ค่าเข้าชม",
                  text: "ค่าเข้าสวนสัตว์ขอนแก่น",
                  type: "message",
                },
                gravity: "bottom",
                type: "button",
                height: "sm",
              },
              {
                type: "spacer",
                size: "sm",
              },
            ],
            type: "box",
            layout: "vertical",
            spacing: "sm",
          },
          direction: "ltr",
          hero: {
            url: "https://files.thailandtourismdirectory.go.th/assets/upload/2018/03/28/20180328362e15255957ca1d9fa25686618333a3140327.jpg",
            aspectMode: "cover",
            type: "image",
            action: {
              type: "uri",
              uri: "https://linecorp.com/",
              label: "Line",
            },
            size: "full",
            aspectRatio: "20:13",
          },
        },
      ],
      type: "carousel",
    },
    altText: "อำเภอเขาสวนกวาง",
  };
}

module.exports = {
  createKhaoSuanKwangFlex,
};
