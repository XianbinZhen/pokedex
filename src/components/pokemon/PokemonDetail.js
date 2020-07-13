import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const PokemonDetail = ({ currentPokemon, showPokemonDetail }) => {
	const [ imgUrl, setImgUrl ] = useState([]);
	const [ sprites, setSprites ] = useState({});

	const [ id, setId ] = useState('');
	const [ name, setName ] = useState('');
	const [ types, setTypes ] = useState([ { slot: 1, type: { name: '', url: '' } } ]);
	const [ weight, setWeight ] = useState('');
	const [ height, setHeight ] = useState('');

	useEffect(
		() => {
			const fetchData = async () => {
				const result = await Axios(currentPokemon.url);
				// setImgUrl(result.data.sprites.front_default);
				setImgUrl(`https://pokeres.bastionbot.org/images/pokemon/${result.data.id}.png`);
				setId(result.data.id);
				setName(result.data.name);
				setTypes(result.data.types);
				setWeight(result.data.weight);
				setHeight(result.data.height);
				setSprites(result.data.sprites);
			};
			fetchData();
		},
		[ currentPokemon.url ]
	);
	return (
		<div>
			<div className="pokemon-detail ">
				<img
					className="pokemon-detail-left"
					src={id > 807 ? sprites.front_default : imgUrl}
					alt="pokemon-sprites"
				/>
				<div className="pokemon-detail-right">
					<div className="pokemon-detail-right-top">
						<p>
							#{id} <br />
							{name}
						</p>
					</div>
					<table>
						<tbody>
							<tr>
								<td>Types</td>
								{types.map((type) => <td key={type.slot}>{type.type.name}</td>)}
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
			<div className="pokemon-detail-sprites">
				{Object.values(sprites).map((url, index) => url && <img key={index} src={url} alt="sprites" />)}
			</div>
			<button className="back-btn" onClick={showPokemonDetail}>
				Back
			</button>
		</div>
	);
};

export default PokemonDetail;
