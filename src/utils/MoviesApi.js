import { CONFIG } from '../config';
import Api from './Api';

const { moviesUrl } = CONFIG;

class MoviesApi extends Api {
    constructor(baseUrl) {
        super({
            baseUrl, headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    search() {
        return this._makeRequest(this._baseUrl, {})
    }

}

export const moviesApi = new MoviesApi(moviesUrl);