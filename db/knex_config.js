'use strict' // heroku prefers 'use strict'

const knex = require('knex')
const config = require('../knexfile.js')
const env = process.env.NODE_ENV || 'development'  //node_env???

let pg = knex(config[env])

module.exports = pg
