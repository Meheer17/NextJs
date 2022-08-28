import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Projects() {
  const data = useSWR('/api/projects', fetcher).data
  if(!data) return <div><h1 className="text-sky-600 mb-5 text-2xl text-center">Loading The Projects...</h1></div>
  const projects = data.data

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      
      <h1 className="text-sky-600 mb-5 text-2xl text-center">Projects</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-evenly'>

      {projects.map(pr => {
          return (
            <div key={pr._id} className="bg-slate-500 m-2 p-3 rounded-sm w-full">
              <div><Image src={pr.image} height={500} width={1000} priority/></div>
              <h1 className="italic font-extrabold capitalize text-2xl text-center underline-offset-0 underline">{pr.title}</h1>
              <div className="font-medium text-justify text-lg">{pr.description}</div>
              <div className="underline mt-5 italic underline-offset-0 font-bold text-xl">What Have I Learnt?</div>
              <div className="font-medium text-lg mb-3 text-justify">{pr.learnt}</div>
              <Link href={pr.link}><a className="bg-rose-400 mt-2 rounded-lg p-2 inline">View</a></Link>
              <Link href={pr.github}><a className="bg-rose-400 m-2 rounded-lg p-2 inline">View</a></Link>
              <Link href={`/${pr._id}/edit-projects`}><a className="bg-rose-400 m-2 rounded-lg p-2 inline">Edit</a></Link>
            </div>
          )
        })}

       </div>
     </>
   )

}
