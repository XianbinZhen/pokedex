import React from 'react';
import '../../App.css';

export default function Pagination({ previousPage, resetPage, nextPage, lastPage }) {
	return (
		<div className="pagination">
			<button className="btn-primary" onClick={resetPage}>
				First page
			</button>
			<button className="btn-primary" onClick={previousPage}>
				Previous
			</button>
			<button className="btn-primary" onClick={nextPage}>
				Next
			</button>
			<button className="btn-primary" onClick={lastPage}>
				Last page
			</button>
		</div>
	);
}
