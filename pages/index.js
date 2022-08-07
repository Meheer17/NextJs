import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch';

const Index = ({ notes }) => {
  return(
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      
      <h1 className="text-sky-600 text-2xl text-center">Home</h1>
      {notes.map(note => {
          return (
            <div key={note._id}>
             <h1>{note.title}</h1>
            </div>
          )
        })}
    </Layout>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch('https://NextJs.meheer007.repl.co/api/projects');
  const { data } = await res.json();
  return { notes: data }
}

export default Index            

// https://javascript.plainenglish.io/how-to-create-light-and-dark-mode-toggle-in-next-js-with-tailwind-61e67518fd2d
// https://egghead.io/blog/tailwindcss-dark-mode-nextjs-typography-prose