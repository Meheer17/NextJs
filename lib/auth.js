import nextConnect from 'next-connect'
import passport from './passport'

const auth = nextConnect()
    .use(session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
    //   store: store,
        cookie: { secure: false },
        key: 'express.sid'
    }))

  .use(passport.initialize())
  .use(passport.session())

export default auth