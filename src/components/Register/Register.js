import { useEffect } from 'react';
import InputForm from '../InputForm/InputForm';
import useFormWithValidation from '../useFormWithValidation/useFormWithValidation';
import { isName, isEmail } from '../../utils/validate';

const inputs = [
    { caption: "Имя", name: "name", id: 1, validate: isName, validationMessage: 'Пожалуйста, используйте только буквы, пробел и дефис' },
    { caption: 'E-mail', name: 'email', id: 2, validate: isEmail, validationMessage: 'Пожалуйста, введите правильный e-mail' },
    { caption: "Пароль", name: 'password', id: 3, type: 'password' }
];

function Register({ onSubmit }) {

    const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

    useEffect(() => resetForm(), []);

    return (<InputForm
        inputs={inputs}
        title="Добро пожаловать!"
        formName='register'
        buttonName="Зарегистрироваться"
        bottomText="Уже зарегистрированы?"
        bottomLink="Войти"
        linkTarget="/signin"
        values={values}
        errors={errors}
        isValid={isValid}
        onChange={handleChange}
        onSubmit={onSubmit}
    />);
}

export default Register;