const express = require('express')
const router = new express.Router()

const userRouter = require('./user')
const donationRouter = require('./donation')
const crimeRouter = require('./crime')

router.use('/user', userRouter)
router.use('/crime', crimeRouter)
router.use('/donation', donationRouter)

module.exports = router