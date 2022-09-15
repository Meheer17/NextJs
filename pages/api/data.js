import dbConnect from '../../utils/db'
import User from '../../models/Users'

dbConnect()


export default async function handler(req, res){
  const {method} = req;

  if (process.env.UNAME) {
    
    switch (method) {
  
      case 'GET':
        try {
          const project = await User.find()
          res.status(200).json({data: project});
        } catch (error) {
          res.status(400).json({success:false});
        }
        break;
  
      default:
        res.status(400).json({error: "ERROR"})
        break;
    }
  } else {
    res.status(400).json({data: [{username: "NULL", pass: "NULL"}]});
  }

}