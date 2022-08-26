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



async function handler(req, res){
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
      const der = new Project({title: req.body.title, description: req.body.description, learnt: req.body.learnt,image: req.body.image, link: req.body.link, github: req.body.github, pri: req.body.pri, tags: req.body.tags});
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

module.exports = allowCors(handler)