import { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm() {
    const [isChecked, setChecked] = useState(false);
    const [isFocused, setFocused] = useState(false);

    function handleChange({ target: { checked: newState } }) {
        setChecked(newState);
    }

    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);

    return <form className="search-form">
        <div className="search-form__container">
            <label className={`search-form__search-string ${isFocused ? 'search-form__search-string_active' : ''}`}>
                <input type="text" onFocus={handleFocus} onBlur={handleBlur} className="search-form__input" placeholder="Фильм" required/>
                <button className="search-form__submit">Найти</button>
            </label>
            <FilterCheckbox checked={isChecked} caption="Короткометражки" onChange={handleChange} />
        </div>
    </form>
}

export default SearchForm;