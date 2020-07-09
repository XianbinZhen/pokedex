import React, { useState, useEffect } from 'react';
import '../../App.css';
import loadingImg from '../../img/running.gif';

import Axios from 'axios';

export default function Pokemon({ pokemon }) {
	const [ imgUrl, setImgUrl ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const result = await Axios(pokemon.url);
			setImgUrl(result.data.sprites.front_default);
			setLoading(false);
		};
		fetchData();
	}, []);

	return (
		<div>
			<img src={loading ? loadingImg : imgUrl} alt="img unavailable" className="pokemon-img" />
			<p className="pokemon-name">{loading ? 'loading...' : pokemon.name}</p>
		</div>
	);
}
