import { SubmitHandler, useForm } from 'react-hook-form';

interface FormInputs {
	firstName: string;
	lastName: string;
	middleName: string;
	email: string;
	dateOfBirth: string;
}

const NewContact = () => {
	const onSubmit: SubmitHandler<FormInputs> = (data) => {
		console.log(data);

		fetch('/api/contacts', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((response) => console.log('Success:', JSON.stringify(response)))
			.catch((error) => console.error('Error:', error));
	};

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormInputs>();

	return (
		<div className="flex flex-col">
			<div className="mb-16 text-3xl text-zinc-500">NEW CONTACT</div>

			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
				<div className="flex max-w-md flex-col gap-y-6">
					<div>
						<div className="mb-2 ml-2 text-zinc-400">Last name</div>
						<input
							{...register('lastName', { required: true })}
							className=" h-9 w-full rounded py-1 px-2 text-black"
						/>
					</div>

					<div>
						<div className="mb-2 ml-2 text-zinc-400">First name</div>
						<input
							{...register('firstName', { required: true })}
							className=" h-9 w-full rounded py-1 px-2 text-black"
						/>
					</div>

					<div>
						<div className="mb-2 ml-2 text-zinc-400">Middle name</div>
						<input
							{...register('middleName')}
							className=" h-9 w-full rounded py-1 px-2 text-black"
						/>
					</div>

					<div>
						<div className="mb-2 ml-2 text-zinc-400">Email</div>
						<input
							{...register('email')}
							className=" h-9 w-full rounded py-1 px-2 text-black"
						/>
					</div>

					<div>
						<div className="mb-2 ml-2 text-zinc-400">Date of birth</div>
						<input
							{...register('dateOfBirth')}
							className=" h-9 w-full rounded py-1 px-2 text-black"
						/>
					</div>

					<input
						type="submit"
						value="Create"
						className="mt-8 w-32 cursor-auto self-end rounded bg-white text-black"
					/>
				</div>
			</form>
		</div>
	);
};

export default NewContact;
