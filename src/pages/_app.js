import "@/styles/globals.css";
import 'tdesign-react/dist/tdesign.css';
import Layout from "@/components/Layout";
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  // 检查当前路由是否为404页面
  const is404Page = router.pathname === '/404';

  return (
    <>
      {!is404Page ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
};

export default MyApp;
