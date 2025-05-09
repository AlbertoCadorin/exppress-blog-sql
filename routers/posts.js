const express = require('express')
const router = express.Router()

const postsController = require('../conntrollers/postsController')

router.get('/', postsController.index)

module.exports = router