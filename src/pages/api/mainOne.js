export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      console.log(req,'sssss');
      res.status(200).json({
        singers: [
          {
            name: "周杰伦",
            describe: "华语流行乐男歌手",
          },
          {
            name: "张惠妹",
            describe: "台湾歌手张惠妹",
          },
          {
            name: "林俊杰",
            describe: "新加坡歌手及音乐制作人",
          },
          {
            name: "蔡依林",
            describe: "台湾流行女歌手",
          },
          {
            name: "王力宏",
            describe: "华语流行乐男歌手及演员",
          },
          {
            name: "邓紫棋",
            describe: "香港女歌手及词曲创作人",
          },
          {
            name: "李荣浩",
            describe: "中国大陆男歌手及音乐制作人",
          },
          {
            name: "薛之谦",
            describe: "中国大陆男歌手及演员",
          },
          {
            name: "张靓颖",
            describe: "中国大陆女歌手",
          },
          {
            name: "陈奕迅",
            describe: "香港男歌手及演员",
          },
          {
            name: "杨丞琳",
            describe: "台湾女歌手及演员",
          },
          {
            name: "华晨宇",
            describe: "中国大陆男歌手及音乐制作人",
          },
        ],
      });

      break;
  }
}
