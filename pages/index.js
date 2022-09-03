import Head from 'next/head'
import useSWR from 'swr'
import fetch from 'isomorphic-unfetch';
import S1 from '../indexPageContent/section1'
import S2 from '../indexPageContent/section2'


const fetcher = (...args) => fetch(...args).then(res => res.json())


export default function Index() {
  const data = useSWR('/api/certificates', fetcher) // This line behaves and helps the data to behave like a pre-loaded page.
  const speed = useSWR('/api/projects', fetcher) // And this also helps the data for the projects and certificate load even faster than before! 

  return(
    <>
      <Head>
        <title>Home</title>
      </Head>

      <S1/>
      <S2/>
    </>
  )
}  

// https://javascript.plainenglish.io/how-to-create-light-and-dark-mode-toggle-in-next-js-with-tailwind-61e67518fd2d
// https://egghead.io/blog/tailwindcss-dark-mode-nextjs-typography-prose