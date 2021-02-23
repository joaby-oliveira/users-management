var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      port: '3307',
      user : 'root',
      password : '12345678',
      database : 'users'
    }
  });

module.exports = knex