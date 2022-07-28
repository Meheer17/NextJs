import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [mobile, setMobile] = useState(false)
  const [theme, setTheme] = useState('light')

  function mob() {
    mobile == false ? setMobile(true) : setMobile(false)
  }

  function MenuMob() {
    return (

      <div className='mobile-menu'>
        <ul>
          <li><Link href="/"><a className="block text-sm px-2 py-4 transition duration-300 hover:bg-blue-500"> Home</a></Link></li>
          <li><Link href="/projects"><a className="block text-sm px-2 py-4 transition duration-300 hover:bg-blue-500"> Projects</a></Link></li>
          <li><Link href="/certificates"><a className="block text-sm px-2 py-4 transition duration-300 hover:bg-blue-500"> Certificates</a></Link></li>
        </ul>
      </div>
    )
  }

  function dar() {
    theme == 'dark' ? setTheme('light') : setTheme('dark')
  }



  return (
    <>
      <nav className="bg-white shadow-xl border-b-2 border-gray-700">
        <div className="cont mx-auto px-4">

          <div className="flex justify-between">

            <div className="flex space-x-1">
              <div className="flex items-center py-4 px-2">
                <Link href='/'>
                  <a>
                    <img src='/icon.jpg' className="h-10 mr-2 rounded" />
                  </a>
                </Link>

              </div>
            </div>

            <div className="items-center flex">
              <span className="text-slate-800 text-2xl font-bold italic font-serif">Meheer</span>
            </div>

            <div className="items-center hidden md:flex">
              <Link href='/'><a className="py-4 px-2 text-gray-900 font-semibold transition duration-300 hover:text-blue-500">Home</a></Link>
              <Link href='/projects'><a className="py-4 px-2 text-gray-900 font-semibold transition duration-300 hover:text-blue-500">Projects</a></Link>
              <Link href='/certificates'><a className="py-4 px-2 text-gray-900 font-semibold transition duration-300 hover:text-blue-500">Certificates</a></Link>
              <button className="py-4 text-xl px-2 text-gray-900 font-semibold transition duration-300 hover:text-blue-500" onClick={dar} >{theme == "light" ? IcRoundDarkMode() : MaterialSymbolsLightMode()}</button>
            </div>

            <div className="flex items-center md:hidden">
              <button className="outline-none mobile-menu-button" onClick={mob}>{MaterialSymbolsMenuRounded()}</button>
            </div>

          </div>

        </div>
        {mobile ? <MenuMob /> : null}
      </nav>
    </>

  )
}

function MaterialSymbolsMenuRounded(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="2em" height="2em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M4 18q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h16q.425 0 .712.288q.288.287.288.712t-.288.712Q20.425 18 20 18Zm0-5q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287q.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-5q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Z"></path></svg>
  )
}

function IcRoundDarkMode(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56z"></path></svg>
  )
}


function MaterialSymbolsLightMode(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05L4.575 6q-.3-.275-.288-.7q.013-.425.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7q0 .4-.275.7q-.275.3-.687.287q-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712q0-.413.275-.688q.275-.3.688-.287q.412.012.712.287L19.425 18q.3.275.288.7q-.013.425-.288.725q-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688q.012-.412.287-.712L18 4.575q.275-.3.7-.288q.425.013.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275q-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275q.412 0 .687.275q.3.275.288.688q-.013.412-.288.712L6 19.425q-.275.3-.7.287q-.425-.012-.725-.287Z"></path></svg>
  )
}

