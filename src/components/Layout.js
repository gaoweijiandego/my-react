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
          <div className={styles.titleClass}>网易云音乐</div>
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
            </div>
          ) : (
            ""
          )}
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>© 2025 我的网易云</p>
      </footer>
    </div>
  );
};

export default Layout;
