const { Sequelize } = require('sequelize');
// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();

const db = new Sequelize('sqlite::memory:');
db.sync();

module.exports = db;
