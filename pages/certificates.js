import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())
import { faPenToSquare, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Certificates(){
  const data = useSWR('/api/certificates', fetcher).data
  const auth = useSWR('/api/data', fetcher).data

  if(!data) return <div><h1 className="text-sky-600 mb-5 pt-24 text-2xl text-center">Loading The Certificates...</h1></div>
  const projects = data.data

  if (!auth) return <></>
  var name = false
  if(process.env.NEXT_PUBLIC_UNAME === auth.data[0].username && process.env.NEXT_PUBLIC_PASS === auth.data[0].pass){
    name = true
  }

  return (
    <div className='md:p-16 p-5'>
      <Head>
        <title>Certificates</title>
      </Head>
      
      <h1 className="text-sky-600 mb-5 text-2xl text-center md:mt-16 mt-14">Certificates</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-evenly'>

      {projects.map(pr => {
          return (
            <div className='md:hover:scale-110 md:hover:z-30 z-10 duration-200 md:hover:text-sky-400 md:hover:cursor-pointer'>
              <Link href={`/certificate/${pr.ranid}`}>
                <div key={pr._id} data-aos="fade-up" data-aos-delay="100" className="bg-gray-900 rounded-xl w-full duration-200 text-white">
                  <Image src={pr.image} className="rounded-xl" height={500} width={1000} priority/>
                  <div className='flex flex-col'>
                    <div className='p-3 pb-4'>
                      <h1 className="font-extrabold text-2xl text-center">{pr.title}</h1>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}

      </div>
    </div>
  )
}