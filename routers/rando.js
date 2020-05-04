const express = require('express')
const randoController = require('../controllers/rando')
const router = express.Router()

router.get('/', randoController.getRandom)

module.exports = router