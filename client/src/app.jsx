import React from 'react';
import Button from '@material-ui/core/Button';

const App = () => {
	return (
		<div>
			<div>db-friends</div>
			<h5>
				A database platform to keep for friends and contacts
			</h5>

			<ul>
				<li>
					<a href="index.html">HOME</a>
				</li>
				<li>
					<a href="#">CONTACTS</a>
				</li>
				<li>
					<a href="#">ABOUT</a>
				</li>
				<li>
					<a href="#">LOGIN</a>
				</li>
				<li>
					<a href="register.html">REGISTER</a>
				</li>
			</ul>

			<form action="search">
				<div>
					<div>
						<label for="fname">First Name</label>
						<input type="text" id="fname" name="firstName" />
					</div>

					<div>
						<label for="lname">Last Name</label>
						<input type="text" id="lname" name="lastName" />
					</div>
				</div>

				<Button type="submit">Search</Button>
			</form>

			<Button variant="contained" href="./newProfile.html"> Create a new profile </Button>
		</div >
	);
};

export default App;