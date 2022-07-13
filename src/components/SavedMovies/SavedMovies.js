import './SavedMovies.css'
import Filter from '../Filter/Filter';

function SavedMovies({ onButtonClick, savedMovies }) {

    return <main className="saved-movies">
        <Filter
            buttonClassName='movies-card__like movies-card__like_remove'
            onButtonClick={onButtonClick}
            movies={savedMovies}
            showListOnMount={true}
        />
    </main>
}

export default SavedMovies;