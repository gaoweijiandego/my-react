import styles from "@/styles/index.module.scss";
import { Swiper } from "tdesign-react/lib/";
import { useEffect, useState, useRef } from "react";
import MainOne from "./components/mainOne";
import { getStaticData } from '@/data/staticData';

const { SwiperItem } = Swiper;

export async function getStaticProps() {
  // 没有服务器弃用！
  // try {
  //   // 并行请求多个接口
  //   const [singer, data] = await Promise.all([
  //     // 本地api
  //     fetch("http://localhost:3000/api/singer"),
  //     fetch("http://localhost:3000/api/home"),
  //     // 外部api
  //     // fetch("/api/singer"),
  //     // fetch("/api/home"),
  //   ]);
  //   console.log(singer, data, "data");
  //   // 检查响应是否成功
  //   if (!singer.ok || !data.ok) {
  //     throw new Error("Network response was not ok");
  //   }

  //   // 解析 JSON 数据
  //   const singerData = await singer.json();
  //   const dataData = await data.json();

  //   return {
  //     props: {
  //       singers: singerData, // 将歌手数据传递给页面组件
  //       data: dataData, // 将专辑数据传递给页面组件
  //     },
  //   };
  // } catch (error) {
  //   console.error("Fetch error:", error);
  //   return {
  //     props: {
  //       singers: [], // 如果请求失败，返回空数组
  //       data: [],
  //     },
  //   };
  // }
  const { singers, data } = getStaticData();
  console.log(singers, data, "data");
  return {
    props: {
      singers,
      data,
    },
  };
}

export default function Home({ singers, data }) {
  const [gradientColors, setGradientColors] = useState({
    color1: "hsla(180, 50%, 80%, 0.6)",
    color2: "hsla(190, 50%, 80%, 0.5)",
  });
  const canvasRef = useRef(null);

  // 初始化时设置第一张图片的颜色
  useEffect(() => {
    console.log(data, "data");
    if (data && data.length > 0) {
      getImageColors(data[0].data).then((colors) => {
        setGradientColors(colors);
      });
    }
  }, []); // 只在组件挂载时执行一次

  const getImageColors = (imageData) => {
    return new Promise((resolve) => {
      // 检查是否在浏览器环境
      if (typeof window === 'undefined') {
        resolve({
          color1: "hsla(180, 50%, 80%, 0.6)", // 默认颜色
          color2: "hsla(190, 50%, 80%, 0.5)"
        });
        return;
      }

      const img = new Image();
      img.src = imageData;

      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) {
          resolve({
            color1: "hsla(180, 50%, 80%, 0.6)",
            color2: "hsla(190, 50%, 80%, 0.5)"
          });
          return;
        }

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve({
            color1: "hsla(180, 50%, 80%, 0.6)",
            color2: "hsla(190, 50%, 80%, 0.5)"
          });
          return;
        }

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        try {
          const leftData = ctx.getImageData(0, 0, 1, img.height).data;
          const rightData = ctx.getImageData(img.width - 1, 0, 1, img.height).data;

          const leftColor = getAverageColor(leftData);
          const rightColor = getAverageColor(rightData);

          resolve({
            color1: `rgba(${leftColor.r}, ${leftColor.g}, ${leftColor.b}, 0.6)`,
            color2: `rgba(${rightColor.r}, ${rightColor.g}, ${rightColor.b}, 0.5)`,
          });
        } catch (error) {
          if (process.env.NODE_ENV === 'development') {
            console.error('获取图片颜色失败:', error);
          }
          resolve({
            color1: "hsla(180, 50%, 80%, 0.6)",
            color2: "hsla(190, 50%, 80%, 0.5)"
          });
        }
      };

      // 添加错误处理
      img.onerror = () => {
        if (process.env.NODE_ENV === 'development') {
          console.error('图片加载失败');
        }
        resolve({
          color1: "hsla(180, 50%, 80%, 0.6)",
          color2: "hsla(190, 50%, 80%, 0.5)"
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
                setGradientColors(colors);
              });
            }
          }}
          autoplay={true}
          navigation={{ placement: "inside", type: "dots" }}
        >
          {data.map((item, index) => (
            <SwiperItem key={index} className={styles.swiperItem}>
              <img
                src={item.data}
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
      <MainOne data={singers} />
    </div>
  );
}
