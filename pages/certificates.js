import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())
import { faPenToSquare, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Certificates(){
  const data = useSWR('/api/certificates', fetcher).data

  if(!data) return <div><h1 className="text-sky-600 mb-5 text-2xl text-center">Loading The Certificates...</h1></div>
  const projects = data.data

  return (
    <div className='p-10'>
      <Head>
        <title>Certificates</title>
      </Head>
      
      <h1 className="text-sky-600 mb-5 text-2xl text-center">Certificates</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-evenly'>

      {projects.map(pr => {
          return (
            <div key={pr._id} className="bg-gray-900 rounded-sm w-full">
              <Image src={pr.image} height={500} width={1000} priority/>
              <div className='flex flex-col'>
              <div className='p-3 pb-4'>
                <h1 className="font-extrabold text-white text-2xl text-left">{pr.title}</h1>
                <div className="font-medium text-slate-500 text-justify text-lg">{pr.description}</div>
              </div>
              <div className='grow-1'></div>
              <div className='p-3 pb-4 justify-between flex bottom-0'>
                <Link href={pr.link}><a target={"_blank"} className="bg-black text-white m-2 rounded-lg p-4"><FontAwesomeIcon className='mr-2 text-white' icon={faLink} />View</a></Link>
                <Link href={`/${pr._id}/edit-certificate`}><a className="bg-black text-white m-2 rounded-lg p-4 "><FontAwesomeIcon className='mr-2 text-white' icon={faPenToSquare} />Edit</a></Link>
              </div>
            </div>
            </div>
            
            
           
          )
        })}

      </div>
    </div>
  )
}