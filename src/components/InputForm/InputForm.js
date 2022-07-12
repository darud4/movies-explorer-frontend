import './InputForm.css';
import '../Title/Title.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Logo from '../Logo/Logo';
import Input from './Input/Input';
import Button from './Button/Button';
import useFormWithValidation from '../useFormWithValidation/useFormWithValidation';

function InputForm({ inputs, onSubmit, title, formName, buttonName, bottomText, bottomLink, linkTarget }) {

    const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

    useEffect(() => resetForm(), [resetForm]);

    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit && onSubmit(values);
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
                />)}
            <span className="input-form__error"></span>
        </fieldset>
        <fieldset className="input-form__buttons">
            <Button caption={buttonName} isValid={isValid} />
            <span className="input-form__text">{bottomText}<Link to={linkTarget} className="input-form__link">{bottomLink}</Link></span>
        </fieldset>
    </form>);
}

export default InputForm;