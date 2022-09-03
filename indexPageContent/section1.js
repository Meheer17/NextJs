import Image from 'next/image'
export default function Section1() {
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