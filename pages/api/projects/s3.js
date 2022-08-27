import aws from 'aws-sdk'

const region = "ap-south-1"
const bucketName = "website-bucket-meheer"
const accessKeyId = process.env.B_A_KEY
const secretAccessKey = process.env.B_S_KEY

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey
})

export default async function generateUploadURL(req, res) {
  const rawBytes = new Date()
  const imageName = rawBytes.valueOf()

  const params = ({
    Bucket: bucketName,
    Key: "Image:Meheer " + imageName,
    Expires: 60
  })

  console.log(params)
  
  const uploadURL = await s3.getSignedUrlPromise('putObject', params)
  res.status(400).json({url: uploadURL})
}