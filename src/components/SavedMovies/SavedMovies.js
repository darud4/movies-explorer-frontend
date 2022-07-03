import './SavedMovies.css'
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
    return <section className="saved-movies"><SearchForm /><MoviesCardList movies={[]} /></section>

}

export default SavedMovies;