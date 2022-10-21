const express = require('express')

const { userController } = require('../../controllers')
const { 
   googleAuthUrl, googleCallBack
} = userController

const router = new express.Router()

//get google auth url
// 1)
router.get('/googleAuthUrl' , googleAuthUrl)

//get google callback
// 2)
router.get("/google/callback", googleCallBack )

module.exports = router