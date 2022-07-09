import './Profile.css';
import '../Title/Title.css';
import ProfileInput from './ProfileInput/ProfileInput';
import { useState } from 'react';

function Profile() {

    const [name, setName] = useState('Павел');
    const [email, setEmail] = useState('dr@dr.ru');

    const handleNameChange = (newVal) => setName(newVal);
    const handleEmailChange = (newVal) => setEmail(newVal);

    return (<form className="profile" name='profile'>
        <h2 className="title">Привет, {name}</h2>
        <fieldset className="profile__inputs">
            <ProfileInput caption="Имя" name='name' placeholder='Введите имя' value={name} onChange={handleNameChange} />
            <ProfileInput caption="E-mail" name='email' placeholder='Введите адрес электронной почты' value={email} onChange={handleEmailChange} />
        </fieldset>
        <fieldset className="profile__buttons">
            <button type="button" className="profile__button">Редактировать</button>
            <button type="button" className="profile__button profile__button_attention">Выйти из аккаунта</button>
        </fieldset>
    </form>);
}

export default Profile;