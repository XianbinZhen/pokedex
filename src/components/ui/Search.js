import React, { useState } from 'react';

export default function Search({ query }) {
	const [ text, setText ] = useState('');

	const updateText = (e) => {
		setText(e.target.value);
	};

	return (
		<form className="form-group">
			<i className="fas fa-search" />
			<input type="text" placeholder="Pokemon full name or ID" className="search-text" onChange={updateText} />
			<button
				className="btn-primary"
				onClick={(e) => {
					e.preventDefault();
					query(text);
				}}
			>
				Search
			</button>
		</form>
	);
}
