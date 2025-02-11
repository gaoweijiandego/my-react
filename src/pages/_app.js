import "@/styles/globals.css";
import 'tdesign-react/dist/tdesign.css';
import Layout from "@/components/Layout";
import { useRouter } from 'next/router';
import { MusicProvider } from '@/context/MusicContext';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  // 检查当前路由是否为404页面
  const is404Page = router.pathname === '/404';

  return (
    <MusicProvider>
      {!is404Page ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </MusicProvider>
  );
};

export default MyApp;
