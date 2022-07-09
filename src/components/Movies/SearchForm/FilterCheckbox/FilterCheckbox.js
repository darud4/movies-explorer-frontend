import './FilterCheckbox.css'

function FilterCheckbox({ checked = false, onChange, caption }) {
    return (<label className="filter-checkbox__label">
        <span className={`filter-checkbox__span`}>
            <span className={`filter-checkbox__circle ${checked ? 'filter-checkbox__circle_checked' : ''}`}>
            </span>
        </span>
        <input type="checkbox" checked={checked} onChange={onChange} className="filter-checkbox__checkbox" />{caption}
    </label >)
}

export default FilterCheckbox;