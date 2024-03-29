import '../styles/global.css';
import Layout from '../components/layout'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { SessionProvider } from "next-auth/react"

import '@fortawesome/free-solid-svg-icons'
import "@fortawesome/react-fontawesome"
import '@fortawesome/free-brands-svg-icons'
import '@fortawesome/free-brands-svg-icons'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);

  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {
          ...pageProps}/>
      </Layout>
    </SessionProvider>

  )
}