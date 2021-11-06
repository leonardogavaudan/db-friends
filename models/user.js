const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../config/database');

const User = connection.define('user',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING
        },
        hash: {
            type: DataTypes.STRING
        },
        salt: {
            type: DataTypes.STRING
        },
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'users',
        timestamps: false
    }
);

User.sync();

module.exports = User;