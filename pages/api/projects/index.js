import dbConnect from '../../../utils/db'
import Project from '../../../models/Project'

dbConnect()

export default async (req, res) => {
  const {method} = req;

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
      const der = new Project({title: req.body.title, description: req.body.description, learnt: req.body.learnt, link: req.body.link, github: req.body.github});
      try {
        const project = await der.save()
        res.status(200).json({success: true, data: project})
      } catch (error) {
        console.log(error)
        res.status(400).json({success: false})
      }
      break;

    default:
      res.status(400).json({success: false})
      break;
  }
}