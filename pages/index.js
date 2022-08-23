import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
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
              <Image src={note.image} height={500} width={1000}/>
              <h1 className="italic font-extrabold capitalize text-2xl text-center underline-offset-0 underline">{note.title}</h1>
              <div className="font-medium text-justify text-lg">{note.description}</div>
              <div className="underline mt-5 italic underline-offset-0 font-bold text-xl">What Have I Learnt?</div>
              <div className="font-medium text-lg mb-3 text-justify">{note.learnt}</div>
              <Link href={note.link}><a className="bg-rose-400 mt-2 rounded-lg p-2 inline">View</a></Link>
              <Link href={note.github}><a className="bg-rose-400 m-2 rounded-lg p-2 inline">View</a></Link>
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