import React from 'react';
import loading from '../../img/running.gif';
import '../../App.css';

export default function Loading() {
	return (
		<div className="container text-center">
			<img src={loading} className="loading" alt="loading..." />
			<p>Loading...</p>
		</div>
	);
}
