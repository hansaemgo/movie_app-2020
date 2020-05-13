import React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, year, title, summary, poster, genres }) {
	return (
		<div className='movie'>
			<img src={poster} alt={title} title={title} />
			<h3 className='movie_title'>{title}</h3>
			<h5 className='movie_year'>{year}</h5>
			<ul className='genres'>
				{genres.map((genres, index) => (
					<li key={index} className='generes_genre'>
						{genres}
					</li>
				))}
			</ul>
			<p className='movie_summary'>{summary}</p>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number,
	year: PropTypes.number,
	title: PropTypes.string,
	summary: PropTypes.string,
	poster: PropTypes.string,
	generes: PropTypes.string,
};

export default Movie;
