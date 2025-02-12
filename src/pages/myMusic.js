import styles from "@/styles/myMusic.module.scss";
export default function MyMusic() {

  return <div className={styles.myMusic}>
    <div className={styles.myMusicBackground}>
     <div className={styles.myMusicBackgroundInner}>
      <div className={styles.myMusicBackgroundInnertop}></div>
      <div className={styles.myMusicBackgroundInnerbottom}></div>
     </div>
    </div>
  </div>;
}
