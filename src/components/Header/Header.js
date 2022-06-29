import './Header.css';
import Logo from '../Logo/Logo';

function Header() {
    return <header className='header'>
        <Logo />
        <nav className='header__nav'>
            <a className='header__action' href="/signup">Регистрация</a>
            <a className='header__action header__action_green' href="/signin">Войти</a>
        </nav>
    </header>
}

export default Header;