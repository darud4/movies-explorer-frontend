import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Page404 from '../Page404/Page404';
import Profile from '../Profile/Profile';
import Popup from '../Popup/Popup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { mainApi } from '../../utils/MainApi';
import { doLogin, doSignup, checkToken as validateToken } from '../../utils/auth';
import { searchMovies } from '../../utils/search';
import { saveSearchString, saveResults, saveCheckbox } from '../../utils/storage';
import { ERRORS } from '../../utils/errorTexts';
import { CONFIG } from '../../config';

const { imgUrl } = CONFIG;

function App() {

  const [isErrorPopup, setErrorPopup] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [savedMovies, setSavedMovies] = useState({});

  const navigate = useNavigate();

  useEffect(() => { }, []);

  const closeErrorPopup = () => setErrorPopup(false);

  const checkToken = useCallback(async (token) => {
    try {
      const { email, name, ...loginData } = await validateToken(token)
      if (!email) throw Error('Что-то пошло не так');
      console.log(name, email, token, loginData);
      //      setJwt(token);
      mainApi.setToken(token);
      setCurrentUser({ name, email });
      //      setLoggedIn(true);
      navigate('/movies', { replace: true });
    }
    catch (error) { console.log(error) };
  }, [navigate]);

  async function handleLogin({ email, password }) {
    try {
      const { token } = await doLogin(email, password)
      console.log(token);
      mainApi.setToken(token);
      const { name } = await mainApi.getUserInfo();
      setCurrentUser({ name, email });
      const result = await mainApi.getSavedMovies();
      console.log(result);
      const newSaved = result.reduce((obj, movie) => { obj[movie.movieId] = movie._id; return obj }, {});
      setSavedMovies(newSaved);
      localStorage.clear();
      localStorage.setItem('jwt', token);
      navigate('/movies', { replace: true });
      return { ok: true };
    }
    catch (error) {
      console.log(error);
      return { ok: false, error };
    }
  }

  async function handleRegister({ name, email, password }) {
    try {
      const { data } = await doSignup({ name, email, password });
      if (!data._id) throw Error('Ошибка при авторизации');
      handleLogin({ email, password })
      return { ok: true };
    }
    catch (error) {
      console.log('Some error', error);
      return { ok: false, error };
    }
  }

  async function doSearch(searchText, isShortMeter) {
    try {
      const filteredMovies = await searchMovies(searchText, isShortMeter);
      saveResults(filteredMovies.data);
      saveSearchString(searchText);
      saveCheckbox(isShortMeter);
      return filteredMovies;
    } catch (error) {
      return { message: ERRORS.MOVIES_API_GENERAL_ERROR, data: [] };
    }
  }

  function doLogout() {
    localStorage.clear();
    mainApi.setToken('');
    setCurrentUser({ name: '', email: '' });
    navigate('/');
  }

  async function handleProfileChange(userData) {
    try {
      const result = await mainApi.setUserInfo(userData);
      //      console.log(result);
      if (!result._id) throw new Error('Ошибка при обновлении профиля');
      setCurrentUser(userData);
      return { ok: true };
    } catch (error) { console.log(error); return { ok: false, error } }
  }

  async function handleMoviesButton({
    country, director, duration, year, description,
    image, trailerLink, nameRU, nameEN, id: movieId,
  }) {
    const savedMovieOurId = savedMovies[movieId];
//    console.log(country);
    if (savedMovieOurId)
      try {
        const { movieId: theirId } = await mainApi.removeMovieFromSaved(savedMovieOurId);
        setSavedMovies(newState => {
          const { [theirId]: _, ...rest } = newState;
          return rest;
        });
      }
      catch (error) {
        console.log('remove from saved', error);
      }
    else
      try {
        const imageUrl = `${imgUrl}${image.url}`;
        const thumbUrl = `${imgUrl}${image.formats.thumbnail.url}`;
        const { _id: ourId, movieId: theirId } = await mainApi.addMovieToSaved({
          country: country || 'не указано', director, duration, year, description,
          image: imageUrl, trailerLink, nameRU, nameEN, thumbnail: thumbUrl, movieId,
        });
        setSavedMovies(newState => ({ [theirId]: ourId, ...newState }));
      }
      catch (error) {
        console.log('add to saved', error);
      }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Popup titleText="Какая-то ошибка" popupText="Текст какой-то ошбики" submitText="ОК" onClose={closeErrorPopup} isOpen={isErrorPopup} />
        <Routes>
          <Route element={<ProtectedRoute isAllowed={!currentUser.name} redirectPath="/movies" />}>
            <Route path='/' element={<><Header isLogged={false} /><Main /><Footer /></>} />
            <Route path='/signin' element={<Login onSubmit={handleLogin} />} />
            <Route path='/signup' element={<Register onSubmit={handleRegister} />} />
          </Route>
          <Route element={<ProtectedRoute isAllowed={currentUser.name} redirectPath="/" />}>
            <Route path='/movies' element={<><Header /><Movies savedMovies={savedMovies} onSearch={doSearch} onButtonClick={handleMoviesButton} /><Footer /></>} />
            <Route path='/saved-movies' element={<><Header /><SavedMovies /><Footer /></>} />
            <Route path='/profile' element={<><Header /><Profile onLogout={doLogout} onSubmit={handleProfileChange} /></>} />
          </Route>

          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
