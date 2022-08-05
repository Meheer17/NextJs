// import connect from '../../../components/db'
// import {uploadFile} from '../../../lib/s3'
// import path from 'path'
// import multer  from 'multer'
// import fs from 'fs'
// import util from 'util'
// import Router from 'next/router'

// connect()

// export default async (req, res) => {
//   const {method} = req;
//   switch (method) {

//     case 'POST':
//         const unlinkfile = util.promisify(fs.unlink)

//         const storage = multer.diskStorage({
//             destination: "./uploads/",
//             filename: function(req, file, cb) {
//                 cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//             }
//         });

//         var upload = multer({ storage: storage })

//         try {
//             upload.single('test')
//             const data = await uploadFile(req.file);
//             await unlinkfile(req.file.path)
//             console.log(data)
//             Router().push('/')
//         } catch (error) {
//             Router().push('/')
//         }

//         break;

//   }
// }

// app.post('/', upload.array('test', 10) , async ( req, res) => {
//     var promises = []
//     for (var i = 0; i < req.files.length; i++) {
//       const data = await uploadFile(req.files[i]);
//       await unlinkfile(req.files[i].path)
  
//       // ADD MONGO DB HERE FOR LINKING.
//     }
//     res.redirect('/') 
//   })
  