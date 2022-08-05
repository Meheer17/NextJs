import fs from 'fs'
import s3 from 'aws-sdk/clients/s3'

const bucketName = process.env.BUCKET_NAME
const region = process.env.BUCKET_REGION
const accessKeyId = process.env.BUCKET_ACCESS_KEY
const secretAccessKey = process.env.BUCKET_KEY

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

export function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path)
  
    const uploadParams = {
      Bucket: bucketName,
      Body: fileStream,
      Key: file.filename
    }
  
    return s3.upload(uploadParams).promise()
}