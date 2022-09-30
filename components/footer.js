import Link from 'next/link'

export default function Footer(){
  return (
    
    <footer className="p-4 border-slate-500 border-t-2 mb-0 w-full shadow-xl md:px-6 md:py-8" style={{backgroundImage:"linear-gradient(90deg, rgba(24,24,35,1) 62%, rgba(0,0,0,1) 38%)"}}>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="text-slate-400 items-center flex">
          <span className="text-2xl font-bold italic font-sans">Meheer</span>
        </div>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-slate-400 sm:mb-0">
          <li><Link href="/"><a className="mr-4 md:hover:underline md:mr-6">Home</a></Link></li>
          <li><Link href="/projects"><a className="mr-4 md:hover:underline md:mr-6">Project</a></Link></li>
          <li><Link href="/certificates"><a className="mr-4 md:hover:underline md:mr-6">Certificates</a></Link></li>
          <li><Link href="/aboutme"><a className="mr-4 underline decoration-sky-500 decoration-4 md:hover:underline md:mr-6">About Me</a></Link></li>
        </ul>
      </div>
      <div className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link href="/"><a className="md:hover:underline"></a></Link> Created By Meheer.</div>
    </footer>
    
  )
}