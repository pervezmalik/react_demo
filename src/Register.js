import React from 'react';
import { Link } from 'react-router-dom'

class Register extends React.Component {
	render(){
		return (
			<div className="register-form">
				<form action="/action_page.php">
				  <div className="container">
				    <h1>Register</h1>
				    <p>Please fill in this form to create an account.</p>
				    <hr />

				    <label for="email"><b>Email</b></label>
				    <input type="text" placeholder="Enter Email" name="email" required />

				    <label for="psw"><b>Password</b></label>
				    <input type="password" placeholder="Enter Password" name="psw" required />

				    <label for="psw-repeat"><b>Repeat Password</b></label>
				    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
				    <hr />
				    <p>By creating an account you agree to our <Link to={'#'}>Terms & Privacy</Link>.</p>

				    <button type="submit" className="registerbtn">Register</button>
				  </div>
				  
				  <div className="container signin">
				    <p>Already have an account? <Link to={'/login'}>Sign in</Link>.</p>
				  </div>
				</form>
			</div>
		)
	}
}

export default Register