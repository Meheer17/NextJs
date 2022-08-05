import connect from '../../../components/db'
import {Project} from '../../../models/project'

connect()

export default async (req, res) => {
  const {method} = req;

  switch (method) {

    case 'GET':
      try {
        const project = await Project.find({})
        res.status(200).json({success: true, project: project})
      } catch (error) {
        res.status(400).json({success:false});
      }
      break;

    case 'POST':
      const der = new Project({title: req.body.title, description: req.body.description, learnt: req.body.learnt, link: req.body.link, github: req.body.github});
      try {
        await der.save()
        res.status(200).json({success: true})
      } catch (error) {
        console.log(error)
        res.status(400).json({success: false})
      }
      break;

  }
}