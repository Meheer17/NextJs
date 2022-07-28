import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/layout'


export default function Certificates(){
  return(
    <Layout>
      <Head>
        <title>Certificates</title>
      </Head>
      
      <h1 className="text-sky-600 text-2xl text-center">Certificates</h1>
    </Layout>
  )

}