import { useEffect } from 'react';
import InputForm from '../InputForm/InputForm';
import useFormWithValidation from '../useFormWithValidation/useFormWithValidation';
import React from 'react';

const inputs = [{ caption: 'E-mail', name: 'email' }, { caption: "Пароль", name: 'password' }];

function Login() {

    const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

    useEffect(() => resetForm(), []);

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
    />);
}

export default Login;