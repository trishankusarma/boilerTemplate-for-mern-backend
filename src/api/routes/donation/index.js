const express = require('express')

const { donationController } = require('../../controllers')
const { 
   createDonation, getDonation, updateDonation, deleteDonation
} = donationController

const router = new express.Router()

/* @get */
router.get('/', getDonation)

/* @post */
router.post('/', createDonation)

/* @patch */
router.patch('/', updateDonation)

/* @delete */
router.delete('/', deleteDonation)

module.exports = router