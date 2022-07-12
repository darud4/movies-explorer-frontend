import './SavedMovies.css'
import { useEffect, useState } from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ savedMovies, onButtonClick }) {

    return <main className="saved-movies">
        <SearchForm />
        <MoviesCardList
            buttonClassName='movies-card__like_remove'
            movies={savedMovies}
            onButtonClick={onButtonClick}
        />
    </main>

}

export default SavedMovies;