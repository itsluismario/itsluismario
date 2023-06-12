import { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { Inter } from "next/font/google";
import MyInfoProvider  from "@src/context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyInfoProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyInfoProvider>
  );
}
