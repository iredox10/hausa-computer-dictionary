import express from 'express'
import * as userController from '../controllers/userController.js'
const route = express.Router()

route.post('/register', userController.register)

route.post('/login',userController.login )

route.post('/add-favorite', userController.add_to_favorite)

route.get('/view-favorite/:id', userController.view_favorite)

route.post('/add-history', userController.add_history)

export default route