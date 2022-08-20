import Multer from "multer";
import {uploadFile} from '../../../lib/s3'
import path from 'path'
import fs from 'fs'
import util from 'util'
import applyMiddleware from "../../../utils/applyMiddleware";


export const config = {
  api: {
    bodyParser: false,
  },
};
const unlinkfile = util.promisify(fs.unlink)
const fileStorage = Multer.diskStorage({
    destination: "./uploads",
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

const upload = Multer({ storage: fileStorage }).single("avatar");


export default async function handler(req, res) {
  const {method} = req
  switch (method) {
    case "POST":
      try {
        await applyMiddleware(req, res, upload);
        const data = await uploadFile(req.file)
        unlinkfile(req.file.path)
        res.status(400).json({data: data.Location});
      } catch (error) {
        res.status(400).json({error: "There was some error"})
      }
      break;
    
    default:
      break;
      
  }
}