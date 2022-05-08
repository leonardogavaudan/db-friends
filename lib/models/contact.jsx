import { Sequelize, DataTypes } from 'sequelize';
import db from '../db_test';

const Contact = db.define(
	'contact',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true,
		},
		firstName: {
			type: DataTypes.STRING(50),
		},
		middleName: {
			type: DataTypes.STRING(50),
		},
		lastName: {
			type: DataTypes.STRING(50),
		},
		email: {
			type: DataTypes.STRING(50),
		},
		dateOfBirth: {
			type: DataTypes.STRING(50),
		},
	},
	{
		tableName: 'contacts',
		timestamps: false,
	},
);

Contact.sync();

export default Contact;
