import styles from "@/styles/layout/Layout.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Input, Button, Slider } from "tdesign-react/lib/";
import { Icon } from "tdesign-icons-react";
import { useMusicPlayer } from "@/context/MusicContext";

const Layout = ({ children }) => {
  const router = useRouter();

  const [activeIndex, setActiveIndex] = useState(0);
  const handleNavClick = (index) => {
    setActiveIndex(index);
  };
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    console.log("搜索内容:", searchValue);
  };
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  const handleMouseEnter = () => {
    if (!isPlayerBoxVisible) {
      setIsPlayerVisible(true);
    }
  };
  const handleMouseLeave = () => {
    if (!isPlayerBoxVisible) {
      setIsPlayerVisible(false);
    }
  };
  const [isPlayerBoxVisible, setIsPlayerBoxVisible] = useState(false);
  const handlePlayerBoxClick = () => {
    const newState = !isPlayerBoxVisible;
    setIsPlayerBoxVisible(newState);

    if (newState) {
      setIsPlayerVisible(true);
    } else {
      const windowHeight = window.innerHeight;
      const mouseY = window.event.clientY;
      setIsPlayerVisible(mouseY > windowHeight - 150);
    }
  };
  const {
    currentTime,
    totalTime,
    progress,
    currentSong,
    volume,
    setVolume,
    isPlaying,
    playNewSong,
    togglePlay,
    seekTo,
  } = useMusicPlayer();

  // 添加格式化时间的辅助函数
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    if (activeIndex === 0) {
      router.push("/");
    } else if (activeIndex === 1) {
      router.push("/myMusic");
    } else if (activeIndex === 2) {
      router.push("/follow");
    } else if (activeIndex === 3) {
      router.push("/shop");
    } else if (activeIndex === 4) {
      router.push("/music");
    } else if (activeIndex === 5) {
      router.push("/cloud");
    } else if (activeIndex === 6) {
      router.push("/download");
    }
  }, [activeIndex]);

  useEffect(() => {
    // 使用节流函数来限制事件处理的频率
    const throttle = (func, limit) => {
      let inThrottle;
      return function (...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    };

    const handleMouseMove = throttle((event) => {
      if (!isPlayerBoxVisible) {
        const windowHeight = window.innerHeight;
        const mouseY = event.clientY;
        setIsPlayerVisible(mouseY > windowHeight - 150);
      }
    }, 300);

    if (!isPlayerBoxVisible) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isPlayerBoxVisible]);

  // 处理进度条改变
  const handleSliderChange = (newValue) => {
    const newTime = seekTo(newValue);
    // 这里可以调用音频播放器的seek方法
  };

  // 播放音乐示例
  const handlePlayClick = () => {
    if (isPlaying) {
      togglePlay();
      return;
    }

    if (currentSong?.url === "/music/yzgf.mp3") {
      togglePlay();
    } else {
      playNewSong({
        url: "/music/yzgf.mp3",
        name: "远走高飞",
        singer: "高志远",
        album: "歌单",
      });
    }
  };
  const [volumeBar, setVolumeBar] = useState(false);
  
  // 修改音量控制点击处理函数
  const hanldeVolumeBar = (e) => {
    // 确保点击的是音量图标而不是滑块
    if (e.target.className === styles.ctrlItemOne) {
      setVolumeBar(!volumeBar);
    }
  };
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerBox}>
          <div className={styles.titleClass}>
            {/* <img src="/images/topbar.png" alt="topbar" className={styles.topbarImg} /> */}
          </div>
          <nav className={styles.nav}>
            <div
              className={`${styles.navItem} ${
                activeIndex === 0 ? styles.active : ""
              }`}
              onClick={() => handleNavClick(0)}
            >
              <p>发现音乐</p>
              <div
                className={activeIndex === 0 ? styles.navItemIcon : ""}
              ></div>
            </div>
            <div
              className={`${styles.navItem} ${
                activeIndex === 1 ? styles.active : ""
              }`}
              onClick={() => handleNavClick(1)}
            >
              <p>我的音乐</p>
              <div
                className={activeIndex === 1 ? styles.navItemIcon : ""}
              ></div>
            </div>
            <div
              className={`${styles.navItem} ${
                activeIndex === 2 ? styles.active : ""
              }`}
              onClick={() => handleNavClick(2)}
            >
              <p>关注</p>
              <div
                className={activeIndex === 2 ? styles.navItemIcon : ""}
              ></div>
            </div>
            <div
              className={`${styles.navItem} ${
                activeIndex === 3 ? styles.active : ""
              }`}
              onClick={() => handleNavClick(3)}
            >
              <p>商城</p>
              <div
                className={activeIndex === 3 ? styles.navItemIcon : ""}
              ></div>
            </div>
            <div
              className={`${styles.navItem} ${
                activeIndex === 4 ? styles.active : ""
              }`}
              onClick={() => handleNavClick(4)}
            >
              <p>音乐人</p>
              <div
                className={activeIndex === 4 ? styles.navItemIcon : ""}
              ></div>
            </div>
            <div
              className={`${styles.navItem} ${
                activeIndex === 5 ? styles.active : ""
              }`}
              onClick={() => handleNavClick(5)}
            >
              <p>云推歌</p>
              <div
                className={activeIndex === 5 ? styles.navItemIcon : ""}
              ></div>
            </div>
            <div
              className={`${styles.navItem} ${
                activeIndex === 6 ? styles.active : ""
              }`}
              onClick={() => handleNavClick(6)}
            >
              <p>下载客户端</p>
              <div
                className={activeIndex === 6 ? styles.navItemIcon : ""}
              ></div>
            </div>
            <Input
              placeholder="音乐/视频/电台/用户"
              value={searchValue}
              prefixIcon={<Icon name="search" />}
              className={styles.searchInput}
            />
            <div className={styles.createCenter}>
              <p>创作者中心</p>
            </div>
            <Button variant="text" className={styles.loginBtn}>
              登录
            </Button>
          </nav>
        </div>
        <div
          className={`${
            activeIndex === 0 ? styles.headerBottomBold : styles.headerBottom
          }`}
        >
          {activeIndex === 0 ? (
            <div className={styles.headerBottomItem}>
              <div className={styles.hasHover}>
                <p>推荐</p>
              </div>
              <div>
                <p>排行榜</p>
              </div>
              <div>
                <p>歌单</p>
              </div>
              <div>
                <p>主播电台</p>
              </div>
              <div>
                <p>歌手</p>
              </div>
              <div>
                <p>新碟上架</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerBox}>
          <div className={styles.footerTopContainer}>
            <div className={styles.footerTopItem}>
              <a className={styles.footerTopItemImgOne} />
              <p className={styles.footerTopItemTextOne}>音乐开放平台</p>
            </div>
            <div className={styles.footerTopItem}>
              <a className={styles.footerTopItemImgTwo} />
              <p className={styles.footerTopItemTextOne}>云村交易所</p>
            </div>
            <div className={styles.footerTopItem}>
              <a className={styles.footerTopItemImgThree} />
              <p className={styles.footerTopItemTextOne}>X StudioAI歌手</p>
            </div>
            <div className={styles.footerTopItem}>
              <a className={styles.footerTopItemImgFour} />
              <p className={styles.footerTopItemTextOne}>用户认证</p>
            </div>
            <div className={styles.footerTopItem}>
              <a className={styles.footerTopItemImgFive} />
              <p className={styles.footerTopItemTextOne}>AI 免费写歌</p>
            </div>
            <div className={styles.footerTopItem}>
              <a className={styles.footerTopItemImgSix} />
              <p className={styles.footerTopItemTextOne}>云推歌</p>
            </div>
            <div className={styles.footerTopItem}>
              <a className={styles.footerTopItemImgSeven} />
              <p className={styles.footerTopItemTextOne}>赞赏</p>
            </div>
          </div>
          <div className={styles.footerBottomContainer}>
            <div className={styles.footerLinks}>
              <a href="#">服务条款</a>
              <span className={styles.line}>|</span>
              <a href="#">隐私政策</a>
              <span className={styles.line}>|</span>
              <a href="#">儿童隐私政策</a>
              <span className={styles.line}>|</span>
              <a href="#">版权投诉</a>
              <span className={styles.line}>|</span>
              <a href="#">投资者关系</a>
              <span className={styles.line}>|</span>
              <a href="#">广告合作</a>
              <span className={styles.line}>|</span>
              <a href="#">联系我们</a>
            </div>
            <div className={styles.footerInfo}>
              <p>
                <span style={{ marginRight: 14 + "px" }}>廉正举报</span>
                <span style={{ marginRight: 14 + "px" }}>
                  不良信息举报邮箱: 51jubao@service.netease.com
                </span>
                客服热线：95163298
              </p>
              <p>
                互联网宗教信息服务许可证：浙（2022）0000120
                增值电信业务经营许可证：浙B2-20150198 粤B2-20090191-18
                工业和信息化部备案管理系统网站
              </p>
              <p>
                <span style={{ marginRight: 14 + "px" }}>
                  网易公司版权所有©1997-2025
                </span>
                杭州乐读科技有限公司运营：浙网文[2024]0900-042号{" "}
                <img
                  src="/images/police.png"
                  alt="police"
                  className={styles.policeIcon}
                  style={{ marginRight: 14 + "px" }}
                />{" "}
                浙公网安备 33010802013307号 算法服务公示信息
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div
        className={`${styles.player} ${
          isPlayerVisible ? styles.playerVisible : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.playerBox}>
          <a
            className={
              isPlayerBoxVisible
                ? styles.playerBoxImgActive
                : styles.playerBoxImg
            }
            onClick={handlePlayerBoxClick}
          ></a>
        </div>
        <div className={styles.bg}></div>
        <div className={styles.wrap}>
          <div className={styles.btns}>
            <a className={styles.btnsItemOne}></a>
            {/* 播放 */}
            <a
              className={
                isPlaying ? styles.btnsItemTwoActive : styles.btnsItemTwo
              }
              onClick={handlePlayClick}
            ></a>
            <a className={styles.btnsItemThree}></a>
          </div>
          <div className={styles.head}>
            <img
              src="/images/default_album.jpg"
              alt="head"
              className={styles.headImg}
            />
          </div>
          <div className={styles.play}>
            <div className={styles.songName}>
              <p className={styles.songNameItemOne}>
                {currentSong ? currentSong.name : ""}
              </p>
              <p className={styles.songNameItemTwo}>
                {currentSong ? currentSong.singer : ""}
              </p>
              {currentSong && <a className={styles.songNameItemThree}></a>}
            </div>
            <Slider
              value={progress}
              onChange={handleSliderChange}
              label={false}
              className={styles.progressTd}
            ></Slider>
            <div className={styles.time}>
              <div className={styles.timeLeft}>{formatTime(currentTime)}</div>
              <div className={styles.timeCenter}>/</div>
              <div className={styles.timeRight}>{formatTime(totalTime)}</div>
            </div>
          </div>
          <div className={styles.oper}>
            <div className={styles.operItemOne}></div>
            <div className={styles.operItemTwo}></div>
            <div className={styles.operItemThree}></div>
          </div>
          <div className={styles.ctrl}>
            {/* 音量 */}
            <a className={styles.ctrlItemOne} onClick={hanldeVolumeBar}>
              {volumeBar && (
                <div className={styles.volumebarContainer}>
                  <Slider
                    value={volume}
                    onChange={(value) => setVolume(value)}
                    label={false}
                    className={styles.volumebar}
                    layout="vertical"
                  ></Slider>
                </div>
              )}
            </a>
            <div className={styles.ctrlItemTwo}></div>
            <span className={styles.ctrlItemThree}>
              <a className={styles.ctrlItemThreeItemOne}>0</a>
            </span>
            <a className={styles.ctrlItemFour}></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
