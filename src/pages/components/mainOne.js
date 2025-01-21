import styles from "@/styles/mainOne/mainOne.module.scss";
import { Button } from "tdesign-react/lib/";
import { Icon } from "tdesign-icons-react";
import { useEffect, useState } from "react";

export default function MainOne({ data }) {
  const [singerData, setSingerData] = useState([]);
  useEffect(() => {
    const filterSinger = ["张惠妹", "吴莫愁", "孙楠", "陈楚生", "麦田老狼"];
    const tmpData = Object.values(data)[0];
    const filterData = tmpData.filter((item) => {
      return filterSinger.includes(item.name);
    });
    setSingerData(filterData);
  }, [data]);
  const PictureSrc = [
    {
      src: "/images/109951163138024517.jpg",
      name: "听说把糖放在枕头底下会做一个甜甜的梦",
      like: 2776,
    },
    {
      src: "/images/1405175861825178.jpg",
      name: "我知道风里有诗，那正是民谣的歌",
      like: 2757,
    },
    {
      src: "/images/1389782698058443.jpg",
      name: "健身必听进行曲",
      like: 4257,
    },
    {
      src: "/images/109951164018765577.jpg",
      name: "美国女歌手泰勒",
      like: 7123,
    },
    {
      src: "/images/109951166370677719.jpg",
      name: "还记得你的梦想吗？别让你的梦只有想",
      like: 1223,
    },
    {
      src: "/images/109951170098917937.jpg",
      name: "000 精彩片花|老六皇子，开局七嫂子",
      like: 30,
    },
    {
      src: "/images/109951170354971852.jpg",
      name: "KPI & OKR:资本家的表演艺术｜又上班了 02",
      like: 923,
    },
    {
      src: "/images/109951170366325987.jpg",
      name: "「纯音乐」你偶尔需要安静的发泄",
      like: 1231,
    },
  ];
  return (
    <div className={styles.mainOne}>
      <div className={styles.mainOneLeft}>
        <div className={styles.mainOneLeftNav}>
          <div className={styles.mainOneLeftNavBackGroundLeft}></div>
          <div className={styles.mainOneLeftNavItemTitle}>热门推荐</div>
          <div className={styles.mainOneLeftNavItemText}>
            <div className={styles.mainOneLeftNavItemTextItem}>华语</div>
            <div>|</div>
            <div className={styles.mainOneLeftNavItemTextItem}>流行</div>
            <div>|</div>
            <div className={styles.mainOneLeftNavItemTextItem}>摇滚</div>
            <div>|</div>
            <div className={styles.mainOneLeftNavItemTextItem}>民谣</div>
            <div>|</div>
            <div className={styles.mainOneLeftNavItemTextItem}>电子</div>
          </div>
          <div className={styles.mainOneLeftNavItemMore}>更多</div>
          <div className={styles.mainOneLeftNavBackGroundRight}>
            <Icon name="arrow-right" />
          </div>
        </div>
        <div className={styles.mainOneLeftPictureContainer}>
          {PictureSrc.map((item, index) => {
            return (
              <div className={styles.mainOneLeftPictureItem} key={index}>
                <img src={item.src} alt="" />
                <div className={styles.mainOneLeftPictureBottomContainer}>
                  <Icon
                    name="earphone"
                    className={styles.mainOneLeftPictureBottomContainerIcon}
                  />
                  <div className={styles.mainOneLeftPictureBottomContainerText}>
                    {item.like + "万"}
                  </div>
                  <Icon
                    name="play-circle-stroke"
                    className={
                      styles.mainOneLeftPictureBottomContainerIconRight
                    }
                  />
                </div>
                <div className={styles.mainOneLeftPictureBottomText}>
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.mainOneRight}>
        <div className={styles.mainOneRightLoginContent}>
          <div className={styles.mainOneRightContentItemBackground}></div>
          <div className={styles.mainOneRightContentItem}>
            <p className={styles.mainOneRightContentItemText}>
              登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
            </p>
            <Button
              variant="base"
              theme="danger"
              className={styles.mainOneRightContentItemButton}
            >
              用户登录
            </Button>
          </div>
        </div>
        <div className={styles.mainOneRightSingerContent}>
          <div className={styles.mainOneRightSingerContentTitle}>
            <p className={styles.mainOneRightSingerContentTitleLeft}>
              入驻歌手
            </p>
            <p className={styles.mainOneRightSingerContentTitleRight}>
              查看全部
              <Icon
                name="arrow-right"
                className={styles.mainOneRightSingerContentTitleRightIcon}
              />
            </p>
          </div>
          <div className={styles.mainOneRightSingerContentMain}>
            {singerData.map((item, index) => {
              return (
                <div
                  className={styles.mainOneRightSingerContentMainContainer}
                  key={index}
                >
                  <img src={item.url} alt="" className={styles.mainOneRightSingerContentMainItemImg} />
                  <div
                    className={
                      styles.mainOneRightSingerContentMainItemTextContainer
                    }
                  >
                    <div
                      className={styles.mainOneRightSingerContentMainItemTextTop}
                    >
                      {item.name}
                    </div>
                    <div
                      className={styles.mainOneRightSingerContentMainItemTextBottom}
                    >
                      {item.describe}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.mainOneRightSingerContentFooter}>
            <Button variant="outline" theme="default" className={styles.mainOneRightSingerContentFooterButton}>
              申请成为网易音乐人
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
