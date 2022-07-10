import './MoviesCardList.css';
import { forwardRef } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';


const MoviesCardList = forwardRef(({ moviesToShow, movies = [], buttonClassName }, ref) => {
    return (<ul className="movies-card-list" ref={ref}>
        {movies.map(({ image, nameRU: name, duration, trailerLink }, i) =>
        (i < moviesToShow && <MoviesCard
            key={i}
            image={image.url}
            name={name}
            duration={duration}
            buttonClassName={buttonClassName}
            link={trailerLink}
        />))
        }
    </ul>);
});

export default MoviesCardList;