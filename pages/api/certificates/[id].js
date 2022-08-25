import dbConnect from '../../../utils/db'
import Certificate from '../../../models/Certificate'

dbConnect()

export default async (req, res) => {
  const {query: {id}, method} = req;

  switch (method) {

    case 'GET':
      try {
        const certificate = await Certificate.findById(id)

        if(!certificate) {
          return res.status(400).json({success: query})
        }

        res.status(200).json({success: true, data: certificate})

      } catch (error) {
        res.status(400).json({success: false})
      }
      break;
    
    case "PUT":
      try {
        const certificate = await Certificate.findByIdAndUpdate(id, {title: req.body.title, description: req.body.description, image: req.body.image, link: req.body.link}, {new:true , runValidators: true})

        if(!certificate){
          return res.status(400).json({success: false})
        }

        res.status(200).json({success: true, data: certificate})

      } catch (error) {
        res.status(400).json({success: false})
      }
      break;
    
    case "DELETE":
      try {
        const del = await Certificate.findByIdAndDelete({_id : id})
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
