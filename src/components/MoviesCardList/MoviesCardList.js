import './MoviesCardList.css';
import { useEffect, useRef, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from './More/More';

function MoviesCardList({ movies, buttonClassName, onButtonClick }) {

    const [moviesToShow, setMoviesToShow] = useState(0);

    const ref = useRef();

    useEffect(() => {
        function getInitialNumber() {
            if (window.innerWidth >= 1280) return 12;
            if (window.innerWidth >= 768) return 8;
            return 5;
        }
        if (movies.length === 0) return;
        setMoviesToShow(Math.min(getInitialNumber(), movies.length));
    }, [movies]);

    const getMoviesToAdd = (columnsString) => {
        if (!columnsString) return;
        const columnsCount = columnsString.split(' ').length;
        return Math.max(columnsCount, 2);
    }

    function handleMore() {
        if (moviesToShow === movies.length) return;
        const moviesToAdd = getMoviesToAdd(getComputedStyle(ref.current).getPropertyValue("grid-template-columns"));
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