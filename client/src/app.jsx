import React from 'react';

App = () => {
    return (
        <div className="container">
			<div className="display-1 text-light text-center my-2">db-friends</div>
			<h5 className="text-light text-center mb-5">
				A database platform to keep for friends and contacts
			</h5>

			<ul className="nav justify-content-center bg-dark py-1 mb-4">
				<li className="nav-item me-4">
					<a className="nav-link text-light strong" href="index.html"><strong>HOME</strong></a>
				</li>
				<li className="nav-item me-4">
					<a className="nav-link text-light strong" href="#"><strong>CONTACTS</strong></a>
				</li>
				<li className="nav-item me-4">
					<a className="nav-link text-light" href="#"><strong>ABOUT</strong></a>
				</li>
				<li className="nav-item me-4">
					<a className="nav-link text-light" href="#"><strong>LOGIN</strong></a>
				</li>
				<li className="nav-item me-4">
					<a className="nav-link text-light" href="register.html"><strong>REGISTER</strong></a>
				</li>
			</ul>

			<form action="search">
				<div className="row justify-content-center mb-3">
					<div className="form-group col-md">
						<label for="fname" className="form-label strong">First Name</label>
						<input type="text" className="form-control" id="fname" name="firstName"/>
					</div>

					<div className="form-group col-md">
						<label for="lname" className="form-label">Last Name</label>
						<input type="text" className="form-control" id="lname" name="lastName"/>
					</div>
				</div>

				<div type="submit" className="btn btn-primary col-1">Search</div>
			</form>

			<div className="row justify-content-center">
				<a className="btn btn-dark text-light col-6 mt-5 text-center" href="./newProfile.html">
					Create a new profile
				</a>
			</div>
		</div>
    );
};

export default App;