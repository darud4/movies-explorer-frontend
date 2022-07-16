import './MoviesCard.css';

function MoviesCard({
    buttonClassName,
    image,
    name = '',
    duration = '',
    link,
    onButtonClick
}) {

    const newDuration = `${Math.floor(duration / 60) + 'ч '}${Math.floor(duration % 60) + 'м'}`;

    return (<li className="movies-card">
        <a target="_blank" href={link} className="movies-card__img-link" rel="noreferrer">
            <img className="movies-card__image" alt={name} src={image} />
        </a>
        <span className="movies-card__name">{name}</span>
        <button className={buttonClassName} type="button" onClick={onButtonClick}></button>
        <p className="movies-card__duration">{newDuration}</p>
    </li>);
}

export default MoviesCard;