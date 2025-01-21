export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.status(200).json({
        singers: [
          {
            name: "周杰伦",
            describe: "华语流行乐男歌手",
            url: "/images/zjl.jpg",
          },
          {
            name: "张惠妹",
            describe: "台湾歌手张惠妹",
            url: "/images/zhm.jpg",
          },
          {
            name: "林俊杰",
            describe: "新加坡歌手及音乐制作人",
            url: "/images/ljj.jpg",
          },
          {
            name: "蔡依林",
            describe: "台湾流行女歌手",
            url: "/images/cyj.jpg",
          },
          {
            name: "王力宏",
            describe: "华语流行乐男歌手及演员",
            url: "/images/wlh.jpg",
          },
          {
            name: "邓紫棋",
            describe: "香港女歌手及词曲创作人",
            url: "/images/dzq.jpg",
          },
          {
            name: "吴莫愁",
            describe: "中国大陆女歌手",
            url: "/images/wmc.jpg",
            },
          {
            name: "孙楠",
            describe: "中国大陆男歌手",
            url: "/images/sn.jpg",
          },
          {
            name: "麦田老狼",
            describe: "歌手，音乐人",
            url: "/images/mtll.jpg",
          },
          {
            name: "陈楚生",
            describe: "中国大陆男歌手",
            url: "/images/ccs.jpg",
          },
          {
            name: "杨丞琳",
            describe: "台湾女歌手及演员",
            url: "/images/yl.jpg",
          },
          {
            name: "华晨宇",
            describe: "中国大陆男歌手及音乐制作人",
            url: "/images/hcy.jpg",
          },
        ],
      });

      break;
  }
}
