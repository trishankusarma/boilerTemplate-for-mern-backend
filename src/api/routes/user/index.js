const express = require('express')

const { userController } = require('../../controllers')
const { 
   createUser, getUser, updateUser, deleteUser
} = userController

const router = new express.Router()

/* @get */
router.get('/', getUser)

/* @post */
router.post('/', createUser)

/* @patch */
router.patch('/', updateUser)

/* @delete */
router.delete('/', deleteUser)

module.exports = router