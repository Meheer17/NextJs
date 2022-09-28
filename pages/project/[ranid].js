import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())
import { faPenToSquare, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Certificates(){
  const data = useSWR('/api/projects', fetcher).data
  const auth = useSWR('/api/data', fetcher).data
  const router = useRouter()
  const { ranid } = router.query
  if(!data) return <div><h1 className="text-sky-600 mb-5 pt-24 text-2xl text-center">Fetching Data...</h1></div>
  const projects = data.data
  var details = false
  for (let i = 0; i < projects.length; i++){
    if(projects[i].ranid === ranid){
      details = projects[i]
    }   
  }

  if (!auth) return <></>
  var name = false
  if(process.env.NEXT_PUBLIC_UNAME === auth.data[0].username && process.env.NEXT_PUBLIC_PASS === auth.data[0].pass){
    name = true
  }
  let text = ''
  for(let i=0; i < details.tags.length; i++){
    text += details.tags[i] + ', ' 
  }
  text = text.slice(0, -2)
  if(details){
    return (
     <>
        <Head>
          <title>{details.title}</title>
        </Head>
        <section className='py-32 mx-auto max-w-3xl p-4'>
          <div className='text-center text-white text-5xl mb-10'>{details.title}</div>
          <div>
            <Image src={details.image} height={1080} width={1920}/>
          </div>
          <div className='text-white mt-10 text-3xl underline underline-offset-4'>Project Description -</div>
          <div className='text-gray-400 mt-10 text-2xl'>{details.description}</div>
          <div className='text-white mt-12 text-3xl underline underline-offset-4'>What Have I Learnt From This Project -</div>
          <div className='text-gray-400 mt-10 text-2xl'>{details.learnt}</div>
          <div className='text-white mt-10 text-3xl underline underline-offset-4'>Tags -</div>
          <div className='text-gray-400 mt-4 text-2xl capitalize'>{text}</div>
          <div className='pt-20 justify-between flex'>
            {details.link ? <Link href={details.link}><a target={"_blank"} className="bg-black duration-300 hover:text-black hover:bg-white m-2 text-white p-4 rounded-lg w-full  text-center"><FontAwesomeIcon className='mr-2' icon={faLink} />View</a></Link> : null}
            {name ? <Link href={`/${details._id}/edit-projects`}><a className="bg-black duration-300 hover:text-black hover:bg-white m-2 text-white p-4 rounded-lg w-full  text-center"><FontAwesomeIcon className='mr-2' icon={faPenToSquare} />Edit</a></Link> : null}
            {details.github ? <Link href={details.github}><a target={"_blank"} className="bg-black duration-300 hover:text-black hover:bg-white m-2 text-white p-4 rounded-lg w-full text-center "><FontAwesomeIcon className='mr-2' icon={faGithub} />GitHub</a></Link> : null}
          </div>
        </section>
     </>
    )
  } else {
    router.push('/projects')
  }

}