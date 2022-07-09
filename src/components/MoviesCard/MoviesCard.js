import './MoviesCard.css';
import picExample from '../../images/stopframe.png';
//import { useState } from 'react';

function MoviesCard({
    buttonClassName,
    image = picExample,
    name = 'инадцаfsfsfsdfsfdfsfsdть друТрзей Оушна',
    duration = '1ч 42м',
}) {

    const cl = `movies-card__like ${buttonClassName}`;
    return (<li className="movies-card">
        <img className="movies-card__image" alt={name} src={image}></img>
        <span className="movies-card__name">{name}</span>
        <button className={cl} type="button"></button>
        <p className="movies-card__duration">{duration}</p>
    </li>);
}

export default MoviesCard;