import './MoviesCardList.css';
import { forwardRef } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';


const MoviesCardList = forwardRef(({ moviesToShow, movies = [], buttonClassName, onButtonClick }, ref) => {

    function handleButtonClick(i) {
        onButtonClick(movies[i]);
    }

    return (<ul className="movies-card-list" ref={ref}>
        {movies.map(({ image, nameRU: name, duration, trailerLink, id }, i) =>
        (i < moviesToShow && <MoviesCard
            key={id}
            image={image.url}
            name={name}
            duration={duration}
            buttonClassName={buttonClassName}
            link={trailerLink}
            onButtonClick={() => handleButtonClick(i)}
        />))
        }
    </ul>);
});

export default MoviesCardList;