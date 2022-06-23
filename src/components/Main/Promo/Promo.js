import "./Promo.css";
import image from '../../../images/promo.svg';

function Promo() {
    return (<div className="promo">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__image" alt="Узор" src={image} />
    </div>)
}

export default Promo;