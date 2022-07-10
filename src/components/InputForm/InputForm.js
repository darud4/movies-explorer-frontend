import './InputForm.css';
import '../Title/Title.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Input from './Input/Input';
import Button from './Button/Button';

function InputForm({ inputs, values = {}, errors = {}, isValid, onChange, onSubmit, title, formName, buttonName, bottomText, bottomLink, linkTarget }) {

    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit && onSubmit(values);
    }

    return (<form noValidate className="input-form" name={formName} onSubmit={handleSubmit}>
        <Logo />
        <h1 className="title">{title}</h1>
        <fieldset className="input-form__inputs">
            {inputs.map(({ caption, name, type = 'text', id, pattern = '' }) =>
                <Input
                    key={id}
                    type={type}
                    label={caption}
                    name={name}
                    onChange={onChange}
                    value={values[name]}
                    error={errors[name]}
                    pattern={pattern}
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