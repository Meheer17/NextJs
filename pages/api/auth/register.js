const express =  require('express') 
const app = express()
const myDB = require('../../../utils/connections');
import {useRouter} from 'next/router'
const router = useRouter()
import passport from 'passport'
import auth from '../../../lib/auth'

myDB(async (cl) => {
  const adn = await cl.db('Nextjs').collection('users');
    app.use(auth).post((req, res, next) => {
        const hash = bcrypt.hashSync(req.body.password, 12);
        adn.findOne({ username: req.body.username }, function (err, user) {
            if (err) {
              next(err);
            } else if (user) {
              router.push('/');
            } else {
              adn.insertOne({ username: req.body.username, password: hash, isAdmin: false }, (err, doc) => {
                if (err) {
                  router.push('/');
                } else {
                  next();
                }
              });
            }
          });
    }),
    passport.authenticate('local', { failureRedirect: '/' }),
    (req, res, next) => {
      router.push('/projects');
    }
})

export default app 