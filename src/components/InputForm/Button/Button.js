import './Button.css';

function Button({ caption, isValid }) {

    const cl = isValid ? '' : 'button_disabled';

    return <button className={`button ${cl}`} type="submit" disabled={!isValid}>{caption}</button>

}

export default Button;