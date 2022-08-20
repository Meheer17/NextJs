import fs from 'fs'
import S3 from 'aws-sdk/clients/s3'
import path from 'path'

const bucketName = process.env.B_NAME
const region = process.env.B_REGION
const accessKeyId = process.env.B_A_KEY
const secretAccessKey = process.env.B_S_KEY

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