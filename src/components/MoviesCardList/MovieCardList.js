import './MovieCardList.css';
import MovieCard from '../MoviesCard/MovieCard';

const defaultCards = [{ name: 'Когда я думаю о Германии ночью' }, { name: 'Дженис: Маленькая девочка грустит' }, { name: '33 слова о дизайне' }, { name: 'Дженис: Маленькая девочка грустит' }, { name: 'Дженис: Маленькая девочка грустит' }, { name: 'Баския: Взрыв реальности' }, { name: 'В погоне за Бенкси' }, { name: 'Киноальманах «100 лет дизайна»' },];

function MovieCardList({ cards = defaultCards }) {
    return <section className="movie-card-list">
        {cards.map(({ image, name, duration }) => <MovieCard image={image} name={name} duration={duration} />)}
    </section>
}

export default MovieCardList;