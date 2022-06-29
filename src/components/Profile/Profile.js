import './Profile.css';
import '../Title/Title.css';

function Profile() {
    return <form className="profile" name='profile'>
        <h2 className="title">Привет, Виталий!</h2>
        <fieldset className="profile__inputs">
            <label className="profile__label">Имя <input name="name" className="profile__input" value="Виталий" /> </label>
            <label className="profile__label">E-mail <input name="name" className="profile__input" value="pochta@yandex.ru" /> </label>
        </fieldset>
        <fieldset className="profile__buttons">
            <button type="button" className="profile__button">Редактировать</button>
            <button type="button" className="profile__button profile__button_attention">Выйти из аккаунта</button>
        </fieldset>
    </form>
}

export default Profile;