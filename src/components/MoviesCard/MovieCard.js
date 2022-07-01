import './MovieCard.css';
import picExample from '../../images/stopframe.png';
import { useState } from 'react';

function MovieCard({ image = picExample, name = 'инадцаfsfsfsdfsfdfsfsdть друТрзей Оушна', duration = '1ч 42м' }) {

    const [isLiked, setLike] = useState(false);

    function handleLikeClick() {
        setLike(!isLiked);
    }

    return <div className="movie-card">
        <img className="movie-card__image" alt={name} src={image}></img>
        <span className="movie-card__name">{name}</span>
        <div className={`movie-card__like ${isLiked ? 'movie-card__like_active' : ''}`} onClick={handleLikeClick}></div>
        <p className="movie-card__duration">{duration}</p>
    </div>
}

export default MovieCard;