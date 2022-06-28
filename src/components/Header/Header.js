import './Header.css';
import logo from "../../images/logo.png";

function Header() {
    return <header className='header'>
        <img alt="Логотип" src={logo} />
        <nav className='header__nav'>
            <a className='header__action' href="/signup">Регистрация</a>
            <a className='header__action header__action_green' href="/signin">Войти</a>
        </nav>
    </header>
}

export default Header;