import S3 from 'aws-sdk/clients/s3'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const s3 = new S3({
    apiVersion: '2006-03-01',
    accessKeyId: process.env.B_A_KEY,
    secretAccessKey: process.env.B_S_KEY,
  })

  const post = await s3.createPresignedPost({
    Bucket: process.env.B_NAME,
    Fields: {
      key: req.query.file,
      'Content-Type': req.query.fileType,
    },
    Expires: 60, // seconds
    Conditions: [
      ['content-length-range', 0, 4000000], // up to 1 MB
    ],
  })

  res.status(200).json(post)
}