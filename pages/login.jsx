const Login = () => {
	return (
		<div>
			<div>LOGIN</div>

			<div color="primary">
				<form action="./login/" method="POST">
					<div>
						<label for="email">email</label>
						<input type="text" id="email" name="email" />
						<label for="password">password</label>
						<input type="text" id="password" name="password" />
					</div>

					<button color="primary">Login</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
