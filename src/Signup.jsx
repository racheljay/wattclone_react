import React, { useState } from 'react';
import axios from 'axios';

function Signup(props) {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// const success = (res) => {
	// 	if(res.status == 200) {
	// 		console.log('we did it');
	// 	}
	//}
const axiosCall = () => {
const method = 'post';
const url = 'http://localhost:8000/register';
// const body = {name: 'poopy', email: 'test@test.com', password: 'test'};
const data = {name, email, password};
const headers = {
	'Content_Type': 'application/json;charset=UTF-8',
	'Access-Control-Allow-Origin': '*'
}

	axios({
		method,
		url,
		data,
		// body,
		headers
	}).then(res =>{
		console.log(res)
	}).catch(err => console.log('error: ', err));
}

const submit = () => {
	const method = 'post';
	const url = 'http://localhost:8000/register';
	const data = { name, email, password };

	axiosCall(method, url, data)
}


	return (
		<div className="container">
			<h1>Register</h1>
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
						>Sign Up</button>
					</div>
				</div>
		
		</div>
	)
}

export default Signup;