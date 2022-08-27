import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

export default function Index() {
  return(
    <>
      <Head>
        <title>Home</title>
      </Head>
      
      <h1 className="text-sky-600 text-2xl text-center">Home</h1>
    </>
  )
}  

// https://javascript.plainenglish.io/how-to-create-light-and-dark-mode-toggle-in-next-js-with-tailwind-61e67518fd2d
// https://egghead.io/blog/tailwindcss-dark-mode-nextjs-typography-prose