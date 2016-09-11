'use strict'

const express = require('express')
let router = express.Router()
const pg = require('../db/knex_config.js')

router.post('/v1/items', (req, res, next)=>{
  let name = req.body.name
  let description = req.body.description

  if(name.length > 255){
    return res.redirect('/')
  }

  if(description.length > 255){
    return res.redirect('/')
  }
  next()
})

router.post('/v1/items', (req, res, next)=>{
  pg('todo').insert(req.body)
  .then(()=>{
    res.redirect('/')
  })
  .catch((err)=>{
    console.error('Error caught in inserting into DB');
    next(err)
  })
})

router.get('/v1/items/delete/:id', (req, res, next)=>{
  // console.log("the id is: ", req.params.id);
  // res.json(req.params)
  pg('todo').where('id', req.params.id).del()
    .then((something)=>{
      res.redirect('/')
    })
  .catch((err)=>{
    console.error('An error in deleting row from DB')
    next(err)
  })
})




module.exports = router
