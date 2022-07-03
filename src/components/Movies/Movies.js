import './Movies.css'
import { useState } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from './More/More';

function Movies() {

    const [movies] = useState([]);

    return <section className="movies"><SearchForm /><MoviesCardList movies={movies} /><More isVisible={movies.length > 0} /></section>

}

export default Movies;