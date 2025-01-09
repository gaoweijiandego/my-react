export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // 设置请求头
    },
    body: JSON.stringify({ name: "nico" }),
  });
  const data = await res.json();

  return {
    props: {
      data, // 将数据传递给页面组件
    },
  };
}
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
export default function Home({ data }) {
  const [name, setName] = useState("joker");
  const [inputName, setInputName] = useState("");
  useEffect(() => {
    setName(data.name);
  }, [data]);
  const handleGetClick = () => {
    fetch("http://localhost:3000/api/hello", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
      });
  };
  const handlePostClick = (name) => {
    fetch("http://localhost:3000/api/hello", {
      method: "POST",
      body: JSON.stringify({ name: name }),
      headers: {
        "Content-Type": "application/json", // 设置请求头
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
      });
  };
  return (
    <div>
      <div className={styles.mainContent}>
        <h1>{data.message}</h1>
        <div style={{ display: "flex", flexDirection: "column"}}>
          <h2>你的名字是：{name}</h2>
          <button onClick={handleGetClick}>使用GET获取新名字</button>

        </div>
        <div>
          <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} />
          <button onClick={()=>handlePostClick(inputName)}>使用POST获取新名字</button>
        </div>
      </div>
    </div>
  );
}
