import './Popup.css';

function Popup({ isOpen, titleText, popupText, submitText, onClose }) {

    function handleSubmit() {
        onClose && onClose();
    }

    return (<div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
            <h3 className="popup__title">{titleText}</h3>
            <p className="popup__text">{popupText}</p>
            <button type="button" onClick={handleSubmit} className="popup__submit">{submitText}</button>
            <button type="button" onClick={handleSubmit} className="popup__close"></button>
        </div>
    </div>)
}

export default Popup;