import './Login.css';
import Logo from '../Logo/Logo';
import '../Title/Title.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Login() {
    return <form className="login" name="login">
        <Logo />
        <h1 className="title">Рады видеть!</h1>
        <fieldset className="login__inputs">
            <Input label="E-mail" />
            <Input label="Пароль" />
        </fieldset>
        <fieldset className="login__buttons">
            <Button caption="Войти" />
            <span className="login__text">Ещё не зарегистрированы?<Link to="/signup" className="login__link">Регистрация</Link></span>
        </fieldset>
    </form>
}

export default Login;