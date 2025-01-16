import styles from "@/styles/mainOne/mainOne.module.scss";
import { Button } from "tdesign-react/lib/";
export default function MainOne() {
  return (
    <div className={styles.mainOne}>
      <div className={styles.mainOneLeft}></div>
      <div className={styles.mainOneRight}>
        <div className={styles.mainOneRightContent}>
          <div className={styles.mainOneRightContentItemBackground}></div>
          <div className={styles.mainOneRightContentItem}>
            <p className={styles.mainOneRightContentItemText}>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <Button variant="base" theme="danger" className={styles.mainOneRightContentItemButton}>
              用户登录
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
