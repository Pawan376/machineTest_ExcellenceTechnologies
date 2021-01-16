import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
	render() {
		return (
			<div>
				<ul>
				  <li><a href="#home">Layout 1</a></li>
				  <li><a href="#news">About</a></li>
				  <li><a href="#contact">Services</a></li>
				  <li><a href="#about">Contact</a></li>
				</ul>
			</div>
		)
	}
}
export default Navbar;