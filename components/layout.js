import Footer from './footer'
import Navbar from './navbar'

export default function Layout({children}) {
  return (
    <>
      <Navbar/>
      <main className="min-h-screen bg-black">{children}</main>
      <Footer/>
    </>
    
  )
}