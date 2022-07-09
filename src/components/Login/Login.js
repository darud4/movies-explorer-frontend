import InputForm from '../InputForm/InputForm';

const inputs = [{ caption: 'E-mail', name: 'email' }, { caption: "Пароль", name: 'password' }];

function Login() {
    return (<InputForm
        inputs={inputs}
        title="Рады видеть!"
        formName='login'
        buttonName="Войти"
        bottomText="Ещё не зарегистрированы?"
        bottomLink="Регистрация"
        linkTarget="/signup" />);
}

export default Login;