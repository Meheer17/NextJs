import Head from 'next/head'
import Image from 'next/image'


export default function Projects({notes}) {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      
      <h1 className="text-sky-600 text-2xl text-center">Projects</h1>
      <div className="max-w-4xl mx-auto bg-slate-900 mt-5 p-3 text-sky-500">
      {notes.map(note => {
        return (
          <div key={note._id} className="bg-slate-500 m-2 p-3 rounded-sm w-full md:w-1/3">
            <div><Image src={note.image} height={500} width={1000} priority/></div>
            <h1 className="italic font-extrabold capitalize text-2xl text-center underline-offset-0 underline">{note.title}</h1>
            <div className="font-medium text-justify text-lg">{note.description}</div>
            <div className="underline mt-5 italic underline-offset-0 font-bold text-xl">What Have I Learnt?</div>
            <div className="font-medium text-lg mb-3 text-justify">{note.learnt}</div>
            <Link href={note.link}><a className="bg-rose-400 mt-2 rounded-lg p-2 inline">View</a></Link>
            <Link href={note.github}><a className="bg-rose-400 m-2 rounded-lg p-2 inline">View</a></Link>
          </div>
        )
      })}
      </div>
    </>
  )

}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.URL}/api/projects`);
  const { data } = await res.json();
  return { props: {notes: data }}
}

function Img() {
  return (
    <div >
      <Image height={70} width={100} src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcamo.githubusercontent.com%2F56ea24702a43a27f55794275849e38c16cd393e244a59297a71266b9b34e3e53%2F68747470733a2f2f617368616c6c656e64657369676e2e636f2e756b2f696d616765732f637573746f6d2f73686f72742d75726c2d6c6f676f2e706e67&imgrefurl=https%3A%2F%2Fgithub.com%2Fash-jc-allen%2Fshort-url&tbnid=2mY7kUiQxtpuvM&vet=12ahUKEwiQi5W237n5AhVdgGMGHfpCBZkQMygCegUIARDbAQ..i&docid=9yCRlBL2fv0LvM&w=800&h=250&q=short%20link%20images&ved=2ahUKEwiQi5W237n5AhVdgGMGHfpCBZkQMygCegUIARDbAQ"} />
    </div>
  )
}