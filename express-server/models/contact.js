const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../config/database');

const Contact = connection.define('contact',
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
        email: {
            type: DataTypes.STRING(50)
        }
    },
    {
        tableName: 'contacts',
        timestamps: false
    }
)

Contact.sync();

module.exports = Contact;