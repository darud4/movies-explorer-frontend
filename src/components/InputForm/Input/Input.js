import './Input.css';
import { useState } from 'react';

function Input({ label, name, error, onChange, value = '', type = 'text', validate, validationMessage = 'Ошибка валидации поля' }) {

    const [errorText, setErrorText] = useState('');

    function handleChange(evt) {
        onChange(evt);
        if (validate && !validate(evt.target.value))
            setErrorText(validationMessage);
        else setErrorText('');
    }

    return <label className="input__label">{label}
        <input className="input__input" name={name} required value={value} onChange={handleChange} type={type} />
        <span className={`input__error-span error-${name}`}>{error || errorText}</span>
    </label>
}

export default Input;