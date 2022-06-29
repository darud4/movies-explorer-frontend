import './Login.css';
import Logo from '../Logo/Logo';
import '../Title/Title.css';

function Login() {
    return <form className="login" name="login">
        <Logo />
        <h1 className="title">Добро пожаловать!</h1>
        <label className='login__label'>Имя<input name="name" className='login__input' /></label>
        <label className='login__input'>E-mail<input name="email" className='login__input' /></label>
        <label className='login__input'>Пароль<input name="password" className='login__input' /></label>
        <button className="login__button">Зарегистрироваться</button>
        <span className="login__text">Уже зарегистрированы?<a href="/signin" className="login__link">Войти</a></span>
    </form>
}

export default Login;