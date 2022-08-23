import dbConnect from '../../../utils/db'
import Project from '../../../models/Project'

dbConnect()

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
        const project = await Project.findByIdAndUpdate(id, req.body, {new:true , runValidators: true})

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
