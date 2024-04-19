//@ts-check

import dotenv from 'dotenv'
dotenv.config()


import express from 'express'
import methodOverride from 'method-override'
const app = express()
app.disable('x-powered-by')
app.use(methodOverride('_method'))
app.use('/check-server', (_req, res)=> {
  res.status(200).send('HEALTHY')
})
app.use(express.static('public'))
const port = 5010
app.listen({
  port
}, ()=> {
  console.log(`Application served on port ${port}`)
})