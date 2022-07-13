import './SavedMovies.css'
import { useEffect, useState } from 'react';
import Filter from '../Filter/Filter';
import { mainApi } from '../../utils/MainApi';

function SavedMovies({ onButtonClick, savedMovies }) {

    //    const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //     async function getMoviesList() {
    //         const data = await mainApi.getSavedMovies();
    //         const processed = data.map(({ _id, country, director, duration, year, description,
    //             trailerLink, nameRU, nameEN, movieId, image, thumbnail }) =>
    //         ({
    //             id: _id, country, director, duration, year, description,
    //             trailerLink, nameRU, nameEN, movieId, image, thumbnail
    //         })
    //         );
    //         setMovies(processed);
    //     }
    //     getMoviesList();
    // }, []);

    return <main className="saved-movies">
        <Filter
            buttonClassName='movies-card__like movies-card__like_remove'
            onButtonClick={onButtonClick}
            movies={savedMovies}
            showListOnMount={true}
        />
    </main>
}

export default SavedMovies;