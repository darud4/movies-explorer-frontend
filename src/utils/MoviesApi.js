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

}

export const moviesApi = new MoviesApi(moviesUrl);