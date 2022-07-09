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
}

export const mainApi = new MainApi(baseUrl);