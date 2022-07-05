import './Movies.css'
import { useState } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from './More/More';
const defaultCards = [{ name: 'Когда я думаю о Германии ночью' }, { name: 'Дженис: Маленькая девочка грустит' }, { name: '33 слова о дизайне' }, { name: 'Дженис: Маленькая девочка грустит' }, { name: 'Дженис: Маленькая девочка грустит' }, { name: 'Баския: Взрыв реальности' }, { name: 'В погоне за Бенкси' }, { name: 'Киноальманах «100 лет дизайна»' },];

function Movies() {

    const [movies] = useState([...defaultCards]);

    return <section className="movies"><SearchForm /><MoviesCardList movies={movies} buttonClassName='' /><More isVisible={movies.length > 0} /></section>

}

export default Movies;