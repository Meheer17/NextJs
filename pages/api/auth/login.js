const express = require('express')
const app = express()
import auth from '../../../lib/auth'

app.use(auth).post(passport.authenticate('local'), (req, res) => {
    res.json({ user: req.user })
})

export default app