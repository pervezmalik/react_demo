import React from 'react';
import logo from './img/logo.png';
import { Link } from 'react-router-dom'
class Header extends React.Component{
  render(){
    return (
    	
			<div className="header">
				<div className="container">
					<Link to={'/'} className="logo"><img src={logo} className="App-logo" alt="logo" /></Link>
					<div className="header-right">
					  <Link to={'/'}>Home</Link>
					  <Link to={'/contact'}>Contact</Link>
					  <Link to={'/about'}>About</Link>
					  <Link to={'/login'}>Login</Link>
					</div>
				</div>
			</div>
		
    );
  }
  
}

export default Header;
