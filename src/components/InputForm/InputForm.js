import './InputForm.css';
import '../Title/Title.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Input from './Input/Input';
import Button from './Button/Button';

function InputForm({ inputs, values = {}, errors = {}, isValid, onChange, title, formName, buttonName, bottomText, bottomLink, linkTarget }) {
    return (<form className="input-form" name={formName}>
        <Logo />
        <h1 className="title">{title}</h1>
        <fieldset className="input-form__inputs">
            {inputs.map(({ caption, name }, i) => <Input key={i} label={caption} name={name} onChange={onChange} value={values[name]} error={errors[name]} />)}
            <span className="input-form__error"></span>
        </fieldset>
        <fieldset className="input-form__buttons">
            <Button caption={buttonName} isValid={isValid} />
            <span className="input-form__text">{bottomText}<Link to={linkTarget} className="input-form__link">{bottomLink}</Link></span>
        </fieldset>
    </form>);
}

export default InputForm;