import { useState, useEffect } from 'react';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from './SearchForm/SearchForm';
import Preloader from '../MoviesCardList/Preloader/Preloader';
import { ERRORS } from '../../utils/errorTexts';
import { saveMessage, getMessage, getResults, getCheckbox, getSearchString, saveResults, saveCheckbox, saveSearchString } from '../../utils/storage';

function Filter({ movies, buttonClassName, onButtonClick, showListOnMount = false, useLocalStorage = false, noMore, isBusy = false }) {

    const [filteredMovies, setFilteredMovies] = useState([]);
    const [moviesMessage, setMoviesMessage] = useState('');
    const [isPreloader, setPreloader] = useState(false);

    const [isChecked, setChecked] = useState(false);
    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        if (showListOnMount && movies.length) {
            setFilteredMovies(movies);
        }
    }, [showListOnMount, movies]);

    useEffect(() => {
        if (useLocalStorage) {
            setChecked(getCheckbox());
            setSearchString(getSearchString());
            setFilteredMovies(getResults());
            setMoviesMessage(getMessage());
        }
    }, [useLocalStorage]);

    function handleCheckboxChange({ target: { checked: newState } }) {
        setChecked(newState);
        handleSearch(searchString, newState);
    }

    function handleSearchChange(newVal) {
        setSearchString(newVal);
    }

    function handleSearch(searchText, isShortMeter) {
        setPreloader(true);
        try {
            const filtered = movies.filter(movie =>
                ((isShortMeter && movie.duration < 41) || !isShortMeter)
                && movie.nameRU.toLowerCase().includes(searchText.toLowerCase()));
            if (useLocalStorage) {
                saveCheckbox(isShortMeter);
                saveSearchString(searchText);
                saveResults(filtered);
                saveMessage('');
            }
            if (!filtered.length) throw new Error(ERRORS.SEARCH__NO_RESULTS);
            setFilteredMovies(filtered);
            setMoviesMessage('');
        } catch (error) {
            setMoviesMessage(error.message || ERRORS.MOVIES_API__GENERAL_ERROR);
            setFilteredMovies([]);
            if (useLocalStorage) {
                saveMessage(error.message || ERRORS.MOVIES_API__GENERAL_ERROR);
            }
        }
        setPreloader(false);
    }

    return (
        <>
            <SearchForm
                isDisabled={isBusy || isPreloader}
                onSubmit={handleSearch}
                isChecked={isChecked}
                searchString={searchString}
                setChecked={handleCheckboxChange}
                onSearchChange={handleSearchChange}
            />
            {isPreloader || isBusy
                ? <Preloader />
                : moviesMessage
                    ? <span className="movies__message">{moviesMessage}</span>
                    : <MoviesCardList
                        buttonClassName={buttonClassName}
                        onButtonClick={onButtonClick}
                        movies={filteredMovies}
                        noMore={noMore}
                    />
            }
        </>);
}

export default Filter;