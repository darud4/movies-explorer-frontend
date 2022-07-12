import './SavedMovies.css'
import { useEffect, useState } from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ onButtonClick }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function getSaved() {
            
        }

        getSaved();
    }, [setMovies]);

    return <main className="saved-movies">
        <SearchForm />
        <MoviesCardList
            buttonClassName='movies-card__like_remove'
            moviesToShow={movies}
            onButtonClick={onButtonClick}
        />
    </main>

}

export default SavedMovies;