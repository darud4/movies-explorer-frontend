import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({ moviesToShow, movies = [], buttonClassName }) {
    //    console.log(movies);
    return (<ul className="movies-card-list">
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
}

export default MoviesCardList;