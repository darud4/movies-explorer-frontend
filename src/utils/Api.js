class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _makeRequest(url, params) {
        return fetch(url, params)
            .then(response => response.ok ? response.json() : Promise.reject({ errorCode: response.status, errorText: response.statusText }));
    }

}

export default Api;