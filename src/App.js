import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import Navbar from './components/ui/Navbar';
import PokemonList from './components/pokemon/PokemonList';
import Pagination from './components//ui/Pagination';
import Search from './components/ui/Search';
import PokemonDetail from './components/pokemon/PokemonDetail';
import About from './components/ui/About';
import Footer from './components/ui/Footer';

const DEFAULT_URL = 'https://pokeapi.co/api/v2/pokemon';
const LAST_PAGE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=877';

function App() {
	const [ isShowAll, setIsShowAll ] = useState(true);
	const [ pokemon, setPokemon ] = useState([]);
	const [ currentUrl, setCurrentUrl ] = useState(DEFAULT_URL);
	const [ currentPokemon, setCurrentPokemon ] = useState({});

	const [ prevUrl, setPrevUrl ] = useState(null);
	const [ nextUrl, setNextUrl ] = useState(null);

	useEffect(
		() => {
			let cancel;
			const fetchData = async () => {
				try {
					const result = await Axios({
						method: 'GET',
						url: currentUrl,
						cancelToken: new Axios.CancelToken((c) => (cancel = c))
					});
					if (result.data.results) {
						setPokemon(result.data.results);
						setPrevUrl(result.data.previous);
						setNextUrl(result.data.next);
					}
					if (result.data.forms) {
						setPrevUrl(null);
						setNextUrl(null);
						setPokemon([ { name: result.data.name, url: currentUrl } ]);
					}
				} catch (error) {
					if (Axios.isCancel(error)) {
						console.log('Cancel request.');
					}
				}
			};
			fetchData();
			return () => cancel();
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
			const url = `${DEFAULT_URL}/${param.toLowerCase()}`;
			setCurrentUrl(url);
		}
	};

	const showPokemonDetail = (pokemon) => {
		setIsShowAll(!isShowAll);
		setCurrentPokemon(pokemon);
	};

	return (
		<div className="container">
			<Navbar />
			<Switch>
				<Route exact path="/pokedex">
					{isShowAll ? (
						<div>
							<Pagination
								previousPage={previousPage}
								resetPage={resetPage}
								nextPage={nextPage}
								lastPage={lastPage}
							/>
							<Search query={query} />
							<PokemonList pokemon={pokemon} showPokemonDetail={showPokemonDetail} />
						</div>
					) : (
						<PokemonDetail
							currentPokemon={currentPokemon}
							showPokemonDetail={() => setIsShowAll(!isShowAll)}
						/>
					)}
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
