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
  const [ntype, setType] = useState('all')

  console.log(ntype)

  if(!data) return <div><h1 className="text-sky-600 pt-24 mb-5 text-2xl text-center">Loading The Projects...</h1></div>
  const projects = data.data
  var sorted = projects

  if (ntype === "all"){
    sorted = [...projects].sort((a,b) => a.pri - b.pri)
  } else {
    sorted = []
    const hello = [...projects].sort((a) => {
      if (a.tags.includes(ntype)) {
         sorted.push(a)
      }
    })
  }

  return (
    <div className='p-10'>
      <Head>
        <title>Projects</title>
      </Head>
      
      <h1 className="text-sky-600 mb-5 text-2xl text-center md:mt-16 mt-14">Projects</h1>
      <div className='text-slate-300 h-24 mx-auto text-center'>

        {ntype == "all" ? <button  className='p-1 mx-2 bg-slate-200 text-black rounded' onClick={(e) => setType("all")}>ALL</button> : <button  className='p-1 mx-2' onClick={(e) => setType("all")}>ALL</button>}
        {ntype == "html" ? <button className='p-1 mx-2 bg-slate-200 text-black rounded' onClick={(e) => setType("html")}>HTML</button> : <button className='p-1 mx-2' onClick={(e) => setType("html")}>HTML</button>}
        {ntype == "js" ? <button className='p-1 mx-2 bg-slate-200 text-black rounded' onClick={(e) => setType("js")}>JS</button> : <button className='p-1 mx-2'  onClick={(e) => setType("js")}>JS</button>}
        {ntype == "node" ? <button className='p-1 mx-2 bg-slate-200 text-black rounded' onClick={(e) => setType("node")}>NODEJS</button> : <button className='p-1 mx-2'  onClick={(e) => setType("node")}>NODEJS</button>}
        {ntype == "express" ?  <button  className='p-1 mx-2 bg-slate-200 text-black rounded' onClick={(e) => setType("express")}>EXPRESS</button> : <button  className='p-1 mx-2' onClick={(e) => setType("express")}>EXPRESS</button>}
        {ntype == "chai" ? <button className='p-1 mx-2 bg-slate-200 text-black rounded' onClick={(e) => setType("chai")}>CHAI</button> : <button className='p-1 mx-2'  onClick={(e) => setType("chai")}>CHAI</button>}
      
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-evenly'>

      {sorted.map(pr => {
          return (
            <div key={pr._id} className="bg-gray-900 rounded-sm w-full">
              <Image src={pr.image} height={500} width={1000} priority/>
              <div className='flex flex-col'>
                <div className='p-3 pb-4'>
                  <h1 className="font-extrabold text-white text-2xl text-left">{pr.title}</h1>
                  <div className="font-medium text-slate-500 text-justify text-lg">{pr.description}</div>
                  <div className="mt-5 text-white italic font-bold text-xl">What Have I Learnt?</div>
                  <div className="font-medium text-slate-500 text-lg mb-3 text-justify">{pr.learnt}</div>
                </div>
                <div className='grow-1'></div>
                <div className='p-3 pb-4 justify-between flex bottom-0'>
                  {pr.link ? <Link href={pr.link}><a target={"_blank"} className="bg-black text-white m-2 rounded-lg p-4"><FontAwesomeIcon className='mr-2 text-white' icon={faLink} />View</a></Link> : null}
                  <Link href={`/${pr._id}/edit-projects`}><a className="bg-black text-white m-2 rounded-lg p-4 "><FontAwesomeIcon className='mr-2 text-white' icon={faPenToSquare} />Edit</a></Link>
                  {pr.github ? <Link href={pr.github}><a target={"_blank"} className="bg-black text-white m-2 rounded-lg p-4 "><FontAwesomeIcon className='mr-2 text-white' icon={faGithub} />GitHub</a></Link> : null}
                </div>
              </div>
            </div>
          )
        })}
       </div>
     </div>
   )
}