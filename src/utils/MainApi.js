import { CONFIG } from '../config';

const { baseUrl } = CONFIG;

class MainApi {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    setToken(token) {
        this._headers.authorization = `Bearer ${token}`;
    }

    _makeRequest(url, params) {
        return fetch(url, params)
            .then(response => response.ok ? response.json() : Promise.reject({ errorCode: response.status, errorText: response.statusText }));
    }

}

export const mainApi = new MainApi({
    baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
}
);