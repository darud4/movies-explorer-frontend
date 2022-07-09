import './Input.css';

function Input({ label, name, error, onChange, value }) {
    return <label className="input__label">{label}
        <input className="input__input" name={name} required value={value || ''} onChange={onChange} />
        <span className={`input__error-span error-${name}`}>{error}</span>
    </label>
}

export default Input;