import styles from "@/styles/index/index.module.scss";
import { Swiper } from "tdesign-react/lib/";
const { SwiperItem } = Swiper;
import MainOne from "./components/mainOne";
export async function getStaticProps() {
  let data;
  // 模拟获取数据
  await fetch("http://localhost:3000/api/home")
    .then((res) => res.json())
    .then((res) => {
      data = res;
    });

  return {
    props: {
      data: data, // 将数据传递给页面组件
    },
  };
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.swiperContainer}>
        <Swiper
          className={styles.swiper}
          
          navigation={{ placement: "inside", type: "dots" }}
        >
          {data.map((item, index) => (
            <SwiperItem key={index} className={styles.swiperItem}>
              <img
                src={`data:image/jpeg;base64,${item.data}`}
                alt={`swiper-${index}`}
                className={styles.swiperItemImg}
              />
            </SwiperItem>
          ))}
           
        </Swiper>
        <div className={styles.download}>
          <p className={styles.downloadText}>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
      </div>
      <MainOne />
    </div>
  );
}
