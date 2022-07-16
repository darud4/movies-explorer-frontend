import './Profile.css';
import '../Title/Title.css';
import ProfileInput from './ProfileInput/ProfileInput';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { decodeError } from '../../utils/errorHandler';

function Profile({ onLogout, onSubmit }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitDisabled, setSubmitDisabled] = useState(true);
    const [message, setMessage] = useState({ text: '', className: '' });
    const [isDisabled, setDisabled] = useState(false);

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
    const clearMessage = () => setMessage({ text: '', className: '' });

    function showMessage({ text, className }) {
        setMessage({ text, className });
        setTimeout(() => clearMessage(), 4000);
    }

    async function handleSubmit() {
        setDisabled(true);
        clearMessage();
        const result = onSubmit && await onSubmit({ name, email });
        if (result.ok) showMessage({ text: 'Данные успешно обновлены', className: 'profile__message_success' })
        else showMessage({ text: decodeError(result.error), className: 'profile__message' });
        setDisabled(false);
    }

    return (<form className="profile" name='profile'>
        <h2 className="title">Привет, {currentUser.name}</h2>
        <fieldset className="profile__inputs">
            <ProfileInput
                caption="Имя"
                name='name'
                placeholder='Введите имя'
                value={name}
                onChange={handleNameChange}
                isDisabled={isDisabled}
            />
            <ProfileInput
                caption="E-mail"
                name='email'
                placeholder='Введите адрес электронной почты'
                value={email}
                onChange={handleEmailChange}
                isDisabled={isDisabled}
            />
        </fieldset>
        <fieldset className="profile__buttons">
            <span className={message.className || ''}>{message.text || ''}</span>
            <button
                type="button"
                className={`profile__button ${isSubmitDisabled ? 'profile__button_disabled' : ''}`}
                disabled={isSubmitDisabled || isDisabled}
                onClick={handleSubmit}
            >
                Редактировать
            </button>
            <button
                type="button"
                className="profile__button profile__button_attention"
                onClick={onLogout}
                disabled={isDisabled}
            >
                Выйти из аккаунта
            </button>
        </fieldset>
    </form>);
}

export default Profile;