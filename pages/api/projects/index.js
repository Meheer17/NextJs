import connect from '../../../components/db'
import Project from '../../../models/project'

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
      try {
        const project = await Project.create(req.body);
        res.status(200).json({success: true, project: project})
      } catch (error) {
        res.status(400).json({success: false})
      }
      break;

  }
}