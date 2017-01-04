import express from 'express'

import { db } from './database'
import { setupMiddleware } from './middleware'
import router from './router'

const app = express()

setupMiddleware(app)
router(app)

app.listen(3000, () => {
  console.log('Photo Voter @3000.')
})
