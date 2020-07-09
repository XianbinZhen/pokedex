import React, { useState, useEffect } from 'react';
import Loading from './components/ui/Loading';
import PokemonList from './components/pokemon/PokemonList';
import Pagination from './components//ui/Pagination';
import Search from './components/ui/Search';
import Axios from 'axios';

const DEFAULT_URL = 'https://pokeapi.co/api/v2/pokemon';
const LAST_PAGE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=877';

function App() {
	const [ pokemon, setPokemon ] = useState([]);
	const [ currentUrl, setCurrentUrl ] = useState(DEFAULT_URL);

	const [ prevUrl, setPrevUrl ] = useState(null);
	const [ nextUrl, setNextUrl ] = useState(null);

	useEffect(
		() => {
			const fetchData = async () => {
				const result = await Axios(currentUrl);
				if (result.data.results) {
					setPokemon(result.data.results);
					setPrevUrl(result.data.previous);
					setNextUrl(result.data.next);
				}
				if (result.data.forms) {
					setPrevUrl(null);
					setNextUrl(null);
					setPokemon(result.data.forms);
				}
			};
			fetchData();
		},
		[ currentUrl ]
	);

	const previousPage = () => {
		prevUrl && setCurrentUrl(prevUrl);
	};

	const resetPage = () => {
		setCurrentUrl(DEFAULT_URL);
	};
	const nextPage = () => {
		nextUrl && setCurrentUrl(nextUrl);
	};

	const lastPage = () => {
		setCurrentUrl(LAST_PAGE_URL);
	};
	const query = (param) => {
		if (param) {
			const url = `${DEFAULT_URL}/${param}`;
			setCurrentUrl(url);
		}
	};

	return (
		<div className="container">
			<Pagination previousPage={previousPage} resetPage={resetPage} nextPage={nextPage} lastPage={lastPage} />
			<Search query={query} />
			<PokemonList pokemon={pokemon} />
		</div>
	);
}

export default App;
