import { useState, useRef } from 'react';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm({ onSubmit, isChecked, setChecked, searchString, onSearchChange }) {
    const [isFocused, setFocused] = useState(false);
    const [error, setError] = useState('');

    const inputRef = useRef();

    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!evt.target.checkValidity()) { setError('Нужно ввести ключевое слово'); return; }
        setError('');
        onSubmit && onSubmit(inputRef.current.value, isChecked);
    }

    function handleInput({ target: { value } }) {
        setError('');
        onSearchChange(value);
    }

    return <form className="search-form" noValidate onSubmit={handleSubmit}>
        <div className="search-form__container">
            <label className={`search-form__search-string ${isFocused ? 'search-form__search-string_active' : ''}`}>
                <input type="text" ref={inputRef} onFocus={handleFocus} onBlur={handleBlur} value={searchString || ''} onChange={handleInput} className="search-form__input" placeholder="Фильм" required />
                <button className="search-form__submit">Найти</button>
            </label>
            <span className="search-form__error">{error}</span>
            <FilterCheckbox checked={isChecked} caption="Короткометражки" onChange={setChecked} />
        </div>
    </form>
}

export default SearchForm;