import InputForm from '../InputForm/InputForm';

const inputs = [{ caption: "Имя", name: "name" }, { caption: 'E-mail', name: 'email' }, { caption: "Пароль", name: 'password' }];

function Register() {
    return (<InputForm
        inputs={inputs}
        title="Добро пожаловать!"
        formName='register'
        buttonName="Зарегистрироваться"
        bottomText="Уже зарегистрированы?"
        bottomLink="Войти"
        linkTarget="/signin" />);
}

export default Register;