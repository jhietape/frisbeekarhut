import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div data-theme="yfk" className="w-screen h-screen">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
