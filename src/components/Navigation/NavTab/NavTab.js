import './NavTab.css';

function NavTab({ isOpen = false, onClose }) {

    return (isOpen &&
        <div className="navtab">
            <ul className="navtab__container">
                <li className="navtab__item">Главная</li>
                <li className="navtab__item">Фильмы</li>
                <li className="navtab__item">Сохранённые фильмы</li>
                <li className="navtab__item navtab__item_profile">Аккаунт</li>
                <button className="navtab__close" onClick={onClose}></button>
            </ul>
        </div>)
}

export default NavTab;