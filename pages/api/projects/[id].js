import dbConnect from '../../../utils/db'
import Project from '../../../models/Project'

dbConnect()

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}



export default async (req, res) => {
  const {query: {id}, method} = req;

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
      try {
        const project = await Project.findByIdAndUpdate(id, {title: req.body.title, description: req.body.description, learnt: req.body.learnt,image: req.body.image, link: req.body.link, github: req.body.github, pri: req.body.pri, tags: req.body.tags}, {new:true , runValidators: true})

        if(!project){
          return res.status(400).json({success: false})
        }

        res.status(200).json({success: true, data: project})

      } catch (error) {
        res.status(400).json({success: false})
      }
      break;
    
    case "DELETE":
      try {
        const del = await Project.findByIdAndDelete({_id : id})
        if(!del){
          return res.status(400).json({success: false})
        }
        res.status(200).json({success: true, data: del})
      } catch (error) {
        res.status(400).json({success: false})
      }
      break;
    
    default:
      res.status(400).json({success: false})
      break;
  }
}
