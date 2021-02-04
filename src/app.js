import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import admin from 'firebase-admin'
import bodyParser from 'body-parser'

import indexRouter from './routes/index'

const app = express()
const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://onenote-5dd9c-default-rtdb.firebaseio.com',
  storageBucket: 'onenote-5dd9c.appspot.com',
})

export const storage = admin.storage().bucket()
export const database = admin.database()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

app.use((req, res, next) => {
  next(createError(404))
})

app.use((err, req, res) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
})

export default app
