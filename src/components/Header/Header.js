import './Header.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Header({ isLoggedIn }) {
    return <header className='header'>
        <Logo />
        <nav className='header__nav'>
            <Link className='header__action' to="/signup">Регистрация</Link>
            <Link className='header__action header__action_green' to="/signin">Войти</Link>
        </nav>
    </header>
}

export default Header;