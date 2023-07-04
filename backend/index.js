import express from 'express'
import bodyParser from 'body-parser'
import mongoConnect from './utils/dbConnection.js'
import routes from './routes/routes.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

const app = express()

mongoConnect()
app.use(cors('*'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(routes)
app.use('/user',userRoutes)

app.listen(3003)