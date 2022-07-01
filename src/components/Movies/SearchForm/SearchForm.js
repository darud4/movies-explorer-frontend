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
        <fieldset className="search-form__container">
            <input type="text" className="search-form__input" />
            <button className="search-form__submit">Найти</button>
        </fieldset>
        <FilterCheckbox checked={isChecked} caption="Короткометражки" onChange={handleChange} />
    </form>
}

export default SearchForm;