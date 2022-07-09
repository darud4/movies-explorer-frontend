import { useEffect } from 'react';
import InputForm from '../InputForm/InputForm';
import useFormWithValidation from '../useFormWithValidation/useFormWithValidation';

const inputs = [{ caption: "Имя", name: "name", id: 1 }, { caption: 'E-mail', name: 'email', type: 'email', id: 2 }, { caption: "Пароль", name: 'password', id: 3 }];

function Register() {

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
    />);
}

export default Register;