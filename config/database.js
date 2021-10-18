const { Sequelize } = require('sequelize');

const db = new Sequelize('dbfriends', 'testuser', 'testpassword', {
    dialect: 'mysql',
    host: 'localhost',
});

try {
    db.authenticate();
    console.log('Database connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = db;