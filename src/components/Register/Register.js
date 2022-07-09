import { useEffect } from 'react';
import InputForm from '../InputForm/InputForm';
import useFormWithValidation from '../useFormWithValidation/useFormWithValidation';


const inputs = [{ caption: "Имя", name: "name" }, { caption: 'E-mail', name: 'email', type: 'email' }, { caption: "Пароль", name: 'password' }];

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