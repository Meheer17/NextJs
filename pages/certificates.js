import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'

export default function Certificates({projects}){
  return (
    <>
      <Head>
        <title>Certificates</title>
      </Head>
      
      <h1 className="text-sky-600 text-2xl text-center">Certificates</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-evenly'>

      {projects.map(pr => {
          return (
            <div key={pr._id} className="bg-slate-500 m-2 p-3 rounded-sm w-full">
              <div><Image src={pr.image} height={500} width={1000} priority/></div>
              <h1 className="italic font-extrabold capitalize text-2xl text-center underline-offset-0 underline">{pr.title}</h1>
              <div className="font-medium text-justify text-lg">{pr.description}</div>
              <Link href={pr.link}><a className="bg-rose-400 mt-2 rounded-lg p-2 inline">View</a></Link>
              <Link href={`/edit/certificate-update-${pr._id}`}><a className="bg-rose-400 m-2 rounded-lg p-2 inline">Edit</a></Link>
            </div>
          )
        })}

      </div>
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.URL}/api/certificates`);
  const { data } = await res.json();
  return { props: {projects: data }}
}
