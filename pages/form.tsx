import type { NextPage } from 'next'
import { InputHTMLAttributes, useState } from 'react'
import AWSS3UploadAsh from 'aws-s3-upload-ash'
import { UploadResponse } from 'aws-s3-upload-ash/dist/types'

const Home: NextPage = () => {

  // B_NAME: "website-bucket-meheer",
  //     B_REGION: "ap-south-1",
  //     B_A_KEY: "AKIASPC62OMHSLLFWIPO",
  //     B_S_KEY: "O/j/9v3IKy4HIWq7apAxbYe18SpGEqN0mhEQ6DU1"

  const [fileSelected, setFileSelected] = useState({ type: "", name: "" })
  const config = {
    bucketName: "website-bucket-meheer",
    region: 'ap-south-1',
    accessKeyId: 'AKIASPC62OMHSLLFWIPO',
    secretAccessKey: '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',
    s3Url: 'https://website-bucket-meheer.s3.amazonaws.com/'
  }
  // @ts-ignore
  const S3CustomClient = new AWSS3UploadAsh(config);

  function onChangeFile(event: InputHTMLAttributes<HTMLInputElement>) {
    // @ts-ignore
    setFileSelected(event.target.files[0])
  }

  async function handleSendFile() {
    alert("Open console for see the result")
    console.log("handleSendFile")

    // @ts-ignore
    await S3CustomClient.uploadFile(fileSelected, fileSelected.type, undefined, fileSelected.name, "public-read")
      .then((data: UploadResponse) => console.log(data))
      .catch((err: any) => console.error(err))
  }

  return (
    <div>
      <input type="file" onChange={onChangeFile} ></input>
      <br />
      <br />
      <button onClick={handleSendFile} >send file</button>
    </div>
  )
}

export default Home