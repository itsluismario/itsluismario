import { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import MyInfoProvider  from "@src/context";
import "./globals.css";
import Navbar from "@src/components/Navbar/Navbar";
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <MyInfoProvider>      

      <Navbar/>
      <Layout>
      <Head>
      <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍣</text></svg>"
        />
        <title>itsluismario</title>
      </Head>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </MyInfoProvider>
  );
}
