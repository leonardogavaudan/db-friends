const Sequelize = require('sequelize')
const {db} = require('../config/database.js')

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
})