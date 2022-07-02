import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation({isLogged}) {

    const body = !isLogged ? <nav className="navigation">        <Link className='navigation__link' to="/signup">Регистрация</Link>        <Link className='navigation__link navigation__link_green' to="/signin">Войти</Link>    </nav> :
        <nav className="navigation navigation_logged">            <Link className='navigation__link' to="/movies">Фильмы</Link>            <Link className='navigation__link' to="/saved-movies">Сохраненные фильмы</Link>            <Link className='navigation__link navigation__link_profile' to="/profile">Аккаунт</Link>        </nav>;

    return body;
}

export default Navigation;