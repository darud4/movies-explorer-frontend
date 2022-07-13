import './Movies.css'
import { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Filter from '../Filter/Filter';
import { mainApi } from '../../utils/MainApi';
import { getResults } from '../../utils/storage';
import { CONFIG } from '../../config';
import { moviesApi } from '../../utils/MoviesApi';

const { imgUrl } = CONFIG;


function Movies({ onButtonClick }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function getMoviesList() {
            const data = await moviesApi.search();
            console.log(data);
            const processed = data.map(({ country, director, duration, year, description, trailerLink, nameRU, nameEN, id: movieId, image: imageObj }) =>
                ({ id: movieId, country, director, duration, year, description, trailerLink, nameRU, nameEN, movieId, image: `${imgUrl}${imageObj.url}`, thumbnail: `${imgUrl}${imageObj.formats.thumbnail.url}` })
            );
            console.log(processed);
            setMovies(processed);
        }
        getMoviesList();
    }, []);

    return (<main className="movies">
        <Filter buttonClassName='movies-card__like'
            onButtonClick={onButtonClick}
            movies={movies}
        />
    </main >);

}

export default Movies;