import './Input.css';

function Input({ label, name }) {
    return <label className="input__label">{label}
        <input className="input__input" name={name} required />
    </label>
}

export default Input;