import './Header.css';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header({ theme = "" }) {

    const userInfo = useContext(CurrentUserContext);
    const isLogged = !!userInfo.name;

    return <header className={`header ${isLogged ? 'header_logged' : ''} ${theme ? `header_theme_${theme}` : ''}`}>
        <Logo />
        <Navigation isLogged={isLogged} />
    </header>
}

export default Header;