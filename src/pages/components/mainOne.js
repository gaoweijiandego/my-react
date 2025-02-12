import styles from "@/styles/mainOne.module.scss";
import { Button, Swiper } from "tdesign-react/lib/";
import { Icon } from "tdesign-icons-react";
import { useEffect, useState } from "react";
const { SwiperItem } = Swiper;
export default function MainOne({ data }) {
  const [singerData, setSingerData] = useState([]);
  const [discData, setDiscData] = useState(null);
  useEffect(() => {
    if (!data?.disc) return;

    const filterSinger = ["张惠妹", "吴莫愁", "孙楠", "陈楚生", "麦田老狼"];
    const tmpData = data.singers;
    const filterData = tmpData.filter((item) => {
      return filterSinger.includes(item.name);
    });
    setSingerData(filterData);
    const groupedDiscData = data.disc.reduce((acc, curr, index) => {
      const groupIndex = Math.floor(index / 5); // 每5个元素分为一组
      if (!acc[groupIndex]) {
        acc[groupIndex] = []; // 初始化新组
      }
      acc[groupIndex].push(curr); // 将当前元素添加到对应组
      return acc;
    }, []);
    setDiscData(groupedDiscData);
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
  const AnchorSrc = [
    {
      name: "陈立",
      // 描述
      describe: "心理学家、美食家陈立教授",
      // 图片
      src: "/images/anchor/1407374893913311.jpg",
    },
    {
      name: "刘维-Julius",
      describe: "歌手、播客节目《维维道来》主理人",
      src: "/images/anchor/109951164843970584.jpg",
    },
    {
      name: "莫非定律乐团",
      describe: "男女双人全创作独立乐团",
      src: "/images/anchor/109951170205405591.jpg",
    },
    {
      name: "碎嘴许美达",
      describe: "脱口秀网络红人",
      src: "/images/anchor/109951165825466770.jpg",
    },
    {
      name: "银临Rachel",
      describe: "",
      src: "/images/anchor/109951168919647064.jpg",
    },
  ];
  const RankSrc = [
    [{
      index: 1,
      name: "My love",
    },
    {
      index: 2,
      name: "嗵嗵",
    },
    {
      index: 3,
      name: "游山恋 (Album Version)",
    },
    {
      index: 4,
      name: "Born Again",
    },
    {
      index: 5,
      name: "牵丝戏",
    },
    {
      index: 6,
      name: "当然要快乐",
    },
    {
      index: 7,
      name: "越来越不懂",
    },
    {
      index: 8,
      name: "我才是奶龙",
    },
    {
      index: 9,
      name: "Again",
    },
    {
      index: 10,
      name: "phone kisses",
    }],
    [{
      index: 1,
      name: "世界赠予我的",
    },
    {
      index: 2,
      name: "嗵嗵",
    },
    {
      index: 3,
      name: "没有如果",
    },
    {
      index: 4,
      name: "不管正派反派,吃个年夜饭先!!",
    },
    {
      index: 5,
      name: "歌曲：岁月里的花（live）",
    },
    {
      index: 6,
      name: "多喜欢你 2025",
    },
    {
      index: 7,
      name: "Born Again",
    },
    {
      index: 8,
      name: "拼好歌",
    },
    {
      index: 9,
      name: "歌曲：方的言（live）",
    },
    {
      index: 10,
      name: "歌曲：Counting Stars（live）",
    }],
    [{
      index: 1,
      name: "a kite",
    },
    {
      index: 2,
      name: "有个小的地方",
    },
    {
      index: 3,
      name: "厂妹",
    },
    {
      index: 4,
      name: "长生咒",
    },
    {
      index: 5,
      name: "自卑亭记",
    },
    {
      index: 6,
      name: "迟到的读后感",
    },
    {
      index: 7,
      name: "你欠我的",
    },
    {
      index: 8,
      name: "为什么我爱你",
    },
    {
      index: 9,
      name: "蝶之诗",
    },
    {
      index: 10,
      name: "眼泪来信",
    }]
  ];
  return (
    <div className={styles.mainOne}>
      {/* 左侧 */}
      <div className={styles.mainOneLeft}>
        {/* 热门推荐 */}
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
        {/* 歌单推荐 */}
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
        {/* 新碟上架 */}
        <div className={styles.mainOneLeftDisc}>
          <div className={styles.mainOneLeftDiscTitleContainer}>
            <div className={styles.mainOneLeftDiscTitleLeft}>
              <div className={styles.mainOneLeftDiscTitleCircle}></div>
              <p className={styles.mainOneLeftDiscTitleText}>新碟上架</p>
            </div>
            <div className={styles.mainOneLeftDiscTitleRight}>
              <p>更多</p>
              <Icon
                name="arrow-right"
                className={styles.mainOneLeftDiscTitleRightIcon}
              />
            </div>
          </div>
          {/* 新碟上架内容 */}
          <div className={styles.mainOneLeftDiscContent}>
            {discData ? (
              <Swiper
                className={styles.swiper}
                duration={1500}
                autoplay={false}
                navigation={{ placement: "outside", type: "dots" }}
              >
                <SwiperItem>
                  {discData[0].map((item, index) => (
                    <div className={styles.swiperItemContainer} key={index}>
                      <div className={styles.backGroundImg}>
                        <img
                          src={item.url}
                          alt=""
                          className={styles.swiperItemTextContainerImg}
                        />
                        <div className={styles.swiperItemTextContainerTitle}>
                          {item.title}
                        </div>
                        <div className={styles.swiperItemTextContainerText}>
                          {item.singers}
                        </div>
                      </div>
                    </div>
                  ))}
                </SwiperItem>
                <SwiperItem>
                  {discData[1].map((item, index) => (
                    <div className={styles.swiperItemContainer} key={index}>
                      <div className={styles.backGroundImg}>
                        <img
                          src={item.url}
                          alt=""
                          className={styles.swiperItemTextContainerImg}
                        />
                        <div className={styles.swiperItemTextContainerTitle}>
                          {item.title}
                        </div>
                        <div className={styles.swiperItemTextContainerText}>
                          {item.singers}
                        </div>
                      </div>
                    </div>
                  ))}
                </SwiperItem>
              </Swiper>
            ) : (
              <div>加载中...</div>
            )}
          </div>
        </div>
        {/* 榜单 */}
        <div className={styles.mainOneLeftRank}>
          <div className={styles.mainOneLeftRankTitleContainer}>
            <div className={styles.mainOneLeftRankTitleLeft}>
              <div className={styles.mainOneLeftRankTitleCircle}></div>
              <p className={styles.mainOneLeftRankTitleText}>榜单</p>
            </div>
            <div className={styles.mainOneLeftRankTitleRight}>
              <p>更多</p>
              <Icon
                name="arrow-right"
                className={styles.mainOneLeftRankTitleRightIcon}
              />
            </div>
          </div>
          {/* 榜单内容 */}
          <div className={styles.mainOneLeftRankContent}>
            {/* 左 */}
            <div className={styles.mainOneLeftRankContentLeft}>
              <div className={styles.mainOneLeftRankContentLeftImageContainer}>
                <div
                  className={styles.mainOneLeftRankContentLeftImageBox}
                >
                  <img
                    src="/images/rank/109951170048506929.jpg"
                    alt=""
                    className={styles.mainOneLeftRankContentLeftImageBoxImg}
                  />
                  <div className={styles.mainOneLeftRankContentLeftImageBoxText}>
                    <p className={styles.mainOneLeftRankContentLeftImageBoxTextTitle}>飙升榜</p>
                   <div className={styles.mainOneLeftRankContentLeftImageBoxTextIconContainer}>
                      <Icon name="play-circle-stroke" className={styles.mainOneLeftRankContentLeftImageBoxTextIcon}/>
                      <Icon name="folder-add-1" className={styles.mainOneLeftRankContentLeftImageBoxTextIcon}/>
                   </div>
                  </div>
                </div>
              </div>
              <div className={styles.mainOneLeftRankContentLeftList}>
                {RankSrc[0].map((item, index) => (
                  <div className={styles.mainOneLeftRankContentLeftItem} key={index}>
                    <div className={styles.mainOneLeftRankContentLeftItemIndex}>{item.index}</div>
                    <div className={styles.mainOneLeftRankContentLeftItemName}>{item.name}</div>
                    <div className={styles.mainOneLeftRankContentLeftItemIconContainer}>
                      <Icon name="play-circle-stroke" className={styles.mainOneLeftRankContentLeftImageBoxTextIcon}/>
                      <Icon name="plus" className={styles.mainOneLeftRankContentLeftImageBoxTextIcon}/>
                      <Icon name="folder-add-1" className={styles.mainOneLeftRankContentLeftImageBoxTextIcon}/>
                    </div>
                  </div>
                  
                ))}
              </div>
              <div className={styles.mainOneLeftRankContentLeftItemMore}>查看全部{'>'}</div>
            </div>
            {/* 中 */}
            <div className={styles.mainOneLeftRankContentCenter}> 
              <div className={styles.mainOneLeftRankContentLeft}>
              <div className={styles.mainOneLeftRankContentLeftImageContainer}>
                <div
                  className={styles.mainOneLeftRankContentLeftImageBox}
                >
                  <img
                    src="/images/rank/109951170048511751.jpg"
                    alt=""
                    className={styles.mainOneLeftRankContentLeftImageBoxImg}
                  />
                  <div className={styles.mainOneLeftRankContentLeftImageBoxText}>
                    <p className={styles.mainOneLeftRankContentLeftImageBoxTextTitle}>新歌榜</p>
                   <div className={styles.mainOneLeftRankContentLeftImageBoxTextIconContainer}>
                      <Icon name="play-circle-stroke" className={styles.mainOneLeftRankContentLeftImageBoxTextIcon}/>
                      <Icon name="folder-add-1" className={styles.mainOneLeftRankContentLeftImageBoxTextIcon}/>
                   </div>
                  </div>
                </div>
              </div>
              <div className={styles.mainOneLeftRankContentLeftList}>
                {RankSrc[1].map((item, index) => (
                  <div className={styles.mainOneLeftRankContentLeftItem} key={index}>
                    <div className={styles.mainOneLeftRankContentLeftItemIndex}>{item.index}</div>
                    <div className={styles.mainOneLeftRankContentLeftItemName}>{item.name}</div>
                    <div className={styles.mainOneLeftRankContentLeftItemIconContainer}>
                      <Icon name="play-circle-stroke" className={styles.mainOneLeftRankContentLeftImageBoxTextIcon}/>
                      <Icon name="plus" className={styles.mainOneLeftRankContentLeftImageBoxTextIcon}/>
                      <Icon name="folder-add-1" className={styles.mainOneLeftRankContentLeftImageBoxTextIcon}/>
                    </div>
                  </div>
                  
                ))}
              </div>
              <div className={styles.mainOneLeftRankContentLeftItemMore}>查看全部{'>'}</div>
            </div></div>
            {/* 右 */}
            <div className={styles.mainOneLeftRankContentRight}> 
              <div className={styles.mainOneLeftRankContentLeft}>
              <div className={styles.mainOneLeftRankContentLeftImageContainer}>
                <div
                  className={styles.mainOneLeftRankContentLeftImageBox}
                >
                  <img
                    src="/images/rank/109951170091896587.jpg"
                    alt=""
                    className={styles.mainOneLeftRankContentLeftImageBoxImg}
                  />
                  <div className={styles.mainOneLeftRankContentLeftImageBoxText}>
                    <p className={styles.mainOneLeftRankContentLeftImageBoxTextTitle}>原创榜</p>
                   <div className={styles.mainOneLeftRankContentLeftImageBoxTextIconContainer}>
                      <Icon name="play-circle-stroke" className={styles.mainOneLeftRankContentLeftImageBoxTextIcon}/>
                      <Icon name="folder-add-1" className={styles.mainOneLeftRankContentLeftImageBoxTextIcon}/>
                   </div>
                  </div>
                </div>
              </div>
              <div className={styles.mainOneLeftRankContentLeftList}>
                {RankSrc[2].map((item, index) => (
                  <div className={styles.mainOneLeftRankContentLeftItem} key={index}>
                    <div className={styles.mainOneLeftRankContentLeftItemIndex}>{item.index}</div>
                    <div className={styles.mainOneLeftRankContentLeftItemName}>{item.name}</div>
                    <div className={styles.mainOneLeftRankContentLeftItemIconContainer}>
                      <Icon name="play-circle-stroke" className={styles.mainOneLeftRankContentLeftImageBoxTextIcon}/>
                      <Icon name="plus" className={styles.mainOneLeftRankContentLeftImageBoxTextIcon}/>
                      <Icon name="folder-add-1" className={styles.mainOneLeftRankContentLeftImageBoxTextIcon}/>
                    </div>
                  </div>
                  
                ))}
              </div>
              <div className={styles.mainOneLeftRankContentLeftItemMore}>查看全部{'>'}</div>
            </div></div>
          </div>
        </div>
      </div>
      {/* 右侧 */}
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
                  <img
                    src={item.url}
                    alt=""
                    className={styles.mainOneRightSingerContentMainItemImg}
                  />
                  <div
                    className={
                      styles.mainOneRightSingerContentMainItemTextContainer
                    }
                  >
                    <div
                      className={
                        styles.mainOneRightSingerContentMainItemTextTop
                      }
                    >
                      {item.name}
                    </div>
                    <div
                      className={
                        styles.mainOneRightSingerContentMainItemTextBottom
                      }
                    >
                      {item.describe}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.mainOneRightSingerContentFooter}>
            <Button
              variant="outline"
              theme="default"
              className={styles.mainOneRightSingerContentFooterButton}
            >
              申请成为网易音乐人
            </Button>
          </div>
        </div>
        {/* 热门主播 */}
        <div className={styles.mainOneRightAnchorContent}>
          <div className={styles.mainOneRightAnchorContentTitle}>
            <p className={styles.mainOneRightAnchorContentTitleLeft}>
              热门主播
            </p>
          </div>
          {/* 热门主播内容 */}
          <div className={styles.mainOneRightAnchorContentMain}>
            {AnchorSrc.map((item, index) => {
              return (
                <div
                  className={styles.mainOneRightAnchorContentMainItem}
                  key={index}
                >
                  <img
                    src={item.src}
                    alt=""
                    className={styles.mainOneRightAnchorContentMainItemImg}
                  />
                  <div className={styles.mainOneRightAnchorContentMainItemText}>
                    <p
                      className={
                        styles.mainOneRightAnchorContentMainItemTextName
                      }
                    >
                      {item.name}
                    </p>
                    <p
                      className={
                        styles.mainOneRightAnchorContentMainItemTextDescribe
                      }
                    >
                      {item.describe}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
