import express from 'express'

const router = express.Router()

import { getAllUsers as allUsers, loginUser, registerUser } from '../controllers/usersController'

router.get('/', allUsers)

router.post('/login', loginUser)

router.post('/register', registerUser)

export {router};