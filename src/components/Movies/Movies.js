import './Movies.css'
import { useState, useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import { getResults } from '../../utils/storage';
import { ERRORS } from '../../utils/errorTexts';

function Movies({ savedMovies, buttonModifier = 'movies-card__like', onSearch, onButtonClick }) {

    const [movies, setMovies] = useState([]);
    const [isPreloader, setPreloader] = useState(false);
    const [moviesMessage, setMoviesMessage] = useState('');

    useEffect(() => {
        setMovies(getResults());
    }, []);


    async function handleSubmit(searchText, isShortMeter) {
        setPreloader(true);
        try {
            const filteredMovies = await onSearch(searchText, isShortMeter);
            setMoviesMessage(filteredMovies.message)
            setMovies(filteredMovies.data);
        } catch (error) {
            setMoviesMessage(ERRORS.MOVIES_API_GENERAL_ERROR);
        }
        setPreloader(false);
    }

    return (<main className="movies">
        <SearchForm onSubmit={handleSubmit} />
        {isPreloader
            ? <Preloader />
            : moviesMessage
                ? <span className="movies__message">{moviesMessage}</span>
                : <MoviesCardList
                    savedMovies={savedMovies}
                    movies={movies}
                    buttonClassName={buttonModifier}
                    onButtonClick={onButtonClick}
                />
        }
    </main >);

}

export default Movies;