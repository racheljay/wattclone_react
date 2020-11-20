import React, { useState, useEffect } from 'react';
import axios from 'axios';
// const AppContext = React.createContext({});
// const AppProvider = AppContext.Provider;

function Login(props) {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [accessToken, setAccessToken] = useState('');

	
		

	const submit = () => {
		
		
		const data = {
			username: email,
			password,
			client_secret: "Rb620RLEtPgZ37lZJtn0keWykvNpiaqgovOZ2g8P",
			client_id: '2',
			grant_type: 'password',
			scope: ''
		};

		const method = 'post';
		const url = 'http://localhost:8000/v1/oauth/token';
		// const data = { email, password };
		const headers = {
			'Content_Type': 'application/json;charset=UTF-8',
			'Access-Control-Allow-Origin': '*',
			'Access': 'application/json'
		}

		axios({
			method,
			url,
			data,
			// body,
			headers
		}).then(res => {
			console.log(res)
			// console.log(res.data.access_token)
			setAccessToken(res.data.access_token);
			console.log(accessToken)
			sessionStorage.setItem('token', accessToken)
		}).catch(err => console.log('error: ', err));
	}


	return (
		<div className="container">
			<h1>Login</h1>

			<div className="form-group row">
				<label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
				<div className="col-sm-10">
					<input
						type="email"
						className="form-control"
						id="inputPassword3"
						placeholder="Email"
						onChange={e => setEmail(e.target.value)}
						value={email}
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
						onClick={() => submit()}
					>Login</button>
				</div>
			</div>

		</div>


	)

}

export default Login;