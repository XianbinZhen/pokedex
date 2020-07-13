import React from 'react';

const About = () => {
	return (
		<div>
			<h1>About</h1>
			<p>
				This is a project create with <i className="fab fa-react fa-2x" /> React. Using{' '}
				<a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
					PokeAPI
				</a>{' '}
				as input. Search option will only accept the full name or ID of a pokemon.
			</p>
		</div>
	);
};

export default About;
