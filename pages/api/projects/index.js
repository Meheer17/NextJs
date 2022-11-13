import dbConnect from '../../../utils/db'
import Project from '../../../models/Project'
import { getSession } from "next-auth/react"

dbConnect()


export default async function handler(req, res){
  const {method} = req;
  const session = await getSession({ req })

  switch (method) {

    case 'GET':
      try {
        const project = await Project.find({})
        res.status(200).json({success: true, data: project})
      } catch (error) {
        res.status(400).json({success:false});
      }
      break;

    case 'POST':
      if(session && session.user.admin){
        const der = new Project({title: req.body.title,ranid: req.body.ranid, description: req.body.description, learnt: req.body.learnt,image: req.body.image, link: req.body.link, github: req.body.github, pri: req.body.pri, tags: req.body.tags});
        try {
          const project = await der.save()
          res.status(200).json({success: true, data: project})
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