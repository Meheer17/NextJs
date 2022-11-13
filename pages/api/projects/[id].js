import dbConnect from '../../../utils/db'
import Project from '../../../models/Project'
import { getSession } from "next-auth/react"

dbConnect()

export default async (req, res) => {
  const {query: {id}, method} = req;
  const session = await getSession({ req })

  switch (method) {

    case 'GET':
      try {
        const project = await Project.findById(id)

        if(!project){
          return res.status(400).json({success: false})
        }

        res.status(200).json({success: true, data: project})

      } catch (error) {
        res.status(400).json({success: false})
      }
      break;
    
    case "PUT":
      if(session && session.user.admin){
        try {
          const project = await Project.findByIdAndUpdate(id, {title: req.body.title, description: req.body.description,ranid:req.body.ranid , learnt: req.body.learnt,image: req.body.image, link: req.body.link, github: req.body.github, pri: req.body.pri, tags: req.body.tags}, {new:true , runValidators: true})

          if(!project){
            return res.status(400).json({success: false})
          }

          res.status(200).json({success: true, data: project})

        } catch (error) {
          res.status(400).json({success: false})
        }
      }
      break;
    
    case "DELETE":
      if(session && session.user.admin){
        try {
          const del = await Project.findByIdAndDelete({_id : id})
          if(!del){
            return res.status(400).json({success: false})
          }
          res.status(200).json({success: true, data: del})
        } catch (error) {
          res.status(400).json({success: false})
        }
      }
      break;
    
    default:
      res.status(400).json({success: false})
      break;
  }
}
