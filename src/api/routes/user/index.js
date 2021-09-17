const express = require('express')

const { userController } = require('../../controllers')
const { 
   createUser, getUser, updateUser, deleteUser
} = userController

const router = new express.Router()

/* @get */
router.get('/:_id', getUser)

/* @post */
router.post('/', createUser)

/* @patch */
router.patch('/:_id', updateUser)

/* @delete */
router.delete('/:_id', deleteUser)

module.exports = router