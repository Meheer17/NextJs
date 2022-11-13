import dbConnect from '../../../utils/db'
import Certificate from '../../../models/Certificate'
import { getSession } from "next-auth/react"

dbConnect()

export default async function handler(req, res){
  const {method} = req;
  const session = await getSession({ req })

  switch (method) {

    case 'GET':
      try {
        const certificate = await Certificate.find({})
        res.status(200).json({success: true, data: certificate})
      } catch (error) {
        res.status(400).json({success:false});
      }
      break;

    case 'POST':
      if(session && session.user.admin){
        const der = new Certificate({title: req.body.title, description: req.body.description,ranid: req.body.ranid, image: req.body.image, link: req.body.link});
        try {
          const certificate = await der.save()
          res.status(200).json({success: true, data: certificate})
        } catch (error) {
          console.log(error)
          res.status(400).json({success: false})
        }
      }
      break;

    default:
      res.status(400).json({success: false})
      break;
  }
}