import React from 'react';
import { Link } from 'react-router-dom';
import pokemon from '../../img/pokemon.svg';

const Navbar = () => {
	return (
		<div>
			<div className="nav-logo">
				<img className="nav-logo-img" src={pokemon} alt="pokemon" />

				<ul className="navbar">
					<li>
						<Link to="/" className="link-style">
							Home
						</Link>
					</li>
					<li>
						<Link to="/about" className="link-style">
							About
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
