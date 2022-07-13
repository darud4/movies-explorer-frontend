import './Movies.css'
import { useState, useEffect } from 'react';
import Filter from '../Filter/Filter';
import { moviesApi } from '../../utils/MoviesApi';
import { CONFIG } from '../../config';

const { imgUrl } = CONFIG;

function Movies({ onButtonClick, savedMovies }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMoviesList() {
            const moviesList = await moviesApi.search();
            const processed = moviesList.map(({ country, director, duration, year, description,
                trailerLink, nameRU, nameEN, id: movieId, image: imageObj }) =>
            ({
                id: movieId, country, director, duration, year, description, trailerLink, nameRU, nameEN, movieId, image: `${imgUrl}${imageObj.url}`,
                thumbnail: `${imgUrl}${imageObj.formats.thumbnail.url}`
            }));
            setMovies(processed);
        }
        getMoviesList();
        console.log('movies list updated');
    }, []);

    function getStyle(movieId) {
        if (savedMovies.find(savedMovie => savedMovie.movieId === movieId)) return 'movies-card__like movies-card__like_active';
        return 'movies-card__like';
    }

    return (<main className="movies">
        <Filter
            useLocalStorage={true}
            buttonClassName={getStyle}
            onButtonClick={onButtonClick}
            movies={movies}
        />
    </main >);
}

export default Movies;