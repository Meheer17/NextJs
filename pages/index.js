import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import fetch from 'isomorphic-unfetch';

const Index = ({ notes }) => {
  return(
    <>
      <Head>
        <title>Home</title>
      </Head>
      
      <h1 className="text-sky-600 text-2xl text-center">Home</h1>
      {notes.map(note => {
          return (
            <div key={note._id}>
             <h1>{note.description}</h1>
             <Image height={100} width={100} src={note.title}/>
            </div>
          )
        })}
    </>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/projects');
  const { data } = await res.json();
  return { notes: data }
}

export default Index            

// https://javascript.plainenglish.io/how-to-create-light-and-dark-mode-toggle-in-next-js-with-tailwind-61e67518fd2d
// https://egghead.io/blog/tailwindcss-dark-mode-nextjs-typography-prose