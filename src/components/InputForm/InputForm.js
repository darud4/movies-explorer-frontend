import './InputForm.css';
import '../Title/Title.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import Input from './Input/Input';
import Button from './Button/Button';
import useFormWithValidation from '../../hooks/useFormWithValidation/useFormWithValidation';
import { decodeError } from '../../utils/errorHandler';

function InputForm({ inputs, onSubmit, title, formName, buttonName, bottomText, bottomLink, linkTarget }) {

    const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();
    const [errorText, setErrorText] = useState('');
    const [isDisabled, setDisabled] = useState(false);
    useEffect(() => resetForm(), [resetForm]);

    async function handleSubmit(evt) {
        evt.preventDefault();
        setDisabled(true);
        setErrorText('');
        try {
            const result = onSubmit && await onSubmit(values);
            if (!result || !result.ok) throw new Error(decodeError(result.error));
        } catch (error) {
            console.log(error);
            setErrorText(error.message || 'Неизвестная ошибка');
        }
        setDisabled(false);
    }

    return (<form noValidate className="input-form" name={formName} onSubmit={handleSubmit}>
        <Logo />
        <h1 className="title">{title}</h1>
        <fieldset className="input-form__inputs">
            {inputs.map(({ caption, name, type = 'text', id, validate, validationMessage }) =>
                <Input
                    key={id}
                    type={type}
                    label={caption}
                    name={name}
                    onChange={handleChange}
                    value={values[name]}
                    error={errors[name]}
                    validate={validate}
                    validationMessage={validationMessage}
                    isDisabled={isDisabled}
                />)}
            <span className="input-form__error">{errorText}</span>
        </fieldset>
        <fieldset className="input-form__buttons">
            <Button caption={buttonName} isValid={isValid && !isDisabled} />
            <span className="input-form__text">{bottomText}<Link to={linkTarget} className="input-form__link">{bottomLink}</Link></span>
        </fieldset>
    </form>);
}

export default InputForm;