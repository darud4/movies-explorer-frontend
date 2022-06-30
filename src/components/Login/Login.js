import './Login.css';
import Logo from '../Logo/Logo';
import '../Title/Title.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

function Login() {
    return <form className="login" name="login">
        <Logo />
        <h1 className="title">Добро пожаловать!</h1>
        <Input label="Имя" />
        <Input label="E-mail" />
        <Input label="Пароль" />
        <Button caption="Зарегистрироваться" />
        <span className="login__text">Уже зарегистрированы?<a href="/signin" className="login__link">Войти</a></span>
    </form>
}

export default Login;