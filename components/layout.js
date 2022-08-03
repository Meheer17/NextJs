import Footer from './footer'
import Navbar from './navbar'

export default function Layout({children}) {
  return (
    <>
      <Navbar/>
      <main className="min-h-screen bg-slate-200 p-10">{children}</main>
      <Footer/>
    </>
    
  )
}