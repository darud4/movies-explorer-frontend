import './Movies.css'
import { useState, useEffect } from 'react';
import Filter from '../Filter/Filter';
import { moviesApi } from '../../utils/MoviesApi';
import { CONFIG } from '../../config';

const { imgUrl } = CONFIG;

function Movies({ onButtonClick, savedMovies }) {

    const [movies, setMovies] = useState([]);
    const [isPreloader, setPreloader] = useState(false);

    useEffect(() => {
        async function getMoviesList() {
            setPreloader(true);
            try {
                const moviesList = await moviesApi.search();
                const processed = moviesList.map(({ country, director, duration, year, description,
                    trailerLink, nameRU, nameEN, id: movieId, image: imageObj }) =>
                ({
                    id: movieId, country, director, duration, year, description, trailerLink, nameRU, nameEN, movieId, image: `${imgUrl}${imageObj.url}`,
                    thumbnail: `${imgUrl}${imageObj.formats.thumbnail.url}`
                }));
                setMovies(processed);
            } catch (error) {
                console.log('getMoviesList: ', error);
            }
            setPreloader(false);
        }

        getMoviesList();
    }, []);

    function getStyle(movieId) {
        if (savedMovies.find(savedMovie => savedMovie.movieId === movieId)) return 'movies-card__like movies-card__like_active';
        return 'movies-card__like';
    }

    return (<main className="movies">
        <Filter
            isBusy={isPreloader}
            useLocalStorage={true}
            buttonClassName={getStyle}
            onButtonClick={onButtonClick}
            movies={movies}
        />
    </main >);
}

export default Movies;