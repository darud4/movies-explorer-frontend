export function saveCheckbox(isChecked) {
    localStorage.setItem('checkbox', isChecked);
};

export function getCheckbox() {
    return localStorage.getItem('checkbox') === 'true';
};

export function saveResults(movies) {
    localStorage.setItem('searchResults', JSON.stringify(movies));
};

export function getResults() {
    return JSON.parse(localStorage.getItem('searchResults') || []);
};

export function saveSearchString(searchString) {
    localStorage.setItem('searchString', searchString);
};

export function getSearchString() {
    return localStorage.getItem('searchString');
};
