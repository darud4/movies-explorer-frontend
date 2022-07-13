import './Movies.css'
import { useState, useEffect } from 'react';
import Filter from '../Filter/Filter';
import { moviesApi } from '../../utils/MoviesApi';
import { CONFIG } from '../../config';
import { mainApi } from '../../utils/MainApi';

const { imgUrl } = CONFIG;

function Movies({ onButtonClick }) {

    const [movies, setMovies] = useState([]);
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        async function getMoviesList() {
            const [moviesList, savedMoviesList] = await Promise.all([moviesApi.search(), mainApi.getSavedMovies()]);
            const processed = moviesList.map(({ country, director, duration, year, description,
                trailerLink, nameRU, nameEN, id: movieId, image: imageObj }) =>
            ({
                id: movieId, country, director, duration, year, description, trailerLink, nameRU, nameEN, movieId, image: `${imgUrl}${imageObj.url}`,
                thumbnail: `${imgUrl}${imageObj.formats.thumbnail.url}`
            }));
            setMovies(processed);
            setSaved(savedMoviesList);
        }
        getMoviesList();
        console.log('movies list updated');
    }, []);

    function getStyle(movieId) {
        console.log(movieId);
        //        console.log(movieId);
        if (saved.find(savedMovie => savedMovie.movieId === movieId)) return 'movies-card__like movies-card__like_active';
        return 'movies-card__like';
    }

    return (<main className="movies">
        <Filter
            buttonClassName={getStyle}
            onButtonClick={onButtonClick}
            movies={movies}
        />
    </main >);
}

export default Movies;