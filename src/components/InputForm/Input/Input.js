import './Input.css';

function Input({ label, name, error, onChange, value, type = 'text', pattern }) {
    return <label className="input__label">{label}
        <input className="input__input" name={name} required value={value || ''} onChange={onChange} type={type} pattern={pattern} />
        <span className={`input__error-span error-${name}`}>{error}</span>
    </label>
}

export default Input;