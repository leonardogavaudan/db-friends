const {Sequelize, DataTypes} = require('sequelize');
const db = require('../config/database.js');

const User = db.define('user',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING(50)
        },
        lastName: {
            type: DataTypes.STRING(50)
        },
        email:{
            type: DataTypes.STRING(50)
        },
        password:{
            type: DataTypes.STRING(50)
        }
    },
    {
        tableName: 'users',
        timestamps: false
    }
);

User.sync();

module.exports = User;