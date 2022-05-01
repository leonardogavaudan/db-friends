import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Inputs {
	firstName: string;
	lastName: string;
}

const NewContact = () => {
	const onSubmit: SubmitHandler<Inputs> = (data) => {
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
	} = useForm<Inputs>();

	return (
		<div className="flex flex-col">
			<div className="text-zinc-500q mb-5 text-3xl">NEW CONTACT</div>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col text-black">
				<div className="flex max-w-md flex-col gap-y-5">
					<input {...register('firstName', { required: true })} />
					<input {...register('lastName', { required: true })} />

					<input
						type="submit"
						defaultValue={'Create'}
						className="mt-8 w-32 self-end rounded bg-white"
					/>
				</div>
			</form>
		</div>
	);
};

export default NewContact;
