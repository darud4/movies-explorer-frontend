import { useEffect } from 'react';
import InputForm from '../InputForm/InputForm';
import useFormWithValidation from '../useFormWithValidation/useFormWithValidation';
import { isEmail } from '../../utils/validate';

const inputs = [
    { caption: 'E-mail', name: 'email', id: 1, validate: isEmail, validationMessage: 'Пожалуйста, введите правильный e-mail' },
    { caption: "Пароль", name: 'password', type: 'password', id: 2 }
];

function Login({ onSubmit }) {

    const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

    useEffect(() => resetForm(), [resetForm]);

    return (<InputForm
        inputs={inputs}
        title="Рады видеть!"
        formName='login'
        buttonName="Войти"
        bottomText="Ещё не зарегистрированы?"
        bottomLink="Регистрация"
        linkTarget="/signup"
        values={values}
        errors={errors}
        isValid={isValid}
        onChange={handleChange}
        onSubmit={onSubmit}
    />);
}

export default Login;