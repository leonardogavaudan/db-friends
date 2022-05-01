import { useEffect, useState } from 'react';

import Contact from '../components/Contact';

const Home = () => {
	const [contacts, setContacts] = useState([]);

	const getInitialData = () => {
		return fetch('/api/contacts', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.catch((error) => console.error('Error:', error));
	};

	useEffect(() => {
		getInitialData().then((response) => {
			setContacts(response);
			console.log(JSON.stringify(response));
		});
		console.log('Mounting Component');
	}, []);

	return (
		<div>
			<div className="text-3xl text-zinc-500">HOME</div>
			<div>
				{contacts.map((contact, i) => {
					return (
						<Contact
							key={i}
							firstName={contact.firstName}
							lastName={contact.lastName}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
