import './Movies.css'
import { useState, useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from './More/More';
import Preloader from './Preloader/Preloader';

function Movies({ movies = [], buttonModifier = 'movies-card__like', onSearch, isPreloader }) {

    const [moviesToShow, setMoviesToShow] = useState(3);

    useEffect(() => {
        if (movies.length === 0) return;
        setMoviesToShow(3);
    }, [movies]);

    function handleSubmit(searchText) {
        onSearch && onSearch(searchText);
    }

    function getMoviesToAdd() {
        //        console.log(getComputedStyle(moviesRef.current).getPropertyValue('grid-template-rows'));
        return 3;
    }

    function handleMore() {
        console.log(moviesToShow, movies.length)
        if (moviesToShow === movies.length) return;
        const moviesToAdd = getMoviesToAdd();
        console.log(Math.min(moviesToShow + moviesToAdd, movies.length));
        setMoviesToShow(Math.min(moviesToShow + moviesToAdd, movies.length));
    }

    return (<main className="movies">
        <SearchForm onSubmit={handleSubmit} />
        {isPreloader ? <Preloader /> :
            <>
                <MoviesCardList
                    movies={movies}
                    buttonClassName={buttonModifier}
                    moviesToShow={moviesToShow}
                />
                <More isVisible={movies.length > 0 && moviesToShow < movies.length} onClick={handleMore} />
            </>
        }
    </main>);

}

export default Movies;