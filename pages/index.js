import Head from 'next/head';
import Layout from '../components/layout';

export default function Home(){
  return(
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      
      <h1 className="text-sky-600 text-2xl text-center">Hello Nextjs</h1>
      <Index/>
    </Layout>
  )
}

const Index = ({data}) => {
  if(data){
    return (
      <div>
        <h1>Notes</h1>
        <div>
          {
            data.map(note => {
              return (
                <h1>HELLO</h1>
              )
            })
          }
        </div>
      </div>
    )
  }
}

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/projects")
  const {project} = await res.json();
  return {data : project}
}

// https://javascript.plainenglish.io/how-to-create-light-and-dark-mode-toggle-in-next-js-with-tailwind-61e67518fd2d
// https://egghead.io/blog/tailwindcss-dark-mode-nextjs-typography-prose