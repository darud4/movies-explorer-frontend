import './Register.css';
import Logo from '../Logo/Logo';
import '../Title/Title.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';


function Register() {
    return <form className="login" name="login">
        <Logo />
        <h1 className="title">Добро пожаловать!</h1>
        <fieldset className="login__inputs">
            <Input label="Имя" />
            <Input label="E-mail" />
            <Input label="Пароль" />
        </fieldset>
        <fieldset className="login__buttons">
            <Button caption="Зарегистрироваться" />
            <span className="login__text">Уже зарегистрированы?<Link to="/signin" className="login__link">Войти</Link></span>
        </fieldset>
    </form>
}

export default Register;