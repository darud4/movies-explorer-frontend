import './Input.css';

function Input({ label }) {
    return <label className="input__label">{label}
        <input className="input__input" />
    </label>
}

export default Input;