import './InputForm.css';
import Logo from '../Logo/Logo';
import '../Title/Title.css';
import Input from './Input/Input';
import Button from './Button/Button';
import { Link } from 'react-router-dom';

function InputForm({ inputs, title, formName, buttonName, bottomText, bottomLink, linkTarget }) {
    return <form className="input-form" name={formName}>
        <Logo />
        <h1 className="title">{title}</h1>
        <fieldset className="input-form__inputs">
            {inputs.map(({ caption, name }, i) => <Input key={i} label={caption} name={name} />)}
            <span className="input-form__error">Что-то пошло не так...</span>
        </fieldset>
        <fieldset className="input-form__buttons">
            <Button caption={buttonName} />
            <span className="input-form__text">{bottomText}<Link to={linkTarget} className="input-form__link">{bottomLink}</Link></span>
        </fieldset>
    </form>
}

export default InputForm;