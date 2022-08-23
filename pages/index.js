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
            <div key={note._id} className="bg-slate-500 m-2 p-3 rounded-sm w-full md:w-1/3">
              <h1 className="italic font-extrabold capitalize text-2xl text-center underline-offset-0 underline">{note.title}</h1>
              <div className="font-medium text-justify text-lg">{note.description}</div>
              <div className="underline mt-5 italic underline-offset-0 font-bold text-xl">What Have I Learnt?</div>
              <div className="font-medium text-lg text-justify">{note.learnt}</div>
              <button className="bg-rose-400 mt-4 rounded-lg p-2 mr-3 inline">View</button>
              <button className="bg-rose-400 mt-4 rounded-lg p-2 inline">View</button>
            </div>
          )
        })}
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.URL}/api/projects`);
  const { data } = await res.json();
  return { props: {notes: data }}
}

export default Index            

// https://javascript.plainenglish.io/how-to-create-light-and-dark-mode-toggle-in-next-js-with-tailwind-61e67518fd2d
// https://egghead.io/blog/tailwindcss-dark-mode-nextjs-typography-prose