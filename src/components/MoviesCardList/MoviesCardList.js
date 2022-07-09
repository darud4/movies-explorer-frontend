import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({ movies = [], buttonClassName }) {

    return <ul className="movies-card-list">
        {movies.length === 0 ? <li className="movies-card-list__title">Фильмов не найдено</li>
            : movies.map(({ image, name, duration }, i) =>
                <MoviesCard
                    key={i}
                    image={image}
                    name={name}
                    duration={duration}
                    buttonClassName={buttonClassName}
                />)
        }
    </ul>
}

export default MoviesCardList;