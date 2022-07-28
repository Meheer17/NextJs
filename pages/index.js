import Head from 'next/head';
import Layout from '../components/layout';

export default function Home(){
  return(
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      
      <h1 className="text-sky-600 text-2xl text-center">Hello Nextjs</h1>
    </Layout>
  )

}

// https://javascript.plainenglish.io/how-to-create-light-and-dark-mode-toggle-in-next-js-with-tailwind-61e67518fd2d
// https://egghead.io/blog/tailwindcss-dark-mode-nextjs-typography-prose
