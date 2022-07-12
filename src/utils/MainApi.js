import { CONFIG } from '../config';
import Api from './Api';

const { baseUrl } = CONFIG;

class MainApi extends Api {
    constructor(baseUrl) {
        super({
            baseUrl, headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    setToken(token) {
        this._headers.authorization = `Bearer ${token}`;
    }

    getSavedMovies() {
        const url = `${this._baseUrl}/movies`;
        const params = {
            headers: { authorization: this._headers.authorization }
        };
        return this._makeRequest(url, params);
    }

    getUserInfo() {
        const url = `${this._baseUrl}/users/me`;
        const params = {
            headers: { authorization: this._headers.authorization }
        };
        return this._makeRequest(url, params);
    }

    setUserInfo({ name, email }) {
        const url = `${this._baseUrl}/users/me`;
        const params = {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ name, email })
        };
        return this._makeRequest(url, params);
    }

    addMovieToSaved(movieData) {
        const url = `${this._baseUrl}/movies`;
        const params = {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(movieData)
        };
        return this._makeRequest(url, params);
    }

    removeMovieFromSaved(cardId) {
        const url = `${this._baseUrl}/cards/${cardId}/likes`;
        const params = {
            method: 'DELETE',
            headers: this._headers,
        };
        return this._makeRequest(url, params);
    }
}

export const mainApi = new MainApi(baseUrl);