import '@/styles/global.css'
import Header from '@/components/Header';
import Container from '@/components/Container';
import {ThemeProvider} from "@/lib/ThemeContext";
import Head from "next/head";
import { Noto_Sans_KR } from '@next/font/google';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700'],
  subsets: [],
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>watchit</title>
        <link rel="icon" href="/favicon.ico"/>
        <style>{`
          html {
            font-family: ${notoSansKR.style.fontFamily}, sans-serif;
          }
        `}</style>
      </Head>
      <ThemeProvider>
        <Header/>
        <Container page>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  )
}
