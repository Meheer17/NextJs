import Head from 'next/head'
import useSWR from 'swr'
import fetch from 'isomorphic-unfetch';
import Image from 'next/image'
import Link from 'next/link'

// import your icons
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faSquareJs, faNodeJs, faEnvira } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const fetcher = (...args) => fetch(...args).then(res => res.json())


export default function Index() {
  const data = useSWR('/api/certificates', fetcher) // This line behaves and helps the data to behave like a pre-loaded page.
  const speed = useSWR('/api/projects', fetcher) // And this also helps the data for the projects and certificate load even faster than before! 
  // const name = process.env.OWNER

  return(
    <>
      <Head>
        <title>Home</title>
      </Head>
      {/* {name ? <div>HELLO</div> : <div>NOPE</div>} */}
      <Intro/>
      <AbtMe/>
      <Skills/>
      <Projects/>
    </>
  )
}  

function Intro() {
  return (
    <div className='py-40 p-4 grid md:grid-cols-2 grid-cols-1' style={{backgroundImage:"linear-gradient(90deg, rgba(24,24,35,1) 38%, rgba(0,0,0,1) 38%)"}}>
            <div className='boxo'>
                <Image src="/profile.jpg" width="1920" height="1200" className='z-0'/>
            </div>
            <div className='text-6xl font-mono text-slate-100 flex items-center z-10'>
                <div className='font-black'>
                <p>I'm Meheer.</p>
                <p>A Web Developer</p>
                <p className='text-slate-400'>Based In India.</p>
                <p className='text-sm'>If you are looking for a person who loves coding and creating api well that's ME(HEER)!</p>
                </div>
            </div>
        </div>
  )
}

function AbtMe() {
  return(
    <>
      <div className="bg-amber-50 grid md:grid-cols-2 grid-cols-1">
        <div className='p-12'>
          <div>
            <p className='text-5xl font-black text-black'>Values And Beliefs </p>
            <p className='text-xl mt-3 text-gray-500'>Hardwork, Determination and persistance, These are the values I follow and believe. The reason im here is because of these values ive been following all this long and got my way thru...</p>
          </div>
          <div className='mt-16'>
            <Link href={'/aboutme'}><a className="underline hover:no-underline hover:border-double hover:border-4 underline-offset-8 hover:bg-violet-500 p-3 rounded">About Me</a></Link>
          </div>
        </div>
          <Image src={"/new.jpg"} height={1080} width={1920}/>
      </div>
    </>
  )
}

function Projects() {
  const speed = useSWR('/api/projects', fetcher).data
  if(!speed) return <div className='p-16 text-slate-500'>Loading Projects...</div>
  const projects = speed.data.reverse()
  console.log(projects)

  return (
    <>
      <div className='grid md:grid-cols-2 gap-5 grid-cols-1 p-16'>
        <div className='grid grid-rows-2 text-slate-500'>
          <div>
            <h1>MY PROJECTS</h1>
            <h1 className='text-6xl text-white'>Work I've done over the past 2 years!</h1>
          </div>
          <div>
            <div></div>
            {projects.map(pr => {
                return (
                  <div key={pr._id} className="bg-slate-500 m-2 p-3 rounded-sm w-full">
                    <div><Image src={pr.image} height={500} width={1000} priority/></div>
                    <h1 className="italic font-extrabold capitalize text-2xl text-center underline-offset-0 underline">{pr.title}</h1>
                    <div className="font-medium text-justify text-lg">{pr.description}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='grid grid-cols-1'>
        </div>
      </div>
    </>
  )
}

function Skills() {
  return (
    <div className='grid py-24 p-16 gap-10 md:grid-cols-3 grid-cols-1' style={{backgroundColor: "rgba(0,0,0,1)"}}>
          <div className='text-white text-6xl'>
            Skillset
            <p className='pt-5 text-xl text-slate-400 '>With skills in over many methods of creating a website, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
          </div>
          <div className='text-white grid gap-10 grid-rows-2'>
            <div className='hover:scale-110'>
              <div className='text-4xl hover:scale-110 transition ease-in-out'>
                <FontAwesomeIcon className=' bg-black text-orange-400' icon={faHtml5} />
                <FontAwesomeIcon className='ml-2 bg-black text-blue-400' icon={faCss3Alt} />
                <FontAwesomeIcon className='bg-slate-900 text-yellow-400 ml-2' icon={faSquareJs} />
              </div>
              <p className='text-2xl'>Web Developemnt</p>
              <div className='text-slate-500'>
                Working with multiple websites and projects has given me an extensive knowledge on how to create websites.
              </div>
            </div>
            <div className='hover:scale-110'>
              <div className='text-4xl hover:scale-110 transition ease-in-out'>
                <FontAwesomeIcon className=' bg-black text-green-400' icon={faNodeJs} />
              </div>
              <p className='text-2xl'>BackEnd Developemnt</p>
              <div className='text-slate-500'>
                A really good idea and a clear understanding of how to create a smooth flawless codes running with the least latency possible.
              </div>
            </div>
            
          </div>
          <div className='text-white grid gap-10 grid-rows-2'>
            <div className='hover:scale-110'>
              <div className='text-4xl transition ease-in-out hover:scale-110'>
                <FontAwesomeIcon className=' bg-black text-green-400' icon={faEnvira} />

              </div>
              <p className='text-2xl'>Api Development</p>
              <div className='text-slate-500'>
                Started creating APIs with simple and easy types, later grew to fun filled hard and challenging ones.
              </div>
            </div>
            <div className='hover:scale-110'>
              <div className='text-4xl transition ease-in-out hover:scale-110'>
                <FontAwesomeIcon className=' bg-black text-blue-400' icon={faBookOpenReader} />
              </div>
              <p className='text-2xl'>Self Learning</p>
              <div className='text-slate-500'>
                For this level of knowledge I've recieved over these few years, Self Learning was the only way. A good determination to learn, and try new things brought me here. 
              </div>
            </div>
            
          </div>
        </div>
  )
}

// https://javascript.plainenglish.io/how-to-create-light-and-dark-mode-toggle-in-next-js-with-tailwind-61e67518fd2d
// https://egghead.io/blog/tailwindcss-dark-mode-nextjs-typography-prose