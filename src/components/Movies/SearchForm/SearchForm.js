import { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm() {
    const [isChecked, setChecked] = useState(false);

    function handleChange({ target: { checked: newState } }) {
        console.log(newState);
        setChecked(newState);
    }

    return <form className="search-form">
        <div className="search-form__outer-wrapper">
            <fieldset className="search-form__container">
                <input type="text" className="search-form__input" placeholder="Фильм" />
                <button className="search-form__submit">Найти</button>
            </fieldset>
            <FilterCheckbox checked={isChecked} caption="Короткометражки" onChange={handleChange} />
        </div>
    </form>
}

export default SearchForm;