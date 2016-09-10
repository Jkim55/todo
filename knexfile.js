// set up development and production server
require('dotenv').config()

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'todo_list'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
