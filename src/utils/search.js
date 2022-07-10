import { moviesApi } from "./MoviesApi";
import { ERRORS } from "./errorTexts";

export async function searchMovies(searchText, isShortMeter) {
    const result = { data: [], message: '' };
    try {
        const movies = await moviesApi.search(searchText);
        const filteredMovies = movies.filter(movie =>
            ((isShortMeter && movie.duration < 41) || !isShortMeter)
            && movie.nameRU.toLowerCase().includes(searchText.toLowerCase()));
        if (filteredMovies.length === 0) result.message = 'Ничего не найдено';
        result.data = filteredMovies;
    } catch (error) {
        result.message = ERRORS.MOVIES_API_GENERAL_ERROR;
    }
    return result;
}