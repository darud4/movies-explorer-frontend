import InputForm from '../InputForm/InputForm';
import { isEmail } from '../../utils/validate';

const inputs = [
    { caption: 'E-mail', name: 'email', id: 1, validate: isEmail, validationMessage: 'Пожалуйста, введите правильный e-mail' },
    { caption: "Пароль", name: 'password', type: 'password', id: 2 }
];

function Login({ onSubmit }) {

    return (<InputForm
        inputs={inputs}
        title="Рады видеть!"
        formName='login'
        buttonName="Войти"
        bottomText="Ещё не зарегистрированы?"
        bottomLink="Регистрация"
        linkTarget="/signup"
        onSubmit={onSubmit}
    />);
}

export default Login;