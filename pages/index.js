import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

export default function Index({user}) {
  return(
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>{user.username}</h1>
      <h1 className="text-sky-600 text-2xl text-center">Home</h1>
    </>
  )
}  

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://gad.global-affairs-desk.repl.co/meheer/auth/nextjs`);
  const { auth, user } = await res.json();
  console.log(res)
  // if (auth) {
  //   return { props: {user: user }}
  // }
  return 
}

// https://javascript.plainenglish.io/how-to-create-light-and-dark-mode-toggle-in-next-js-with-tailwind-61e67518fd2d
// https://egghead.io/blog/tailwindcss-dark-mode-nextjs-typography-prose