import './Movies.css'
import { useState, useEffect, useRef } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from './More/More';
import Preloader from './Preloader/Preloader';
import { getResults, saveCheckbox, saveResults, saveSearchString } from '../../utils/storage';
import { moviesApi } from '../../utils/MoviesApi';

function Movies({ buttonModifier = 'movies-card__like' }) {

    const [moviesToShow, setMoviesToShow] = useState(0);
    const [movies, setMovies] = useState([]);
    const [isPreloader, setPreloader] = useState(false);
    const [moviesMessage, setMoviesMessage] = useState('');

    const moviesRef = useRef();

    useEffect(() => {
        setMovies(getResults());
    }, []);

    useEffect(() => {
        function getInitialNumber() {
            if (window.innerWidth >= 1280) return 12;
            if (window.innerWidth >= 768) return 8;
            return 5;
        }
        if (movies.length === 0) return;
        setMoviesToShow(Math.min(getInitialNumber(), movies.length));
    }, [movies]);

    async function doSearch(searchText, isShortMeter) {
        //    console.log(searchText, isShortMeter);
        if (!searchText) return;
        saveSearchString(searchText);
        saveCheckbox(isShortMeter);
        setMoviesMessage('');
        setPreloader(true);
        try {
            const results = await moviesApi.search(searchText);
            const filteredMovies = results.filter(movie =>
                ((isShortMeter && movie.duration < 41) || !isShortMeter)
                && movie.nameRU.toLowerCase().includes(searchText.toLowerCase()));
            setMovies(filteredMovies);
            saveResults(filteredMovies);
            if (filteredMovies.length === 0) setMoviesMessage('Ничего не найдено');
        } catch (error) {
            setMoviesMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        }
        setPreloader(false);
    }

    const getMoviesToAdd = (columnsString) => {
        if (!columnsString) return;
        const columnsCount = columnsString.split(' ').length;
        return Math.max(columnsCount, 2);
    }

    function handleMore() {
        if (moviesToShow === movies.length) return;
        const moviesToAdd = getMoviesToAdd(getComputedStyle(moviesRef.current).getPropertyValue("grid-template-columns"));
        setMoviesToShow(Math.min(moviesToShow + moviesToAdd, movies.length));
    }

    return (<main className="movies">
        <SearchForm onSubmit={doSearch} />
        {isPreloader
            ? <Preloader />
            : moviesMessage
                ? <span className="movies__message">{moviesMessage}</span>
                : <>
                    <MoviesCardList
                        ref={moviesRef}
                        movies={movies}
                        buttonClassName={buttonModifier}
                        moviesToShow={moviesToShow}
                    />
                    <More isVisible={movies.length > 0 && moviesToShow < movies.length} onClick={handleMore} />
                </>
        }
    </main >);

}

export default Movies;