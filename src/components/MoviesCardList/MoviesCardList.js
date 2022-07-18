import './MoviesCardList.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from './More/More';

function MoviesCardList({ movies, buttonClassName, onButtonClick, noMore = false }) {

    const [moviesToShow, setMoviesToShow] = useState(0);
    const ref = useRef();

    const getNumberOfColumns = useCallback(() => {
        const columnsString = getComputedStyle(ref.current).getPropertyValue("grid-template-columns");
        if (!columnsString) return;
        return columnsString.split(' ').length;
    }, []);

    useEffect(() => {
        function getInitialNumber() {
            const columnsCount = getNumberOfColumns();
            return columnsCount > 1 ? columnsCount * 4 : 5;
        }
        if (movies.length === 0) return;
        if (noMore) setMoviesToShow(movies.length);
        else setMoviesToShow(Math.min(getInitialNumber(), movies.length));
    }, [movies, noMore, getNumberOfColumns]);

    const getMoviesToAdd = () => Math.max(getNumberOfColumns(), 2);

    function handleMore() {
        if (moviesToShow === movies.length) return;
        const moviesToAdd = getMoviesToAdd();
        setMoviesToShow(Math.min(moviesToShow + moviesToAdd, movies.length));
    }

    function getClass(id) {
        return typeof buttonClassName === 'function' ? buttonClassName(id) : buttonClassName;
    }

    return (
        <>
            <ul className="movies-card-list" ref={ref}>
                {movies.map(({ image, nameRU, duration, trailerLink, movieId, id }, i) =>
                (i < moviesToShow && <MoviesCard
                    key={id}
                    image={image}
                    name={nameRU}
                    duration={duration}
                    buttonClassName={getClass(movieId)}
                    link={trailerLink}
                    onButtonClick={() => onButtonClick(movies[i])}
                />))
                }
            </ul>
            <More isVisible={movies.length > 0 && moviesToShow < movies.length} onClick={handleMore} />
        </>);
};

export default MoviesCardList;