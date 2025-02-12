import styles from "@/styles/404.module.scss";
import { Button } from "tdesign-react/lib/";
import { useRouter } from "next/router";
const Custom404 = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/');
    }
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.titleClass}>404-您访问的页面正在开发中</p>
        <Button variant="outline" theme="primary" onClick={handleClick}>
          点击这里返回首页吧！
        </Button>
      </div>
    </div>
  );
};

export default Custom404;
