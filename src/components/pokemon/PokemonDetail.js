import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Pokemon from './Pokemon';

const PokemonDetail = ({ currentPokemon, showPokemonDetail }) => {
	const [ imgUrl, setImgUrl ] = useState([]);
	const [ sprites, setSprites ] = useState({});

	const [ id, setId ] = useState('');
	const [ name, setName ] = useState('');
	const [ types, setTypes ] = useState([ { slot: 1, type: { name: '', url: '' } } ]);
	const [ weight, setWeight ] = useState('');
	const [ height, setHeight ] = useState('');

	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const result = await Axios(currentPokemon.url);
			setImgUrl(result.data.sprites.front_default);
			setId(result.data.order);
			setName(result.data.name);
			setTypes(result.data.types);
			setWeight(result.data.weight);
			setHeight(result.data.height);
			setSprites(result.data.sprites);
			setLoading(false);
		};
		fetchData();
	}, []);
	return (
		<div className="container">
			<div className="pokemon-detail " onClick={showPokemonDetail}>
				<img className="pokemon-detail-left" src={sprites.front_default} />
				<div className="pokemon-detail-right">
					<div className="pokemon-detail-right-top">
						<p>
							#{id} {name}
						</p>
						<table>
							<tbody>
								<tr>
									<td>Types</td>
									{types && types.map((type) => <td key={type.slot}>{type.type.name}</td>)}
								</tr>
								<tr>
									<td>Height</td>
									<td>{height}</td>
								</tr>
								<tr>
									<td>Weight</td>
									<td>{weight}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			{Object.values(sprites).map(
				(url, index) => (url ? <img key={index} src={url} /> : <React.Fragment key={index} />)
			)}
		</div>
	);
};

export default PokemonDetail;
