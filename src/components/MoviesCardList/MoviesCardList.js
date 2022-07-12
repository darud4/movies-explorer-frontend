import './MoviesCardList.css';
import { forwardRef } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';


const MoviesCardList = forwardRef(({ savedMovies, moviesToShow, movies = [], buttonClassName, onButtonClick }, ref) => {

    function handleButtonClick(i) {
        console.log(movies[i]);
        onButtonClick(movies[i]);

    }

//    console.log(savedMovies);

    return (<ul className="movies-card-list" ref={ref}>
        {movies.map(({ image, nameRU: name, duration, trailerLink, id }, i) =>
        (i < moviesToShow && <MoviesCard
            key={id}
            image={image.url}
            name={name}
            duration={duration}
            buttonClassName={savedMovies[id] ? `${buttonClassName}_active` : ''}
            link={trailerLink}
            onButtonClick={() => handleButtonClick(i)}
        />))
        }
    </ul>);
});

export default MoviesCardList;