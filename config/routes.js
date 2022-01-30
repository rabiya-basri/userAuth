const express = require('express')
const router = express.Router()
const usersControllers = require('../app/controllers/usersController')
const authenticateUser = require('../app/middlewares/authenticate')

router.post('/users/register', usersControllers.register)
router.post('/users/login',authenticateUser,usersControllers.login)
module.exports = router