import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import { useState } from 'react'
const fetcher = (...args) => fetch(...args).then(res => res.json())
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPenToSquare, faLink, faArrowUpShortWide } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Projects() {
  const data = useSWR('/api/projects', fetcher).data  
  const speed = useSWR('/api/certificates', fetcher)
  const auth = useSWR('/api/data', fetcher).data
  const [ntype, setType] = useState('all')
  const skillset = []

  if(!data) return <div><h1 className="text-sky-600 pt-24 mb-5 text-2xl text-center">Loading The Projects...</h1></div>
  const projects = data.data
  var sorted = projects

  if (!auth) return <></>
  var name = false
  if(process.env.NEXT_PUBLIC_UNAME === auth.data[0].username && process.env.NEXT_PUBLIC_PASS === auth.data[0].pass){
    name = true
  }

  if (ntype === "all"){
    sorted = [...projects].sort((a,b) => a.pri - b.pri)
  } else {
    sorted = []
    const det = [...projects].sort((a,b) => a.pri - b.pri)
    for (let i = 0; i < det.length; i++) {
      if(det[i].tags.includes(ntype)){
        sorted.push(det[i])
      }
    }
    shuffle(sorted)
  }

  for(let i = 0; i < projects.length; i++ ) {
    for(let t = 0; t < projects[i].tags.length; t++ ) {
      if(skillset.includes(projects[i].tags[t])){
        continue
      } else {
        skillset.push(projects[i].tags[t])
      }
    }
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  

  return (
    <div className='md:p-16 p-5'>
      <Head>
        <title>Projects</title>
      </Head>
      
      <h1 className="text-sky-600 mb-5 text-2xl text-center md:mt-16 mt-14">Projects</h1>
      <div className='text-slate-300 mb-10 mx-auto text-center'>
        {ntype == "all" ? <button  className='p-1 mx-2 bg-slate-200 text-black rounded capitalize' onClick={(e) => setType("all")}>all</button> : <button className='p-1 mx-2 capitalize' onClick={(e) => setType("all")}>all</button>}
        {skillset.map(s => {
          return (
            <>
              {ntype == s ? <button  className='p-1 mx-2 bg-slate-200 text-black rounded capitalize' onClick={(e) => setType(s)}>{s}</button> : <button className='p-1 mx-2 capitalize' onClick={(e) => setType(s)}>{s}</button>}
            </>
          )
        })}

      </div>
      <div className='text-sky-200 text-center my-5 text-3xl underline underline-offset-4'>
        {sorted.length} Projects
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-evenly'>

      {sorted.map(pr => {
          return (
            <div className=' md:hover:cursor-pointer md:hover:scale-110 md:hover:z-30 z-10 duration-200'>
              <Link href={`/project/${pr.ranid}`} >
                <div key={pr._id} data-aos="fade-up" data-aos-delay="100" className="bg-gray-900 hover:text-sky-400 text-white rounded-xl w-full">
                  <Image src={pr.image} className="rounded-xl hover:z-30 z-10" height={500} width={1000} priority/>
                  <div className='flex flex-col'>
                    <div className='p-3 pb-4'>
                      <h1 className="font-extrabold text-2xl text-center capitalize font-mono">{pr.title}</h1>
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