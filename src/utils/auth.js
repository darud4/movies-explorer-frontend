import { CONFIG } from '../config';

const { baseUrl } = CONFIG;

function makeRequest(url, props) {
    return fetch(url, props)
        .then(response => response.ok ? response.json() : Promise.reject({ errorCode: response.status, errorText: response.statusText }));
}

export function checkToken(token) {
    const url = baseUrl + '/users/me';
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };
    const props = {
        headers: headers,

    };
    return makeRequest(url, props);
}

export function doLogin(email, password) {
    const url = baseUrl + '/signin';
    const headers = {
        "Content-Type": "application/json"
    };
    const props = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ email, password })
    };
    return makeRequest(url, props);
}

export function doSignup({ email, password, name }) {
    const url = baseUrl + '/signup';
    const headers = {
        "Content-Type": "application/json"
    };
    const props = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ email, password, name })
    };
    return makeRequest(url, props);

}