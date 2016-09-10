'use strict' // heroku prefers 'use strict'

var express = require('express');
var router = express.Router();
const pg = require('../db/knex_config.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  pg.select().table('todo')
    .then((rows)=>{
      res.render('index', {items:rows})
    })
    .catch((err)=>{
      console.error('Error getting from database!');
      next(err)
    })
});

module.exports = router;
