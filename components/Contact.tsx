interface Contact {
	firstName: string;
	lastName: string;
	middleName: string;
	email: string;
}

interface ContactProps {
	contact: Contact;
}

const Contact = (props: ContactProps) => {
	const { firstName, lastName, middleName, email } = props.contact;

	return (
		<div className="py-2">
			<button>
				<div className="grid h-24 w-full grid-cols-8 items-center justify-start gap-6 hover:bg-slate-900">
					<div>
						<div>{firstName}</div>
						<div>{middleName}</div>
						<div>{lastName}</div>
					</div>

					<div className="col-span-2">{email}</div>
				</div>
			</button>
		</div>
	);
};

export default Contact;
