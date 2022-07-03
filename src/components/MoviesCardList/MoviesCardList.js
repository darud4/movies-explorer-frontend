import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const defaultCards = [{ name: 'Когда я думаю о Германии ночью' }, { name: 'Дженис: Маленькая девочка грустит' }, { name: '33 слова о дизайне' }, { name: 'Дженис: Маленькая девочка грустит' }, { name: 'Дженис: Маленькая девочка грустит' }, { name: 'Баския: Взрыв реальности' }, { name: 'В погоне за Бенкси' }, { name: 'Киноальманах «100 лет дизайна»' },];

function MoviesCardList({ movies = defaultCards }) {
    return <section className="movies-card-list">
        {movies.length === 0 ? <span movies-card-list__title>Фильмов не найдено</span>
            : movies.map(({ image, name, duration }, i) => <MoviesCard key={i} image={image} name={name} duration={duration} />)
        }
    </section>
}

export default MoviesCardList;