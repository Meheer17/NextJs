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
  const data = useSWR('/api/certificates', fetcher)
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
            <Link href={'/aboutme'}><a className="underline text-2xl hover:no-underline underline-offset-8 hover:bg-sky-500 p-3 rounded">About Me</a></Link>
          </div>
        </div>
          <Image src={"/new.jpg"} height={1080} width={1920}/>
      </div>
    </>
  )
}

function ProgressBar() {
  const speed = useSWR('/api/projects', fetcher).data
  if(!speed) return <div className='p-16 text-slate-500'>Loading Projects...</div>
  var projects = speed.data
  const count = {}
  const skillset = []
  const skillRatio = {}
  
  for(let i = 0; i < projects.length; i++ ) {
    for(let t = 0; t < projects[i].tags.length; t++ ) {
      if(skillset.includes(projects[i].tags[t])){
        skillRatio[projects[i].tags[t]] += 1
      } else {
        skillset.push(projects[i].tags[t])
        skillRatio[projects[i].tags[t]] = 1
      }
    }
  }
  
  for(let i = 0; i < skillset.length; i++) {
    count[skillset[i]] = (skillRatio[skillset[i]] / projects.length) * 100 
  }

  return (
    <>
      <div className='md:p-24 px-12 pb-10 font-mono'>
        <h1 className='text-6xl text-white my-5'>Projects Language Ratio</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 grid-cols-1'>
            {skillset.map(s => {
              return (
                <>
                  <div>

                    <div className="mb-1 text-xl text-slate-400 font-bold capitalize">{s}</div>
                    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                      <div className="bg-orange-500 h-4 rounded-full" style={{width: `${count[s]}%`}}></div>
                    </div>

                  </div>
                </>
              )
            })}
        </div>
      </div>
    </>
  )

}

function Projects() {
  const speed = useSWR('/api/projects', fetcher).data
  if(!speed) return <div className='p-16 text-slate-500'>Loading Projects...</div>
  var projects = speed.data
  projects = [...projects].sort((a,b) => a.pri - b.pri)


  return (
    <>
      <div className='grid md:grid-cols-2 gap-5 grid-cols-1 md:p-16 p-5'>
        <div className='grid grid-rows-1'>
          
          <div>
            <h1 className='text-slate-500'>MY PROJECTS</h1>
            <h1 className='text-6xl text-white mb-4'>Work I've done over the past 2 years!</h1>
          </div>

          <div className='hover:scale-110 duration-300 mt-3 text-white hover:text-blue-400 hover:z-30'>
            <Link href={`${projects[0].link}`}><a target={"_blank"}>
            <div key={projects[0]._id} className="bg-gray-900 rounded-sm w-full">
              <Image src={projects[0].image} height={500} width={1000} priority/>
              <div className='p-3'>
                <h1 className="font-extrabold text-2xl text-left">{projects[0].title}</h1>
                <div className="font-medium text-slate-500 text-justify text-lg">{projects[0].description}</div>
              </div>
            </div>
            </a></Link>
          </div>

          <div className='hover:scale-110 duration-300 mt-3 text-white hover:text-blue-400 hover:z-30'>
            <Link href={`${projects[1].link}`}><a target={"_blank"}>
            <div key={projects[1]._id} className="bg-gray-900 rounded-sm w-full">
              <Image src={projects[1].image} height={500} width={1000} priority/>
              <div className='p-3'>
                <h1 className="font-extrabold text-2xl text-left">{projects[1].title}</h1>
                <div className="font-medium text-slate-500 text-justify text-lg">{projects[1].description}</div>
              </div>
            </div>
            </a></Link>
          </div>
        
        </div>
        
        <div className='grid grid-cols-1'>

          <div className='hover:scale-110 duration-300 mt-3 text-white hover:text-blue-400 hover:z-30'>
            <Link href={`${projects[2].link}`}><a target={"_blank"}>
            <div key={projects[2]._id} className="bg-gray-900 rounded-sm w-full">
              <Image src={projects[2].image} height={500} width={1000} priority/>
              <div className='p-3'>
                <h1 className="font-extrabold text-2xl text-left">{projects[2].title}</h1>
                <div className="font-medium text-slate-500 text-justify text-lg">{projects[2].description}</div>
              </div>
            </div>
            </a></Link>
          </div>

          <div className='hover:scale-110 duration-300 mt-3 text-white hover:text-blue-400 hover:z-30'>
            <Link href={`${projects[3].link}`}><a target={"_blank"}>
            <div key={projects[3]._id} className="bg-gray-900 rounded-sm w-full">
              <Image src={projects[3].image} height={500} width={1000} priority/>
              <div className='p-3'>
                <h1 className="font-extrabold text-2xl text-left">{projects[3].title}</h1>
                <div className="font-medium text-slate-500 text-justify text-lg">{projects[3].description}</div>
              </div>
            </div>
            </a></Link>
          </div>

            <div className='flex justify-center mt-10'>
              <h1 className='text-white'><Link href={'/projects'}><a className='md:text-2xl text-sm text-white p-3 border-2 duration-500  border-sky-300 hover:bg-sky-400 hover:text-gray-900 rounded'>VIEW ALL PROJECTS</a></Link></h1>
            </div>

          </div>

      </div>
      <ProgressBar/>

    </>
  )
}

function Skills() {
  return (
    <div className='grid py-24 md:p-16 p-5 gap-10 md:grid-cols-3 grid-cols-1' style={{backgroundColor: "rgba(0,0,0,1)"}}>
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
                Working with multiple websites and projects has given me an extensive knowledge on how to create websites using the basics i've learnt over the years.
              </div>
            </div>
            <div className='hover:scale-110'>
              <div className='text-4xl hover:scale-110 transition ease-in-out'>
                <FontAwesomeIcon className=' bg-black text-green-400' icon={faNodeJs} />
              </div>
              <p className='text-2xl'>BackEnd Developemnt</p>
              <div className='text-slate-500'>
                A really good idea and a clear understanding of how to create a smooth flawless code running with the lowest latency possible, what more would you want?.
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
                Having fun while developing or creating APIs is the only way to succeed in it. Most importantly is to be confident to face the challenges thrown at you!.
              </div>
            </div>
            <div className='hover:scale-110'>
              <div className='text-4xl transition ease-in-out hover:scale-110'>
                <FontAwesomeIcon className=' bg-black text-blue-400' icon={faBookOpenReader} />
              </div>
              <p className='text-2xl'>Self Learning</p>
              <div className='text-slate-500'>
                For this level of knowledge I've recieved over these few years, Self Learning was the only way. A good determination to learn, and the curiosity to try new things brought me to where I stand. 
              </div>
            </div>
            
          </div>
        </div>
  )
}

// https://javascript.plainenglish.io/how-to-create-light-and-dark-mode-toggle-in-next-js-with-tailwind-61e67518fd2d
// https://egghead.io/blog/tailwindcss-dark-mode-nextjs-typography-prose