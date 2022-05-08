import Contact from '../../lib/models/contact';

const createNewContact = (req, res) => {
	const method = req.method;

	switch (method) {
		case 'GET': {
			Contact.findAll().then((response) => res.json(response));
			break;
		}

		case 'POST': {
			const { firstName, middleName, lastName, email, dateOfBirth } = req.body;
			console.log(firstName);
			console.log(lastName);

			let newContact = new Contact({
				firstName,
				middleName,
				lastName,
				email,
				dateOfBirth,
			});
			newContact.save();
			console.log(`just saved ${firstName} ${lastName}`);

			res.status(200);
			res.send();
			break;
		}

		default: {
			res.setHeader('Allow', ['GET', 'POST']);
			res.status(405).end(`Method ${method} Not Allowed`);
		}
	}
};

export default createNewContact;
