import './Input.css';

function Input({ label,
    name,
    error,
    onChange,
    value = '',
    type = 'text',
    validate,
    validationMessage = 'Ошибка валидации поля',
    isDisabled = false
}) {

    function handleChange(evt) {
        if (validate && evt.target.value && !validate(evt.target.value))
            evt.target.setCustomValidity(validationMessage);
        else
            evt.target.setCustomValidity('');
        onChange(evt);
    }

    return <label className="input__label">{label}
        <input className="input__input" name={name} required value={value} onChange={handleChange} type={type} disabled={isDisabled} />
        <span className={`input__error-span error-${name}`}>{error}</span>
    </label>
}

export default Input;