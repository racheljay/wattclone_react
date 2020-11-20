import React, { useState, useEffect } from 'react';

function Login(props) {

	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className="container">
			<h1>Login</h1>


			<div className="form-group row">
				<label for="inputPassword3" className="col-sm-2 col-form-label" >Username</label>
				<div className="col-sm-10">
					<input
						type="username"
						className="form-control"
						id="inputPassword3"
						placeholder="Username"
						onChange={e => setName(e.target.value)}
						value={name}
					/>
				</div>
			</div>


			<div className="form-group row">
				<label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
				<div className="col-sm-10">
					<input
						type="password"
						className="form-control"
						id="inputPassword3"
						placeholder="Password"
						onChange={e => setPassword(e.target.value)}
						value={password}
					/>
				</div>
			</div>

			<div className="form-group row">
				<div className="col-sm-10">
					<button
						className="btn btn-primary"
						// onClick={() => submit()}
					>Sign Up</button>
				</div>
			</div>

		</div>


	)

}

export default Login;