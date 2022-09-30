import '../styles/global.css';
import Layout from '../components/layout'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}