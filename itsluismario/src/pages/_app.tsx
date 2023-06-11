import { AppProps } from "next/app"
import Layout from '../components/Layout/Layout'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
    )
  }