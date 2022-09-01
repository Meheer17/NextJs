import { useRouter } from 'next/router';
const express = require('express')
const app = express()
const router = useRouter() 
app.use(auth).get((req, res) => {
    req.logout();
    router.push('/')
})