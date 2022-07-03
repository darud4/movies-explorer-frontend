import './Navigation.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import NavTab from './NavTab/NavTab';

function Navigation({ isLogged }) {

    const [isNavTabOpened, setNavTab] = useState(false);

    function toggleNavTab() {
        setNavTab(!isNavTabOpened);
    }

    const body = !isLogged
        ? <nav className="navigation">
            <Link className='navigation__link' to="/signup">Регистрация</Link>
            <Link className='navigation__link navigation__link_green' to="/signin">Войти</Link>
        </nav>
        :
        <>
            <nav className="navigation navigation_logged">
                <Link className='navigation__link navigation__link_logged' to="/movies">Фильмы</Link>
                <Link className='navigation__link navigation__link_logged' to="/saved-movies">Сохраненные фильмы</Link>
                <Link className='navigation__link navigation__link_logged navigation__link_profile' to="/profile">Аккаунт</Link>
                <button className="navigation__menu" onClick={toggleNavTab} type="button"></button>
            </nav>
            <NavTab isOpen={isNavTabOpened} onClose={toggleNavTab} />
        </>;

    return body;
}

export default Navigation;