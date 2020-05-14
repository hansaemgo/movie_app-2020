import React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, year, title, summary, poster, genres }) {
	return (
		<div className='movie'>
			<img src={poster} alt={title} title={title} />
			<h3 className='movie_title'>{title}</h3>
			<h5 className='movie_year'>{year}</h5>
			<ul className='movie_genres'>
				{genres.map((genres, index) => (
					<li key={index} className='genere_genres'>
						{genres}
					</li>
				))}
			</ul>
			<p className='movie_summary'>{summary.slice(0, 180)}</p>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number,
	year: PropTypes.number,
	title: PropTypes.string,
	summary: PropTypes.string,
	poster: PropTypes.string,
	genres: PropTypes.string,
};

export default Movie;
