import './SavedMovies.css'
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import image1 from '../../images/stopframe.png';
import image2 from '../../images/stopframe1.png';

const defaultCards = [{ name: 'Когда я думаю о Германии ночью', image: image1 }, { name: 'Дженис: Маленькая девочка грустит', image: image2 },];

function SavedMovies() {
    return <main className="saved-movies">
        <SearchForm />
        <MoviesCardList
            buttonClassName='movies-card__like_remove'
            movies={defaultCards}
        />
    </main>

}

export default SavedMovies;