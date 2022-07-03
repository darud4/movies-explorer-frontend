import './NavTab.css';
import { NavLink } from 'react-router-dom';

function NavTab({ isOpen = false, onClose }) {

    function makeLinkActive({isActive}) {
        return isActive ? 'navtab__link navtab__link_active' : 'navtab__link';
    }

    return (isOpen &&
        <div className="navtab">
            <ul className="navtab__container">
                <li className="navtab__item"><NavLink onClick={onClose} className={makeLinkActive} to="/">Главная</NavLink></li>
                <li className="navtab__item"><NavLink onClick={onClose} className={makeLinkActive} to="/movies">Фильмы</NavLink></li>
                <li className="navtab__item"><NavLink onClick={onClose} className={makeLinkActive} to="/saved-movies">Сохранённые фильмы</NavLink></li>
                <li className="navtab__item navtab__item_profile"><NavLink onClick={onClose} className={makeLinkActive} to="/profile">Аккаунт</NavLink></li>
                <button className="navtab__close" onClick={onClose}></button>
            </ul>
        </div>)
}

export default NavTab;