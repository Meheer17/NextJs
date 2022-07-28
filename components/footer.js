import Link from 'next/link'

export default function Footer(){
  return (
    
    <footer className="p-4 bg-white border-slate-500 border-t-2 mt-24 mb-0 w-full shadow-xl md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" ><a className="flex items-center mb-4 sm:mb-0">
          <img src="/icon.jpg" className="mr-3 h-10"/>
        </a></Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
          <li><Link href="/"><a className="mr-4 hover:underline md:mr-6">Home</a></Link></li>
          <li><Link href="/"><a className="mr-4 hover:underline md:mr-6">Project</a></Link></li>
          <li><Link href="/"><a className="mr-4 hover:underline md:mr-6">Certificates</a></Link></li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link href="/"><a className="hover:underline"></a></Link> Created By Meheer.</span>
    </footer>
  )
}