export function isEmail(string) {
    return string && /[^@\s]+@[^@\s]+\.[^@\s]+/.test(string);
}

export function isName(string) {
    return string && (/^[a-zа-я\s-]+$/i).test(string);
}