'use strict'

const express = require('express')
let router = express.Router()

router.post('/v1/items', (req, res, next)=>{
  res.json(req.body)
})


module.exports = router
