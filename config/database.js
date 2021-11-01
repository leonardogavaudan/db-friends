const { Sequelize } = require('sequelize');

const connection = new Sequelize('dbfriends', 'testuser', 'testpassword', {
    dialect: 'mysql',
    host: 'localhost',
});

try {
    connection.authenticate();
    console.log('Database connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = connection;