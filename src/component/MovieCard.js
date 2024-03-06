import React from 'react';
import './MovieCard.css'
const MovieCard = (props) => {
    const { movie } = props;

    return (
        <>

            <div className="movie-card">
                <img src={movie.image} alt={movie.name} />
                <h3>{movie.name}</h3>
                <p>{movie.releaseYear}</p>
                <p>{movie.duration} mins</p>
                <p>{movie.genres.join(', ')}</p>
                <p>{movie.description}</p>
            </div>
        </>
    );
};

export default MovieCard;
