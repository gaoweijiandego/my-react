import styles from "@/styles/Layout/Layout.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Input, Button } from "tdesign-react/lib/";
import { Icon } from "tdesign-icons-react";
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
              <p><span style={{ marginRight:14+'px'}}>廉正举报</span><span style={{ marginRight:14+'px'}}>不良信息举报邮箱: 51jubao@service.netease.com</span>客服热线：95163298</p>
              <p>互联网宗教信息服务许可证：浙（2022）0000120 增值电信业务经营许可证：浙B2-20150198 粤B2-20090191-18 工业和信息化部备案管理系统网站</p>
              <p><span style={{ marginRight:14+'px'}}>网易公司版权所有©1997-2025</span>杭州乐读科技有限公司运营：浙网文[2024]0900-042号 <img src="/images/police.png" alt="police" className={styles.policeIcon} style={{ marginRight:14+'px'}} /> 浙公网安备 33010802013307号 算法服务公示信息</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
