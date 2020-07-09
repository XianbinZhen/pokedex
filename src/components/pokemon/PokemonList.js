import React from 'react';
import Pokemon from './Pokemon';
import '../../App.css';

export default function PokemonList({ pokemon }) {
	return (
		<div className="pokemon-grid">{pokemon.map((pokemon) => <Pokemon key={pokemon.name} pokemon={pokemon} />)}</div>
	);
}
