import Head from 'next/head';
import {useState} from 'react'
import Layout from '../components/layout';
// import {loadPosts} from '../lib/loadData'


export default function Home({data}){
  return(
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      
      <h1 className="text-sky-600 text-2xl text-center">Hello Nextjs</h1>
      <div>
          {
            data.map(note => {
              return (
                <>
                <h1 key={note.id}>{note.title}</h1>
                </>
                
              )
            })
          }
      </div>
      
    </Layout>
  )
}
Home.getInitialProps = async () => {
  const res = await fetch('http:/localhost:3000/api/projects');
  const { data } = await res.json();
  return { data: data }
}

// https://javascript.plainenglish.io/how-to-create-light-and-dark-mode-toggle-in-next-js-with-tailwind-61e67518fd2d
// https://egghead.io/blog/tailwindcss-dark-mode-nextjs-typography-prose