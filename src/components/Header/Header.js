import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header({ isLogged = true }) {
    return <header className={`header ${isLogged ? 'header_logged' : ''}`}>
        <Logo />
        <Navigation isLogged={isLogged} />
    </header>
}

export default Header;