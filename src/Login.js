import React from 'react' ;
import { Link } from 'react-router-dom'

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			form : {
				values: {
					email : '',
					password: '',
				},
				errors: {
					email: {
						errorClass: '',
						errorMsg: '',
						isError: true
					},
					password: {
						errorClass: '',
						errorMsg: '',
						isError: true
					}
				},
				formHasErrors: true
			},
			isLoggedIn: false,		
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange ( event ) {

		//console.log(event);

		let name = event.target.name;	
		let value = event.target.value;

		let newState = this.state;

		switch ( name ) {

			default:
				break;
			case 'email':

				if ( value.length === 0 ) {

					newState.form.errors.email.errorClass = 'has-error';
					newState.form.errors.email.errorMsg = ' * This field is required.';
					newState.form.errors.email.isError = true;
				} else {

					newState.form.errors.email.errorClass = 'has-success';
					newState.form.errors.email.errorMsg = '';
					newState.form.errors.email.isError = false;
				}

				newState.form.values.email = value;

				break;
			case 'password':

				if ( value.length === 0 ) {

					newState.form.errors.password.errorClass = 'has-error';
					newState.form.errors.password.errorMsg = ' * This field is required.';
					newState.form.errors.password.isError = true;
				} else {

					newState.form.errors.password.errorClass = 'has-success';
					newState.form.errors.password.errorMsg = '';
					newState.form.errors.password.isError = false;
				}

				newState.form.values.password = value;
				break;
		}

		if ( newState.form.errors.email.isError === false && newState.form.errors.password.isError === false ) {

			newState.form.formHasErrors = false;
		}

		this.setState(newState);
	}

	handleSubmit(event) {
		event.preventDefault();
		//alert(event);
		// stop here if form is invalid
        /*if (!(this.state.form.values.email && this.state.form.values.password)) {
            return;
        }*/

		fetch('http://amigoview.com/iosdemo/login.php', {
			method: 'POST',
			body: JSON.stringify({
				email: this.state.form.values.email,
				password: this.state.form.values.password,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				return response.json()
			}).then(json => {
				if (json.success) {
					this.setState.isLoggedIn = true;
					alert("Login Successful!");
				}
			});

	}

	render(){
		return (
			<div className="login-form">
				<form onSubmit={this.handleSubmit}>

				  <div className="container">

				  	<div className={'form-group ' + this.state.form.errors.email.errorClass}>

						<label><b>Username</b></label>
				    	<input type="text" placeholder="Enter Username" name="email" value={this.state.form.values.email} onChange={this.handleChange} />
				    	<div className="help-block">{ this.state.form.errors.email.errorMsg }</div>

				  	</div>

				  	<div className={'form-group ' + this.state.form.errors.password.errorClass}>

						<label><b>Password</b></label>
				    	<input type="password" placeholder="Enter Password" name="password" value={this.state.form.values.password} onChange={this.handleChange} />
				    	<div className="help-block">{ this.state.form.errors.password.errorMsg }</div>

				  	</div>

				    <button disabled={this.state.form.formHasErrors} type="submit">Login</button>
				    {/*<label>
				      <input type="checkbox" checked="checked" name="remember" /> Remember me
				    </label>*/}
				  </div>

				  <div className="container cancel-panel" style={{background:"#f1f1f1"}}>
				  	<div className="cancelbtn-div">
				  		<button type="button" className="cancelbtn">Cancel</button>
			  		</div>
				    <div className="register">
				    	<span className="psw">Don't have account <Link to={'/register'}>Register Here</Link></span>
			    	</div>
				    <div className="forgotpsw">
				    	<span className="psw">Forgot <Link to={'#'}>password?</Link></span>
			    	</div>
				  </div>
				</form>
			</div>
		)
	}
}

export default Login