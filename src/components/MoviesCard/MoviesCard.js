import './MoviesCard.css';
import { CONFIG } from '../../config';

const { imgUrl } = CONFIG;

//import picExample from '../../images/stopframe.png';
//import { useState } from 'react';

function MoviesCard({
    buttonClassName,
    image,
    name = '',
    duration = '',
    link
}) {

    const newDuration = `${Math.floor(duration / 60) + 'ч '}${Math.floor(duration % 60) + 'м'}`;

    const cl = `movies-card__like ${buttonClassName}`;
    return (<li className="movies-card">
        <a target="_blank" href={link} className="movies-card__img-link" rel="noreferrer">
            <img className="movies-card__image" alt={name} src={`${imgUrl}${image}`} />
        </a>
        <span className="movies-card__name">{name}</span>
        <button className={cl} type="button"></button>
        <p className="movies-card__duration">{newDuration}</p>
    </li>);
}

export default MoviesCard;