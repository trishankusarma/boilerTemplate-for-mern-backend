const express = require('express')

const { crimeController } = require('../../controllers')
const { 
   createCrime, getCrime, updateCrime, deleteCrime, crimeDuration
} = crimeController

const router = new express.Router()

/* @get */
router.get('/', getCrime)

/* @post */
router.post('/', createCrime)
router.post('/crimeDuration', crimeDuration)

/* @patch */
router.patch('/', updateCrime)

/* @delete */
router.delete('/', deleteCrime)

module.exports = router