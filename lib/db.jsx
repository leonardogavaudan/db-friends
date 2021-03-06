import Sequelize from 'sequelize';

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

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
