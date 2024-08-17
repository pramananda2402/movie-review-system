const express = require('express')
const router =  express.Router()
const generController = require('../controllers/gener.controller.js')

router.post('/create-gener', generController.createGener)
router.get('/geners', generController.getGeners)

module.exports = router