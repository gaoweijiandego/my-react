import styles from "@/styles/index/index.module.scss";
import { Swiper } from "tdesign-react/lib/";
import { useEffect, useState, useRef } from "react";
import MainOne from "./components/mainOne";

const { SwiperItem } = Swiper;
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
  const [gradientColors, setGradientColors] = useState({
    color1: "hsla(180, 50%, 80%, 0.6)",
    color2: "hsla(190, 50%, 80%, 0.5)",
  });
  const canvasRef = useRef(null);

  // 初始化时设置第一张图片的颜色
  useEffect(() => {
    if (data && data.length > 0) {
      getImageColors(data[0].data).then((colors) => {
        setGradientColors(colors);
      });
    }
  }, []); // 只在组件挂载时执行一次

  const getImageColors = (imageData) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = `data:image/jpeg;base64,${imageData}`;

      img.onload = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const leftData = ctx.getImageData(0, 0, 1, img.height).data;
        const rightData = ctx.getImageData(
          img.width - 1,
          0,
          1,
          img.height
        ).data;

        const leftColor = getAverageColor(leftData);
        const rightColor = getAverageColor(rightData);

        resolve({
          color1: `rgba(${leftColor.r}, ${leftColor.g}, ${leftColor.b}, 0.6)`,
          color2: `rgba(${rightColor.r}, ${rightColor.g}, ${rightColor.b}, 0.5)`,
        });
      };
    });
  };

  const getAverageColor = (data) => {
    let r = 0,
      g = 0,
      b = 0;
    const total = data.length / 4;

    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
    }

    return {
      r: Math.round(r / total),
      g: Math.round(g / total),
      b: Math.round(b / total),
    };
  };
  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <div
        className={styles.swiperContainer}
        style={{
          backgroundImage: `linear-gradient(
                        to right,
                        ${gradientColors.color1},
                        ${gradientColors.color2}
                    )`,
        }}
      >
        <Swiper
          className={styles.swiper}
          onChange={(swiper) => {
     
            if (data && data[swiper]) {
              
              const currentImage = data[swiper];
              getImageColors(currentImage.data).then((colors) => {
                console.log(colors);
                setGradientColors(colors);
              });
            }
          }}
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
          <p className={styles.downloadText}>
            PC 安卓 iPhone WP iPad Mac 六大客户端
          </p>
        </div>
      </div>
      <MainOne />
    </div>
  );
}
