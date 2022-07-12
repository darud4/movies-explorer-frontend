import './MoviesCardList.css';
import { useEffect, useRef, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../Movies/More/More';


function MoviesCardList({ savedMovies = [], movies = [], buttonClassName, onButtonClick }) {

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

    function handleButtonClick(i) {
        //        console.log(movies[i]);
        onButtonClick(movies[i]);
    }

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



    return (
        <>
            <ul className="movies-card-list" ref={ref}>
                {movies.map(({ image, nameRU: name, duration, trailerLink, id }, i) =>
                (i < moviesToShow && <MoviesCard
                    key={id}
                    image={image.url}
                    name={name}
                    duration={duration}
                    buttonClassName={savedMovies.find(({ movieId }) => movieId === id) ? `${buttonClassName} ${buttonClassName}_active` : `${buttonClassName}`}
                    link={trailerLink}
                    onButtonClick={() => handleButtonClick(i)}
                />))
                }
            </ul><More isVisible={movies.length > 0 && moviesToShow < movies.length} onClick={handleMore} />
        </>);
};

export default MoviesCardList;