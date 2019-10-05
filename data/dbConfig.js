const knex = require('knex');
const config = require('../knexfile.js');
const dotenv = require('dotenv')

dotenv.config()
console.log(process.env.DB_ENV)
const environment = process.env.DB_ENV || 'development';

module.exports = knex(config[environment]);
