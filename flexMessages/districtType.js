const { Payload } = require("dialogflow-fulfillment");

const sendDistrictFlexMessage = (agent, questionText) => {
  console.log("Question Text:", questionText);
  const flexMessages = {
    BanFang: {
      contents: {
        type: "carousel",
        contents: [
          {
            hero: {
              size: "full",
              type: "image",
              aspectMode: "cover",
              aspectRatio: "20:13",
              url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Amphoe_4002.svg",
              action: {
                uri: "https://linecorp.com/",
                type: "uri",
                label: "Line",
              },
            },
            body: {
              type: "box",
              action: {
                type: "message",
                text: "จุดชมวิวหินช้างสี",
                label: "จุดชมวิวหินช้างสี",
              },
              contents: [
                {
                  size: "xl",
                  weight: "bold",
                  color: "#000000FF",
                  text: "จุดชมวิวหินช้างสี",
                  type: "text",
                  align: "start",
                  contents: [],
                },
                {
                  contents: [
                    {
                      type: "box",
                      contents: [
                        {
                          size: "md",
                          type: "text",
                          text: "อำเภอ : บ้านฝาง",
                          contents: [],
                          color: "#5B5858FF",
                        },
                      ],
                      spacing: "sm",
                      layout: "baseline",
                    },
                    {
                      spacing: "sm",
                      layout: "baseline",
                      contents: [
                        {
                          contents: [],
                          align: "start",
                          text: "ขอบคุณภาพจาก: วิกิพีเดีย",
                          size: "xs",
                          type: "text",
                          color: "#5B5858FF",
                        },
                      ],
                      type: "box",
                    },
                  ],
                  layout: "vertical",
                  spacing: "sm",
                  type: "box",
                  margin: "lg",
                },
              ],
              layout: "vertical",
            },
            direction: "ltr",
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
                  style: "secondary",
                  color: "#FEFEFEFF",
                  gravity: "bottom",
                  height: "sm",
                  type: "button",
                  action: {
                    type: "message",
                    text: "รายละเอียดจุดชมวิวหินช้างสี",
                    label: "รายละเอียด",
                  },
                },
                {
                  height: "sm",
                  gravity: "bottom",
                  style: "secondary",
                  type: "button",
                  action: {
                    type: "message",
                    label: "เวลาทำการ",
                    text: "เวลาทำการจุดชมวิวหินช้างสี",
                  },
                  color: "#FFFFFFFF",
                },
                {
                  height: "sm",
                  color: "#FFFFFFFF",
                  type: "button",
                  style: "secondary",
                  action: {
                    type: "message",
                    text: "เส้นทางไปจุดชมวิวหินช้างสี",
                    label: "แผนที่",
                  },
                  gravity: "bottom",
                },
                {
                  action: {
                    label: "ค่าเข้าชม",
                    type: "message",
                    text: "ค่าเข้าจุดชมวิวหินช้างสี",
                  },
                  style: "secondary",
                  height: "sm",
                  color: "#FFFFFFFF",
                  gravity: "bottom",
                  type: "button",
                },
                {
                  type: "spacer",
                  size: "sm",
                },
              ],
              type: "box",
            },
            type: "bubble",
          },
          {
            hero: {
              aspectRatio: "20:13",
              url: "https://img.wongnai.com/p/1920x0/2019/08/31/2493edf8ab78412a806bce1eb7b240a5.jpg",
              type: "image",
              aspectMode: "cover",
              size: "full",
              action: {
                uri: "https://linecorp.com/",
                type: "uri",
                label: "Line",
              },
            },
            body: {
              contents: [
                {
                  type: "text",
                  size: "xl",
                  align: "start",
                  contents: [],
                  color: "#000000FF",
                  weight: "bold",
                  text: "พิพิธภัณฑ์ไดโนเสาร์ภูเวียง",
                },
                {
                  layout: "vertical",
                  contents: [
                    {
                      contents: [
                        {
                          size: "md",
                          contents: [],
                          text: "อำเภอ : บ้านฝาง",
                          type: "text",
                          color: "#5B5858FF",
                        },
                      ],
                      type: "box",
                      spacing: "sm",
                      layout: "baseline",
                    },
                    {
                      layout: "baseline",
                      spacing: "sm",
                      contents: [
                        {
                          type: "text",
                          size: "xs",
                          contents: [],
                          align: "start",
                          text: "ขอบคุณภาพจาก: TASTE-TEST",
                          color: "#5B5858FF",
                        },
                      ],
                      type: "box",
                    },
                  ],
                  type: "box",
                  spacing: "sm",
                  margin: "lg",
                },
              ],
              action: {
                text: "พิพิธภัณฑ์ไดโนเสาร์ภูเวียง",
                label: "พิพิธภัณฑ์ไดโนเสาร์ภูเวียง",
                type: "message",
              },
              layout: "vertical",
              type: "box",
            },
            footer: {
              layout: "vertical",
              contents: [
                {
                  margin: "xl",
                  color: "#696969FF",
                  type: "separator",
                },
                {
                  height: "sm",
                  color: "#FEFEFEFF",
                  gravity: "bottom",
                  action: {
                    type: "message",
                    text: "รายละเอียดพิพิธภัณฑ์ไดโนเสาร์ภูเวียง",
                    label: "รายละเอียด",
                  },
                  style: "secondary",
                  type: "button",
                },
                {
                  action: {
                    text: "เวลาทำการพิพิธภัณฑ์ไดโนเสาร์ภูเวียง",
                    label: "เวลาทำการ",
                    type: "message",
                  },
                  type: "button",
                  style: "secondary",
                  height: "sm",
                  color: "#FFFFFFFF",
                  gravity: "bottom",
                },
                {
                  height: "sm",
                  gravity: "bottom",
                  style: "secondary",
                  color: "#FFFFFFFF",
                  type: "button",
                  action: {
                    type: "message",
                    text: "เส้นทางไปพิพิธภัณฑ์ไดโนเสาร์ภูเวียง",
                    label: "แผนที่",
                  },
                },
                {
                  color: "#FFFFFFFF",
                  action: {
                    label: "ค่าเข้าชม",
                    type: "message",
                    text: "ค่าเข้าพิพิธภัณฑ์ไดโนเสาร์ภูเวียง",
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
              spacing: "sm",
              type: "box",
            },
            direction: "ltr",
            type: "bubble",
          },
        ],
      },
      type: "flex",
      altText: "อำเภอบ้านฝาง",
    },
    ChumPhae: {
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
                          text: "ขอบคุณภาพจาก: อุทยานแห่งชาติภูผาม่าน - Phuphaman National Park",
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
                    label: "เวลาทำการ",
                    text: "เวลาทำการอุทยานแห่งชาติภูผาม่าน",
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
              url: "https://raw.githubusercontent.com/ArreerakKlangindet/image-storage/main/image-detail/PhuPhaManNationalPark1.jpg",
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
                    text: "เวลาทำการป่าสนดงลาน",
                    label: "เวลาทำการ",
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
              url: "https://raw.githubusercontent.com/ArreerakKlangindet/image-storage/main/image-detail/DongLan3.jpg",
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
                          text: "ขอบคุณภาพจาก: FB: ไปเรื่อย ไปเปื่อย",
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
    },
    KhaoSuanKwang: {
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
              url: "https://raw.githubusercontent.com/ArreerakKlangindet/image-storage/main/image-detail/ZooWaterPark1.jpg",
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
                    text: "เวลาทำการสวนน้ำสวนสัตว์ขอนแก่น",
                    label: "เวลาทำการ",
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
                    text: "เวลาทำการสวนสัตว์ขอนแก่น",
                    type: "message",
                    label: "เวลาทำการ",
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
    },
    Kranuan: {
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
              url: "https://raw.githubusercontent.com/ArreerakKlangindet/image-storage/main/image-detail/BaLuang5.jpg",
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
                          text: "ขอบคุณภาพจาก: FB: ข่าว กระนวน KranuanNews",
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
                    text: "เวลาทำการน้ำตกบ๋าหลวง",
                    label: "เวลาทำการ",
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
    },
    Mueang: {
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
                          text: "ขอบคุณภาพจาก: khonkaenlink",
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
                    text: "เวลาทำการพระมหาธาตุแก่นนคร",
                    label: "เวลาทำการ",
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
              url: "https://old.khonkaenlink.info/home/upload/photo/news/bUaIBWxq.jpg",
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
                    label: "เวลาทำการ",
                    text: "เวลาทำการศาลหลักเมือง",
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
                    label: "เวลาทำการ",
                    text: "เวลาทำการวัดทุ่งเศรษฐี",
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
                    label: "เวลาทำการ",
                    text: "เวลาทำการวัดถ้ำผาเกิ้ง",
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
                    label: "เวลาทำการ",
                    type: "message",
                    text: "เวลาทำการวัดป่าแสงอรุณ",
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
              url: "https://raw.githubusercontent.com/ArreerakKlangindet/image-storage/main/image-detail/ShivaMahadev1.jpg",
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
                          text: "ขอบคุณภาพจาก: FB: เทวาลัยศิวะมหาเทพ ขอนแก่น",
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
                    text: "เวลาทำการเทวาลัยศิวะมหาเทพ",
                    label: "เวลาทำการ",
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
                    label: "เวลาทำการ",
                    text: "เวลาทำการบึงแก่นนคร",
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
                    text: "เวลาทำการบึงทุ่งสร้าง",
                    type: "message",
                    label: "เวลาทำการ",
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
          {
            body: {
              contents: [
                {
                  type: "text",
                  align: "start",
                  weight: "bold",
                  text: "สวนน้ำไดโนวอเตอร์ปาร์ค",
                  contents: [],
                  size: "xl",
                  color: "#000000FF",
                },
                {
                  type: "box",
                  spacing: "sm",
                  margin: "lg",
                  layout: "vertical",
                  contents: [
                    {
                      contents: [
                        {
                          type: "text",
                          contents: [],
                          text: "ประเภท : อำเภอเมือง",
                          size: "md",
                          color: "#5B5858FF",
                        },
                      ],
                      spacing: "sm",
                      type: "box",
                      layout: "baseline",
                    },
                    {
                      type: "box",
                      contents: [
                        {
                          align: "start",
                          contents: [],
                          size: "xs",
                          type: "text",
                          text: "ขอบคุณภาพจาก: เพจ Hi-End Dino Water Park",
                          color: "#5B5858FF",
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
              action: {
                label: "สวนน้ำไดโนวอเตอร์ปาร์ค",
                type: "message",
                text: "สวนน้ำไดโนวอเตอร์ปาร์ค",
              },
            },
            hero: {
              aspectRatio: "20:13",
              url: "https://img.kapook.com/u/2015/panadda/Travel1/Dino%20Water%20Park3.jpg",
              action: {
                label: "Line",
                uri: "https://linecorp.com/",
                type: "uri",
              },
              type: "image",
              size: "full",
              aspectMode: "cover",
            },
            footer: {
              contents: [
                {
                  color: "#696969FF",
                  type: "separator",
                  margin: "xl",
                },
                {
                  type: "button",
                  color: "#FEFEFEFF",
                  style: "secondary",
                  action: {
                    label: "รายละเอียด",
                    text: "รายละเอียดสวนน้ำไดโนวอเตอร์ปาร์ค",
                    type: "message",
                  },
                  gravity: "bottom",
                  height: "sm",
                },
                {
                  action: {
                    text: "เวลาทำการสวนน้ำไดโนวอเตอร์ปาร์ค",
                    label: "เวลาทำการ",
                    type: "message",
                  },
                  color: "#FFFFFFFF",
                  type: "button",
                  gravity: "bottom",
                  style: "secondary",
                  height: "sm",
                },
                {
                  height: "sm",
                  gravity: "bottom",
                  color: "#FFFFFFFF",
                  style: "secondary",
                  action: {
                    type: "message",
                    text: "เส้นทางไปสวนน้ำไดโนวอเตอร์ปาร์ค",
                    label: "แผนที่",
                  },
                  type: "button",
                },
                {
                  type: "button",
                  style: "secondary",
                  action: {
                    text: "ค่าเข้าสวนน้ำไดโนวอเตอร์ปาร์ค",
                    label: "ค่าเข้าชม",
                    type: "message",
                  },
                  height: "sm",
                  color: "#FFFFFFFF",
                  gravity: "bottom",
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
            direction: "ltr",
            type: "bubble",
          },
          {
            footer: {
              layout: "vertical",
              type: "box",
              contents: [
                {
                  margin: "xl",
                  type: "separator",
                  color: "#696969FF",
                },
                {
                  action: {
                    type: "message",
                    text: "รายละเอียดเอ็กโซติค",
                    label: "รายละเอียด",
                  },
                  style: "secondary",
                  type: "button",
                  height: "sm",
                  gravity: "bottom",
                  color: "#FEFEFEFF",
                },
                {
                  height: "sm",
                  gravity: "bottom",
                  style: "secondary",
                  action: {
                    type: "message",
                    text: "เวลาทำการเอ็กโซติค",
                    label: "เวลาทำการ",
                  },
                  type: "button",
                  color: "#FFFFFFFF",
                },
                {
                  color: "#FFFFFFFF",
                  type: "button",
                  style: "secondary",
                  gravity: "bottom",
                  height: "sm",
                  action: {
                    type: "message",
                    text: "เส้นทางไปเอ็กโซติค",
                    label: "แผนที่",
                  },
                },
                {
                  gravity: "bottom",
                  color: "#FFFFFFFF",
                  type: "button",
                  style: "secondary",
                  height: "sm",
                  action: {
                    type: "message",
                    text: "ค่าเข้าเอ็กโซติค",
                    label: "ค่าเข้าชม",
                  },
                },
                {
                  size: "sm",
                  type: "spacer",
                },
              ],
              spacing: "sm",
            },
            body: {
              layout: "vertical",
              type: "box",
              action: {
                label: "เอ็กโซติค",
                text: "เอ็กโซติค",
                type: "message",
              },
              contents: [
                {
                  contents: [],
                  type: "text",
                  size: "xl",
                  text: "เอ็กโซติค",
                  align: "start",
                  weight: "bold",
                  color: "#000000FF",
                },
                {
                  margin: "lg",
                  layout: "vertical",
                  type: "box",
                  spacing: "sm",
                  contents: [
                    {
                      layout: "baseline",
                      type: "box",
                      contents: [
                        {
                          type: "text",
                          color: "#5B5858FF",
                          contents: [],
                          size: "md",
                          text: "ประเภท : อำเภอเมือง",
                        },
                      ],
                      spacing: "sm",
                    },
                    {
                      type: "box",
                      spacing: "sm",
                      layout: "baseline",
                      contents: [
                        {
                          contents: [],
                          size: "xs",
                          align: "start",
                          type: "text",
                          color: "#5B5858FF",
                          text: "ขอบคุณภาพจาก: mickey.msk ",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            direction: "ltr",
            hero: {
              aspectRatio: "20:13",
              size: "full",
              url: "https://img.wongnai.com/p/1920x0/2022/04/19/ee9f053cba4e456693554f0fdd5f23d6.jpg",
              type: "image",
              action: {
                label: "Line",
                uri: "https://linecorp.com/",
                type: "uri",
              },
              aspectMode: "cover",
            },
            type: "bubble",
          },
        ],
        type: "carousel",
      },
    },
    NamPhong: {
      contents: {
        contents: [
          {
            body: {
              layout: "vertical",
              action: {
                type: "message",
                label: "พระธาตุขามแก่น",
                text: "พระธาตุขามแก่น",
              },
              type: "box",
              contents: [
                {
                  align: "start",
                  size: "xl",
                  weight: "bold",
                  text: "พระธาตุขามแก่น",
                  color: "#000000FF",
                  contents: [],
                  type: "text",
                },
                {
                  contents: [
                    {
                      spacing: "sm",
                      layout: "baseline",
                      contents: [
                        {
                          text: "อำเภอ : น้ำพอง",
                          color: "#5B5858FF",
                          contents: [],
                          size: "md",
                          type: "text",
                        },
                      ],
                      type: "box",
                    },
                    {
                      type: "box",
                      layout: "baseline",
                      contents: [
                        {
                          size: "xs",
                          contents: [],
                          text: "ขอบคุณภาพจาก: khonkaenlink",
                          wrap: true,
                          color: "#5B5858FF",
                          type: "text",
                          align: "start",
                        },
                      ],
                      spacing: "sm",
                    },
                  ],
                  type: "box",
                  margin: "lg",
                  spacing: "sm",
                  layout: "vertical",
                },
              ],
            },
            hero: {
              aspectMode: "cover",
              aspectRatio: "20:13",
              size: "full",
              type: "image",
              url: "https://old.khonkaenlink.info/home/upload/photo/news/7Sin5Hxg.jpg",
              action: {
                uri: "https://linecorp.com/",
                type: "uri",
                label: "Line",
              },
            },
            type: "bubble",
            direction: "ltr",
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
                  color: "#FEFEFEFF",
                  style: "secondary",
                  gravity: "bottom",
                  type: "button",
                  height: "sm",
                  action: {
                    label: "รายละเอียด",
                    text: "รายละเอียดพระธาตุขามแก่น",
                    type: "message",
                  },
                },
                {
                  style: "secondary",
                  gravity: "bottom",
                  action: {
                    label: "เวลาทำการ",
                    text: "เวลาทำการพระธาตุขามแก่น",
                    type: "message",
                  },
                  type: "button",
                  color: "#FFFFFFFF",
                  height: "sm",
                },
                {
                  gravity: "bottom",
                  style: "secondary",
                  color: "#FFFFFFFF",
                  action: {
                    type: "message",
                    label: "แผนที่",
                    text: "เส้นทางไปพระธาตุขามแก่น",
                  },
                  type: "button",
                  height: "sm",
                },
                {
                  height: "sm",
                  action: {
                    type: "message",
                    label: "ค่าเข้าชม",
                    text: "ค่าเข้าพระธาตุขามแก่น",
                  },
                  style: "secondary",
                  color: "#FFFFFFFF",
                  type: "button",
                  gravity: "bottom",
                },
                {
                  size: "sm",
                  type: "spacer",
                },
              ],
            },
          },
        ],
        type: "carousel",
      },
      type: "flex",
      altText: "อำเภอน้ำพอง",
    },
    NongRuea:{
      type: "flex",
      contents: {
        type: "carousel",
        contents: [
          {
            body: {
              action: {
                label: "อุทยานแห่งชาติน้ำพอง",
                text: "อุทยานแห่งชาติน้ำพอง",
                type: "message",
              },
              type: "box",
              layout: "vertical",
              contents: [
                {
                  size: "xl",
                  weight: "bold",
                  type: "text",
                  color: "#000000FF",
                  contents: [],
                  text: "อุทยานแห่งชาติน้ำพอง",
                  align: "start",
                },
                {
                  contents: [
                    {
                      type: "box",
                      spacing: "sm",
                      layout: "baseline",
                      contents: [
                        {
                          text: "อำเภอ : หนองเรือ",
                          contents: [],
                          type: "text",
                          color: "#5B5858FF",
                          size: "md",
                        },
                      ],
                    },
                    {
                      spacing: "sm",
                      type: "box",
                      layout: "baseline",
                      contents: [
                        {
                          size: "xs",
                          wrap: true,
                          contents: [],
                          color: "#5B5858FF",
                          align: "start",
                          type: "text",
                          text: "ขอบคุณภาพจาก: เพจ อุทยานแห่งชาติน้ำพอง - Namphong National Park",
                        },
                      ],
                    },
                  ],
                  type: "box",
                  margin: "lg",
                  layout: "vertical",
                  spacing: "sm",
                },
              ],
            },
            direction: "ltr",
            type: "bubble",
            hero: {
              aspectMode: "cover",
              action: {
                type: "uri",
                label: "Line",
                uri: "https://linecorp.com/",
              },
              aspectRatio: "20:13",
              url: "https://s.isanook.com/tr/0/ui/283/1418945/mg_0609-768x512_1578661114.jpg",
              size: "full",
              type: "image",
            },
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
                  height: "sm",
                  gravity: "bottom",
                  type: "button",
                  style: "secondary",
                  action: {
                    text: "รายละเอียดอุทยานแห่งชาติน้ำพอง",
                    type: "message",
                    label: "รายละเอียด",
                  },
                  color: "#FEFEFEFF",
                },
                {
                  gravity: "bottom",
                  style: "secondary",
                  action: {
                    text: "เวลาทำการอุทยานแห่งชาติน้ำพอง",
                    label: "เวลาทำการ",
                    type: "message",
                  },
                  color: "#FFFFFFFF",
                  height: "sm",
                  type: "button",
                },
                {
                  style: "secondary",
                  color: "#FFFFFFFF",
                  gravity: "bottom",
                  type: "button",
                  height: "sm",
                  action: {
                    label: "แผนที่",
                    text: "เส้นทางไปอุทยานแห่งชาติน้ำพอง",
                    type: "message",
                  },
                },
                {
                  height: "sm",
                  type: "button",
                  gravity: "bottom",
                  color: "#FFFFFFFF",
                  style: "secondary",
                  action: {
                    label: "ค่าเข้าชม",
                    type: "message",
                    text: "ค่าเข้าอุทยานแห่งชาติน้ำพอง",
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
      altText: "อำเภอหนองเรือ",
    },
    PhuPhaMan: {
      type: "flex",
      altText: "อำเภอภูผาม่าน",
      contents: {
        contents: [
          {
            footer: {
              layout: "vertical",
              spacing: "sm",
              contents: [
                {
                  margin: "xl",
                  type: "separator",
                  color: "#696969FF",
                },
                {
                  gravity: "bottom",
                  height: "sm",
                  style: "secondary",
                  color: "#FEFEFEFF",
                  type: "button",
                  action: {
                    type: "message",
                    label: "รายละเอียด",
                    text: "รายละเอียดล่องแพห้วยม่วง",
                  },
                },
                {
                  color: "#FFFFFFFF",
                  action: {
                    label: "เวลาทำการ",
                    text: "เวลาทำการล่องแพห้วยม่วง",
                    type: "message",
                  },
                  height: "sm",
                  type: "button",
                  style: "secondary",
                  gravity: "bottom",
                },
                {
                  height: "sm",
                  gravity: "bottom",
                  type: "button",
                  style: "secondary",
                  action: {
                    text: "เส้นทางไปล่องแพห้วยม่วง",
                    label: "แผนที่",
                    type: "message",
                  },
                  color: "#FFFFFFFF",
                },
                {
                  style: "secondary",
                  type: "button",
                  action: {
                    label: "ค่าเข้าชม",
                    type: "message",
                    text: "ค่าเข้าล่องแพห้วยม่วง",
                  },
                  gravity: "bottom",
                  height: "sm",
                  color: "#FFFFFFFF",
                },
                {
                  size: "sm",
                  type: "spacer",
                },
              ],
              type: "box",
            },
            type: "bubble",
            body: {
              type: "box",
              contents: [
                {
                  size: "xl",
                  weight: "bold",
                  align: "start",
                  contents: [],
                  type: "text",
                  color: "#000000FF",
                  text: "ล่องแพห้วยม่วง",
                },
                {
                  spacing: "sm",
                  margin: "lg",
                  type: "box",
                  contents: [
                    {
                      spacing: "sm",
                      layout: "baseline",
                      contents: [
                        {
                          color: "#5B5858FF",
                          contents: [],
                          text: "ประเภท : อำเภอภูผาม่าน",
                          type: "text",
                          size: "md",
                        },
                      ],
                      type: "box",
                    },
                    {
                      spacing: "sm",
                      contents: [
                        {
                          type: "text",
                          color: "#5B5858FF",
                          align: "start",
                          text: "ขอบคุณภาพจาก : คุณ Mr​Deer ",
                          contents: [],
                          size: "xs",
                        },
                      ],
                      layout: "baseline",
                      type: "box",
                    },
                  ],
                  layout: "vertical",
                },
              ],
              action: {
                type: "message",
                text: "ล่องแพห้วยม่วง",
                label: "ล่องแพห้วยม่วง",
              },
              layout: "vertical",
            },
            hero: {
              aspectMode: "cover",
              action: {
                type: "uri",
                uri: "https://linecorp.com/",
                label: "Line",
              },
              aspectRatio: "20:13",
              size: "full",
              type: "image",
              url: "https://img-prod.api-onscene.com/cdn-cgi/image/format=auto,width=1600,height=900/https://sls-prod.api-onscene.com/partner_files/trueidintrend/391531/img_20201209_140308_1.jpg",
            },
            direction: "ltr",
          },
          {
            body: {
              action: {
                text: "จุดชมวิวหนองสมอ",
                label: "จุดชมวิวหนองสมอ",
                type: "message",
              },
              contents: [
                {
                  type: "text",
                  color: "#000000FF",
                  weight: "bold",
                  align: "start",
                  contents: [],
                  text: "จุดชมวิวหนองสมอ",
                  size: "xl",
                },
                {
                  type: "box",
                  margin: "lg",
                  contents: [
                    {
                      contents: [
                        {
                          contents: [],
                          text: "ประเภท : อำเภอภูผาม่าน",
                          size: "md",
                          color: "#5B5858FF",
                          type: "text",
                        },
                      ],
                      spacing: "sm",
                      type: "box",
                      layout: "baseline",
                    },
                    {
                      contents: [
                        {
                          contents: [],
                          size: "xs",
                          color: "#5B5858FF",
                          align: "start",
                          text: "ขอบคุณภาพจาก : คุณ Mr​Deer ",
                          type: "text",
                        },
                      ],
                      spacing: "sm",
                      type: "box",
                      layout: "baseline",
                    },
                  ],
                  layout: "vertical",
                  spacing: "sm",
                },
              ],
              type: "box",
              layout: "vertical",
            },
            direction: "ltr",
            hero: {
              type: "image",
              aspectRatio: "20:13",
              aspectMode: "cover",
              size: "full",
              action: {
                label: "Line",
                type: "uri",
                uri: "https://linecorp.com/",
              },
              url: "https://img-prod.api-onscene.com/cdn-cgi/image/format=auto,width=1200,height=675/https://sls-prod.api-onscene.com/partner_files/trueidintrend/391531/img_20230331_132558_1.jpg",
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
                  color: "#FEFEFEFF",
                  style: "secondary",
                  gravity: "bottom",
                  height: "sm",
                  action: {
                    text: "รายละเอียดจุดชมวิวหนองสมอ",
                    label: "รายละเอียด",
                    type: "message",
                  },
                  type: "button",
                },
                {
                  height: "sm",
                  style: "secondary",
                  gravity: "bottom",
                  type: "button",
                  color: "#FFFFFFFF",
                  action: {
                    text: "เวลาจุดชมวิวหนองสมอ",
                    label: "เวลาทำการ",
                    type: "message",
                  },
                },
                {
                  action: {
                    label: "แผนที่",
                    type: "message",
                    text: "เส้นทางไปจุดชมวิวหนองสมอ",
                  },
                  color: "#FFFFFFFF",
                  type: "button",
                  gravity: "bottom",
                  style: "secondary",
                  height: "sm",
                },
                {
                  height: "sm",
                  gravity: "bottom",
                  type: "button",
                  action: {
                    text: "ค่าเข้าจุดชมวิวหนองสมอ",
                    type: "message",
                    label: "ค่าเข้าชม",
                  },
                  style: "secondary",
                  color: "#FFFFFFFF",
                },
                {
                  size: "sm",
                  type: "spacer",
                },
              ],
              spacing: "sm",
            },
            type: "bubble",
          },
          {
            body: {
              layout: "vertical",
              action: {
                type: "message",
                text: "Blue Lagoon ภูผาม่าน",
                label: "Blue Lagoon ภูผาม่าน",
              },
              type: "box",
              contents: [
                {
                  contents: [],
                  align: "start",
                  color: "#000000FF",
                  type: "text",
                  text: "Blue Lagoon ภูผาม่าน",
                  weight: "bold",
                  size: "xl",
                },
                {
                  margin: "lg",
                  layout: "vertical",
                  contents: [
                    {
                      type: "box",
                      layout: "baseline",
                      spacing: "sm",
                      contents: [
                        {
                          color: "#5B5858FF",
                          contents: [],
                          text: "ประเภท : อำเภอภูผาม่าน",
                          type: "text",
                          size: "md",
                        },
                      ],
                    },
                    {
                      spacing: "sm",
                      layout: "baseline",
                      contents: [
                        {
                          type: "text",
                          text: "ขอบคุณภาพจาก : คุณ Mr​Deer ",
                          align: "start",
                          size: "xs",
                          contents: [],
                          color: "#5B5858FF",
                        },
                      ],
                      type: "box",
                    },
                  ],
                  type: "box",
                  spacing: "sm",
                },
              ],
            },
            hero: {
              action: {
                label: "Line",
                uri: "https://linecorp.com/",
                type: "uri",
              },
              size: "full",
              type: "image",
              url: "https://img-prod.api-onscene.com/cdn-cgi/image/format=auto,width=1600,height=900/https://sls-prod.api-onscene.com/partner_files/trueidintrend/391531/img_20221001_170236.jpg",
              aspectMode: "cover",
              aspectRatio: "20:13",
            },
            footer: {
              spacing: "sm",
              layout: "vertical",
              type: "box",
              contents: [
                {
                  type: "separator",
                  color: "#696969FF",
                  margin: "xl",
                },
                {
                  type: "button",
                  gravity: "bottom",
                  color: "#FEFEFEFF",
                  action: {
                    label: "รายละเอียด",
                    text: "รายละเอียด Blue Lagoon ภูผาม่าน",
                    type: "message",
                  },
                  style: "secondary",
                  height: "sm",
                },
                {
                  color: "#FFFFFFFF",
                  gravity: "bottom",
                  type: "button",
                  action: {
                    text: "เวลาBlue Lagoon ภูผาม่าน",
                    type: "message",
                    label: "เวลาทำการ",
                  },
                  style: "secondary",
                  height: "sm",
                },
                {
                  height: "sm",
                  action: {
                    type: "message",
                    label: "แผนที่",
                    text: "เส้นทางไป Blue Lagoon ภูผาม่าน",
                  },
                  style: "secondary",
                  gravity: "bottom",
                  type: "button",
                  color: "#FFFFFFFF",
                },
                {
                  type: "button",
                  height: "sm",
                  gravity: "bottom",
                  style: "secondary",
                  action: {
                    type: "message",
                    text: "ค่าเข้าBlue Lagoon ภูผาม่าน",
                    label: "ค่าเข้าชม",
                  },
                  color: "#FFFFFFFF",
                },
                {
                  type: "spacer",
                  size: "sm",
                },
              ],
            },
            direction: "ltr",
            type: "bubble",
          },
          {
            direction: "ltr",
            type: "bubble",
            hero: {
              url: "https://img-prod.api-onscene.com/cdn-cgi/image/format=auto,width=1200,height=675/https://sls-prod.api-onscene.com/partner_files/trueidintrend/391531/1688918424328_0.jpg",
              size: "full",
              action: {
                uri: "https://linecorp.com/",
                label: "Line",
                type: "uri",
              },
              aspectRatio: "20:13",
              aspectMode: "cover",
              type: "image",
            },
            body: {
              layout: "vertical",
              action: {
                text: "น้ำตกตาดใหญ่",
                label: "น้ำตกตาดใหญ่",
                type: "message",
              },
              type: "box",
              contents: [
                {
                  type: "text",
                  size: "xl",
                  contents: [],
                  text: "น้ำตกตาดใหญ่",
                  color: "#000000FF",
                  weight: "bold",
                  align: "start",
                },
                {
                  margin: "lg",
                  type: "box",
                  spacing: "sm",
                  contents: [
                    {
                      spacing: "sm",
                      layout: "baseline",
                      type: "box",
                      contents: [
                        {
                          text: "ประเภท : อำเภอภูผาม่าน",
                          color: "#5B5858FF",
                          size: "md",
                          contents: [],
                          type: "text",
                        },
                      ],
                    },
                    {
                      type: "box",
                      spacing: "sm",
                      layout: "baseline",
                      contents: [
                        {
                          align: "start",
                          text: "ขอบคุณภาพจาก : คุณ Mr​Deer ",
                          contents: [],
                          type: "text",
                          color: "#5B5858FF",
                          size: "xs",
                        },
                      ],
                    },
                  ],
                  layout: "vertical",
                },
              ],
            },
            footer: {
              layout: "vertical",
              type: "box",
              spacing: "sm",
              contents: [
                {
                  color: "#696969FF",
                  margin: "xl",
                  type: "separator",
                },
                {
                  style: "secondary",
                  color: "#FEFEFEFF",
                  gravity: "bottom",
                  type: "button",
                  height: "sm",
                  action: {
                    type: "message",
                    text: "รายละเอียดน้ำตกตาดใหญ่",
                    label: "รายละเอียด",
                  },
                },
                {
                  type: "button",
                  gravity: "bottom",
                  color: "#FFFFFFFF",
                  style: "secondary",
                  height: "sm",
                  action: {
                    text: "เวลาน้ำตกตาดใหญ่",
                    label: "เวลาทำการ",
                    type: "message",
                  },
                },
                {
                  height: "sm",
                  style: "secondary",
                  gravity: "bottom",
                  color: "#FFFFFFFF",
                  action: {
                    text: "เส้นทางไปน้ำตกตาดใหญ่",
                    label: "แผนที่",
                    type: "message",
                  },
                  type: "button",
                },
                {
                  gravity: "bottom",
                  action: {
                    label: "ค่าเข้าชม",
                    text: "ค่าเข้าน้ำตกตาดใหญ่",
                    type: "message",
                  },
                  type: "button",
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
          },
          {
            direction: "ltr",
            hero: {
              size: "full",
              url: "https://img-prod.api-onscene.com/cdn-cgi/image/format=auto,width=1200,height=675/https://sls-prod.api-onscene.com/partner_files/trueidintrend/391531/img_20230331_122638.jpg",
              type: "image",
              aspectRatio: "20:13",
              aspectMode: "cover",
              action: {
                type: "uri",
                label: "Line",
                uri: "https://linecorp.com/",
              },
            },
            type: "bubble",
            footer: {
              layout: "vertical",
              spacing: "sm",
              type: "box",
              contents: [
                {
                  type: "separator",
                  margin: "xl",
                  color: "#696969FF",
                },
                {
                  type: "button",
                  color: "#FEFEFEFF",
                  gravity: "bottom",
                  style: "secondary",
                  height: "sm",
                  action: {
                    text: "รายละเอียดน้ำผุดตาดเต่า",
                    type: "message",
                    label: "รายละเอียด",
                  },
                },
                {
                  height: "sm",
                  gravity: "bottom",
                  type: "button",
                  color: "#FFFFFFFF",
                  style: "secondary",
                  action: {
                    type: "message",
                    text: "เวลาน้ำผุดตาดเต่า",
                    label: "เวลาทำการ",
                  },
                },
                {
                  action: {
                    type: "message",
                    text: "เส้นทางไปน้ำผุดตาดเต่า",
                    label: "แผนที่",
                  },
                  color: "#FFFFFFFF",
                  style: "secondary",
                  height: "sm",
                  gravity: "bottom",
                  type: "button",
                },
                {
                  height: "sm",
                  action: {
                    label: "ค่าเข้าชม",
                    type: "message",
                    text: "ค่าเข้าน้ำผุดตาดเต่า",
                  },
                  type: "button",
                  color: "#FFFFFFFF",
                  style: "secondary",
                  gravity: "bottom",
                },
                {
                  size: "sm",
                  type: "spacer",
                },
              ],
            },
            body: {
              layout: "vertical",
              action: {
                type: "message",
                text: "น้ำผุดตาดเต่า",
                label: "น้ำผุดตาดเต่า",
              },
              type: "box",
              contents: [
                {
                  text: "น้ำผุดตาดเต่า",
                  contents: [],
                  weight: "bold",
                  align: "start",
                  type: "text",
                  size: "xl",
                  color: "#000000FF",
                },
                {
                  contents: [
                    {
                      type: "box",
                      layout: "baseline",
                      contents: [
                        {
                          size: "md",
                          color: "#5B5858FF",
                          text: "ประเภท : อำเภอภูผาม่าน",
                          contents: [],
                          type: "text",
                        },
                      ],
                      spacing: "sm",
                    },
                    {
                      layout: "baseline",
                      spacing: "sm",
                      type: "box",
                      contents: [
                        {
                          type: "text",
                          align: "start",
                          color: "#5B5858FF",
                          text: "ขอบคุณภาพจาก : คุณ Mr​Deer ",
                          contents: [],
                          size: "xs",
                        },
                      ],
                    },
                  ],
                  layout: "vertical",
                  spacing: "sm",
                  type: "box",
                  margin: "lg",
                },
              ],
            },
          },
          {
            body: {
              action: {
                label: "ถ้ำค้างคาว",
                type: "message",
                text: "ถ้ำค้างคาว",
              },
              type: "box",
              contents: [
                {
                  text: "ถ้ำค้างคาว",
                  type: "text",
                  contents: [],
                  weight: "bold",
                  size: "xl",
                  align: "start",
                  color: "#000000FF",
                },
                {
                  contents: [
                    {
                      layout: "baseline",
                      spacing: "sm",
                      contents: [
                        {
                          contents: [],
                          size: "md",
                          type: "text",
                          text: "ประเภท : อำเภอภูผาม่าน",
                          color: "#5B5858FF",
                        },
                      ],
                      type: "box",
                    },
                    {
                      contents: [
                        {
                          contents: [],
                          color: "#5B5858FF",
                          type: "text",
                          text: "ขอบคุณภาพจาก : สำนักอุทยานแห่งชาติ",
                          size: "xs",
                          align: "start",
                        },
                      ],
                      layout: "baseline",
                      spacing: "sm",
                      type: "box",
                    },
                  ],
                  layout: "vertical",
                  margin: "lg",
                  spacing: "sm",
                  type: "box",
                },
              ],
              layout: "vertical",
            },
            direction: "ltr",
            footer: {
              type: "box",
              spacing: "sm",
              layout: "vertical",
              contents: [
                {
                  type: "separator",
                  color: "#696969FF",
                  margin: "xl",
                },
                {
                  height: "sm",
                  style: "secondary",
                  action: {
                    label: "รายละเอียด",
                    type: "message",
                    text: "รายละเอียดถ้ำค้างคาว",
                  },
                  type: "button",
                  color: "#FEFEFEFF",
                  gravity: "bottom",
                },
                {
                  style: "secondary",
                  action: {
                    type: "message",
                    text: "เวลาถ้ำค้างคาว",
                    label: "เวลาทำการ",
                  },
                  height: "sm",
                  gravity: "bottom",
                  type: "button",
                  color: "#FFFFFFFF",
                },
                {
                  color: "#FFFFFFFF",
                  action: {
                    text: "เส้นทางไปถ้ำค้างคาว",
                    type: "message",
                    label: "แผนที่",
                  },
                  style: "secondary",
                  type: "button",
                  height: "sm",
                  gravity: "bottom",
                },
                {
                  color: "#FFFFFFFF",
                  gravity: "bottom",
                  type: "button",
                  action: {
                    label: "ค่าเข้าชม",
                    text: "ค่าเข้าถ้ำค้างคาว",
                    type: "message",
                  },
                  height: "sm",
                  style: "secondary",
                },
                {
                  type: "spacer",
                  size: "sm",
                },
              ],
            },
            type: "bubble",
            hero: {
              url: "https://files.thailandtourismdirectory.go.th/assets/upload/2018/03/28/2018032896a1975a4b8aa10b68fff992e6e93c24104407.jpg",
              size: "full",
              aspectMode: "cover",
              type: "image",
              aspectRatio: "20:13",
              action: {
                label: "Line",
                uri: "https://linecorp.com/",
                type: "uri",
              },
            },
          },
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
                          text: "ขอบคุณภาพจาก: อุทยานแห่งชาติภูผาม่าน - Phuphaman National Park",
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
                    label: "เวลาทำการ",
                    text: "เวลาทำการอุทยานแห่งชาติภูผาม่าน",
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
              url: "https://raw.githubusercontent.com/ArreerakKlangindet/image-storage/main/image-detail/PhuPhaManNationalPark1.jpg",
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
        ],
        type: "carousel",
      },
    },
    PhuWiang: {
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
                    label: "เวลาทำการ",
                    text: "เวลาทำการวัดแก้วจักรพรรดิสิริสุทธาวาส",
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
              url: "https://raw.githubusercontent.com/ArreerakKlangindet/image-storage/main/image-detail/KaewChakkraphat1.jpg",
              type: "image",
            },
          },
        ],
        type: "carousel",
      },
      type: "flex",
    },
    PueaiNoi: {
      altText: "อำเภอเปือยน้อย",
      type: "flex",
      contents: {
        contents: [
          {
            hero: {
              size: "full",
              action: {
                uri: "https://linecorp.com/",
                label: "Line",
                type: "uri",
              },
              url: "https://cbtthailand.dasta.or.th/upload-file-api/Resources/RelateAttraction/Images/RAT400168/1.jpeg",
              aspectRatio: "20:13",
              aspectMode: "cover",
              type: "image",
            },
            direction: "ltr",
            type: "bubble",
            body: {
              action: {
                type: "message",
                label: "ปราสาทเปือยน้อย",
                text: "ปราสาทเปือยน้อย",
              },
              contents: [
                {
                  text: "ปราสาทเปือยน้อย",
                  size: "xl",
                  weight: "bold",
                  type: "text",
                  align: "start",
                  contents: [],
                  color: "#000000FF",
                },
                {
                  spacing: "sm",
                  type: "box",
                  contents: [
                    {
                      contents: [
                        {
                          contents: [],
                          size: "md",
                          text: "อำเภอ : เปือยน้อย",
                          type: "text",
                          color: "#5B5858FF",
                        },
                      ],
                      layout: "baseline",
                      spacing: "sm",
                      type: "box",
                    },
                    {
                      contents: [
                        {
                          color: "#5B5858FF",
                          contents: [],
                          type: "text",
                          wrap: true,
                          text: "ขอบคุณภาพจาก: CBT thailand",
                          size: "xs",
                          align: "start",
                        },
                      ],
                      type: "box",
                      spacing: "sm",
                      layout: "baseline",
                    },
                  ],
                  margin: "lg",
                  layout: "vertical",
                },
              ],
              type: "box",
              layout: "vertical",
            },
            footer: {
              layout: "vertical",
              contents: [
                {
                  margin: "xl",
                  color: "#696969FF",
                  type: "separator",
                },
                {
                  gravity: "bottom",
                  color: "#FEFEFEFF",
                  style: "secondary",
                  height: "sm",
                  action: {
                    type: "message",
                    label: "รายละเอียด",
                    text: "รายละเอียดปราสาทเปือยน้อย",
                  },
                  type: "button",
                },
                {
                  type: "button",
                  style: "secondary",
                  gravity: "bottom",
                  action: {
                    label: "เวลาทำการ",
                    text: "เวลาทำการปราสาทเปือยน้อย",
                    type: "message",
                  },
                  color: "#FFFFFFFF",
                  height: "sm",
                },
                {
                  action: {
                    text: "เส้นทางไปปราสาทเปือยน้อย",
                    type: "message",
                    label: "แผนที่",
                  },
                  type: "button",
                  style: "secondary",
                  gravity: "bottom",
                  color: "#FFFFFFFF",
                  height: "sm",
                },
                {
                  gravity: "bottom",
                  height: "sm",
                  type: "button",
                  style: "secondary",
                  action: {
                    text: "ค่าเข้าปราสาทเปือยน้อย",
                    label: "ค่าเข้าชม",
                    type: "message",
                  },
                  color: "#FFFFFFFF",
                },
                {
                  type: "spacer",
                  size: "sm",
                },
              ],
              type: "box",
              spacing: "sm",
            },
          },
        ],
        type: "carousel",
      },
    },
    SiChomphu: {
      contents: {
        contents: [
          {
            body: {
              contents: [
                {
                  weight: "bold",
                  type: "text",
                  color: "#000000FF",
                  size: "xl",
                  text: "วัดถ้ำแสงธรรม",
                  align: "start",
                  contents: [],
                },
                {
                  margin: "lg",
                  contents: [
                    {
                      type: "box",
                      contents: [
                        {
                          color: "#5B5858FF",
                          type: "text",
                          size: "md",
                          contents: [],
                          text: "อำเภอ : สีชมพู",
                        },
                      ],
                      layout: "baseline",
                      spacing: "sm",
                    },
                    {
                      spacing: "sm",
                      contents: [
                        {
                          text: "ขอบคุณภาพจาก: องค์การบริหารส่วนตำบลบริบูรณ์",
                          color: "#5B5858FF",
                          align: "start",
                          size: "xs",
                          type: "text",
                          wrap: true,
                          contents: [],
                        },
                      ],
                      layout: "baseline",
                      type: "box",
                    },
                  ],
                  spacing: "sm",
                  type: "box",
                  layout: "vertical",
                },
              ],
              type: "box",
              action: {
                label: "วัดถ้ำแสงธรรม",
                type: "message",
                text: "วัดถ้ำแสงธรรม",
              },
              layout: "vertical",
            },
            footer: {
              layout: "vertical",
              contents: [
                {
                  margin: "xl",
                  color: "#696969FF",
                  type: "separator",
                },
                {
                  height: "sm",
                  style: "secondary",
                  gravity: "bottom",
                  type: "button",
                  color: "#FEFEFEFF",
                  action: {
                    text: "รายละเอียดวัดถ้ำแสงธรรม",
                    type: "message",
                    label: "รายละเอียด",
                  },
                },
                {
                  color: "#FFFFFFFF",
                  type: "button",
                  height: "sm",
                  style: "secondary",
                  action: {
                    text: "เวลาทำการวัดถ้ำแสงธรรม",
                    label: "เวลาทำการ",
                    type: "message",
                  },
                  gravity: "bottom",
                },
                {
                  action: {
                    text: "เส้นทางไปวัดถ้ำแสงธรรม",
                    label: "แผนที่",
                    type: "message",
                  },
                  gravity: "bottom",
                  type: "button",
                  color: "#FFFFFFFF",
                  style: "secondary",
                  height: "sm",
                },
                {
                  gravity: "bottom",
                  color: "#FFFFFFFF",
                  style: "secondary",
                  height: "sm",
                  type: "button",
                  action: {
                    text: "ค่าเข้าวัดถ้ำแสงธรรม",
                    label: "ค่าเข้าชม",
                    type: "message",
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
            hero: {
              size: "full",
              type: "image",
              action: {
                uri: "https://linecorp.com/",
                type: "uri",
                label: "Line",
              },
              aspectRatio: "20:13",
              url: "https://www.boriboon.go.th/docs/img/83caf9c0-e091-11ec-8d9d-1ffa639e91b5_webp_original.jpg",
              aspectMode: "cover",
            },
            type: "bubble",
            direction: "ltr",
          },
        ],
        type: "carousel",
      },
      altText: "อำเภอสีชมพู",
      type: "flex",
    },
    Ubolratana: {
      altText: "อำเภออุบลรัตน์",
      contents: {
        type: "carousel",
        contents: [
          {
            hero: {
              type: "image",
              url: "https://img.wongnai.com/p/1920x0/2019/08/04/b5537fd0fa6e4d0da105b8e856f2a11e.jpg",
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
                          text: "ขอบคุณภาพจาก: HappyTime1184",
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
                    text: "เวลาทำการบางแสน 2",
                    label: "เวลาทำการ",
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
                    label: "เวลาทำการ",
                    text: "เวลาทำการเขื่อนอุบลรัตน์",
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
    },
    WiangKao: {
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
                    text: "เวลาทำการอุทยานแห่งชาติภูเวียง",
                    type: "message",
                    label: "เวลาทำการ",
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
                    label: "เวลาทำการ",
                    type: "message",
                    text: "เวลาทำการผาชมตะวัน",
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
                    text: "เวลาทำการน้ำตกตาดฟ้า",
                    label: "เวลาทำการ",
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
                          text: "ขอบคุณภาพจาก: FB: Journey Directory",
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
              url: "https://raw.githubusercontent.com/ArreerakKlangindet/image-storage/main/image-detail/TatFah4.jpg",
            },
          },
        ],
        type: "carousel",
      },
    },
  };
  if (questionText.includes("บ้านฝาง")) {
    agent.add(
      new Payload(agent.LINE, flexMessages.BanFang, { sendAsMessage: true })
    );
  } else if (questionText.includes("ชุมแพ")) {
    agent.add(
      new Payload(agent.LINE, flexMessages.ChumPhae, { sendAsMessage: true })
    );
  } else if (questionText.includes("เขาสวนกวาง")) {
    agent.add(
      new Payload(agent.LINE, flexMessages.KhaoSuanKwang, {
        sendAsMessage: true,
      })
    );
  } else if (questionText.includes("กระนวน")) {
    agent.add(
      new Payload(agent.LINE, flexMessages.Kranuan, { sendAsMessage: true })
    );
  } else if (questionText.includes("อำเภอเมือง")) {
    agent.add(
      new Payload(agent.LINE, flexMessages.Mueang, { sendAsMessage: true })
    );
  } else if (questionText.includes("น้ำพอง")) {
    agent.add(
      new Payload(agent.LINE, flexMessages.NamPhong, { sendAsMessage: true })
    );
  } else if (questionText.includes("หนองเรือ")) {
    agent.add(
      new Payload(agent.LINE, flexMessages.NongRuea, { sendAsMessage: true })
    );
  } else if (questionText.includes("ภูผาม่าน")) {
    agent.add(
      new Payload(agent.LINE, flexMessages.PhuPhaMan, { sendAsMessage: true })
    );
  } else if (questionText.includes("ภูเวียง")) {
    agent.add(
      new Payload(agent.LINE, flexMessages.PhuWiang, { sendAsMessage: true })
    );
  } else if (questionText.includes("เปือยน้อย")) {
    agent.add(
      new Payload(agent.LINE, flexMessages.PueaiNoi, { sendAsMessage: true })
    );
  } else if (questionText.includes("อุบลรัตน์")) {
    agent.add(
      new Payload(agent.LINE, flexMessages.SiChomphu, { sendAsMessage: true })
    );
  } else if (questionText.includes("สีชมพู")) {
    agent.add(
      new Payload(agent.LINE, flexMessages.Ubolratana, { sendAsMessage: true })
    );
  } else if (questionText.includes("เวียงเก่า")) {
    agent.add(
      new Payload(agent.LINE, flexMessages.Ubolratana, { sendAsMessage: true })
    );
  } else {
    agent.add("ขออภัย ไม่พบข้อมูลสถานที่นี้");
  }
};

module.exports = sendDistrictFlexMessage;
