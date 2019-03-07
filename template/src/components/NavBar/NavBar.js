import React from 'react';

const NavBar = () => {
		return (

				<ul className="navigation-links">
						<li>
								<a href="#">
										<span className="glyphicon glyphicon-adjust"></span>
        			  </a>
						</li>
						<li> <a href="bubbles">Products </a> </li>
						<li> <a href="bundles">Bundles </a> </li>
						<li> <a href="about">About Us </a> </li>
						<li className="cart"> <a href="cart">Cart </a> </li>
				</ul>
		);
}

export default NavBar;
