import { useState, useEffect } from 'react';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from './SearchForm/SearchForm';
import Preloader from '../MoviesCardList/Preloader/Preloader';
import { ERRORS } from '../../utils/errorTexts';

function Filter({ movies, buttonClassName, onButtonClick, showListOnMount = false }) {

    const [filteredMovies, setFilteredMovies] = useState([]);
    const [moviesMessage, setMoviesMessage] = useState('');
    const [isPreloader, setPreloader] = useState(false);

    useEffect(() => {
        if (showListOnMount && movies.length) {
            setFilteredMovies(movies);
        }
    }, [showListOnMount, movies]);

    async function handleSearch(searchText, isShortMeter) {
        setPreloader(true);
        try {
            console.log(movies);
            const filtered = movies.filter(movie =>
                ((isShortMeter && movie.duration < 41) || !isShortMeter)
                && movie.nameRU.toLowerCase().includes(searchText.toLowerCase()));
            if (!filtered.length) throw new Error(ERRORS.SEARCH__NO_RESULTS);
            setFilteredMovies(filtered);
            setMoviesMessage('');
            //            setMovies(filteredMovies.data);
        } catch (error) {
            setMoviesMessage(error.message || ERRORS.MOVIES_API__GENERAL_ERROR);
            setFilteredMovies([]);
            console.log(error);
        }
        setPreloader(false);
    }

    return (<>
        <SearchForm onSubmit={handleSearch} />
        {isPreloader
            ? <Preloader />
            : moviesMessage
                ? <span className="movies__message">{moviesMessage}</span>
                : <MoviesCardList
                    buttonClassName={buttonClassName}
                    onButtonClick={onButtonClick}
                    movies={filteredMovies}
                />
        }
    </>);
}

export default Filter;