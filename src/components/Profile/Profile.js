import './Profile.css';
import '../Title/Title.css';
import ProfileInput from './ProfileInput/ProfileInput';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ onLogout, onSubmit }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitDisabled, setSubmitDisabled] = useState(true);

    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        if (currentUser.name) {
            setName(currentUser.name);
            setEmail(currentUser.email);
        }
    }, [currentUser]);

    useEffect(() => {
        setSubmitDisabled(name === (currentUser.name || '') && email === (currentUser.email || ''));
    }, [name, email, currentUser.name, currentUser.email]);

    const handleNameChange = (newVal) => setName(newVal);
    const handleEmailChange = (newVal) => setEmail(newVal);

    function handleSubmit(evt) {
        onSubmit && onSubmit({ name, email });
    }

    return (<form className="profile" name='profile'>
        <h2 className="title">Привет, {name}</h2>
        <fieldset className="profile__inputs">
            <ProfileInput caption="Имя" name='name' placeholder='Введите имя' value={name} onChange={handleNameChange} />
            <ProfileInput caption="E-mail" name='email' placeholder='Введите адрес электронной почты' value={email} onChange={handleEmailChange} />
        </fieldset>
        <fieldset className="profile__buttons">
            <button
                type="button"
                className={`profile__button ${isSubmitDisabled ? 'profile__button_disabled' : ''}`}
                disabled={isSubmitDisabled}
                onClick={handleSubmit}>
                Редактировать
            </button>
            <button
                type="button"
                className="profile__button profile__button_attention"
                onClick={onLogout}>
                Выйти из аккаунта
            </button>
        </fieldset>
    </form>);
}

export default Profile;