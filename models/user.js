const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../config/database.js');

const User = connection.define('user',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(50)
        },
        password: {
            type: DataTypes.STRING(50)
        },
        hash: {
            type: DataTypes.STRING(64)
        },
        salt: {
            type: DataTypes.STRING(32)
        },
        firstName: {
            type: DataTypes.STRING(50)
        },
        lastName: {
            type: DataTypes.STRING(50)
        },
        email: {
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