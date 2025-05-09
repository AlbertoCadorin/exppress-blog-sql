const express = require('express')
const router = express.Router()

const postsController = require('../conntrollers/postsController')
// idex
router.get('/', postsController.index)
// show
router.get('/:id', postsController.show)
//delete
router.delete('/:id', postsController.destroy)

module.exports = router