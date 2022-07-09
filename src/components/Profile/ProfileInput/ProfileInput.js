import './ProfileInput.css';
import { useState } from 'react';

function ProfileInput({ caption, name, placeholder, value, onChange }) {

    const [isActive, setActive] = useState(false);

    const handleFocus = () => setActive(true);
    const handleBlur = () => setActive(false);

    return (<label className={`profile-input__label ${isActive ? 'profile-input__label_active' : ''}`}>
        {caption}
        <input onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            name={name}
            className="profile-input__input"
            value={value}
            onChange={({ target }) => onChange(target.value)} />
    </label>);

}

export default ProfileInput;