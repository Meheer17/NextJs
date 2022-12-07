import Link from 'next/link'
import Head from 'next/head'
import Image from "next/legacy/image";
import useSWR from 'swr'
import { useRouter } from 'next/router'
const fetcher = (...args) => fetch(...args).then(res => res.json())
import { faPenToSquare, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react"

export default function Certificates(){
    const data = useSWR('/api/certificates', fetcher).data
    const router = useRouter()
    const { ranid } = router.query
    if(!data) return <div><h1 className="text-sky-600 mb-5 pt-24 text-2xl text-center">Loading The Certificates...</h1></div>
    const projects = data.data
    var details = false
    const { data: session, status } = useSession()
    var name = (status === "authenticated" && session.user.admin)
    for (let i = 0; i < projects.length; i++){
      if(projects[i].ranid === ranid){
        details = projects[i]
      }   
    }

    if(details) {
      return <>
         <Head>
           <title>{details.title}</title>
         </Head>
         <section className='py-32 mx-auto max-w-3xl p-4'>
           <div className='text-center text-white text-5xl mb-10'>{details.title}</div>
           <div>
             <Image src={details.image} height={1080} className="rounded-md" width={1920} priority/>
           </div>
           <div className='text-white mt-10 text-3xl underline underline-offset-4'>Certificate Description -</div>
           <div className='text-gray-400 mt-10 text-2xl'>{details.description}</div>
           <div className='pt-20 justify-between flex'>
             {details.link ? <Link
               href={details.link}
               target={"_blank"}
               className="bg-black hover:cursor-pointer duration-300 hover:text-black hover:bg-white m-2 text-white p-4 rounded-lg w-full  text-center"
                ><FontAwesomeIcon className='mr-2' icon={faLink} />View</Link> : null}
             {name ? <Link
               href={`/${details._id}/edit-certificate`}
               className="bg-black hover:cursor-pointer duration-300 hover:text-black hover:bg-white m-2 text-white p-4 rounded-lg w-full  text-center"
                ><FontAwesomeIcon className='mr-2' icon={faPenToSquare} />Edit</Link> : null}
           </div>
         </section>
      </>;
    } else if(status === "unauthenticated") {
      router.push('/')
  } else {
      return <></>
  }
}