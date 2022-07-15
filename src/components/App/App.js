import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { mainApi } from '../../utils/MainApi';
import { doLogin, doSignup, checkToken as validateToken } from '../../utils/auth';

function App() {

  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [savedMovies, setSavedMovies] = useState([]);
  const [originalRoute, setOriginalRoute] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const getSavedMovies = useCallback(async () => {
    const result = await mainApi.getSavedMovies();
    const processed = result.map(({ _id, country, director, duration, year, description,
      trailerLink, nameRU, nameEN, movieId, image, thumbnail }) =>
    ({
      id: _id, country, director, duration, year, description,
      trailerLink, nameRU, nameEN, movieId, image, thumbnail
    })
    );
    setSavedMovies(processed);

  }, []);

  const checkToken = useCallback(async (token) => {
    try {
      const { email, name } = await validateToken(token)
      if (!email) throw Error('Что-то пошло не так');
      mainApi.setToken(token);
      setCurrentUser({ name, email });
      getSavedMovies();
      setOriginalRoute(location.pathname);
      return true;
      //      navigate('/movies', { replace: true });
    }
    catch (error) { console.log(error); return false; };
  }, [getSavedMovies]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) checkToken(jwt);
  }, [checkToken]);

  useEffect(() => {
    if (currentUser.name && originalRoute)
      navigate(originalRoute, { replace: true }); setOriginalRoute('');
  }, [currentUser]);

  async function handleLogin({ email, password }) {
    try {
      const { token } = await doLogin(email, password)
      mainApi.setToken(token);
      const { name } = await mainApi.getUserInfo();
      setCurrentUser({ name, email });
      getSavedMovies();
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

  function doLogout() {
    localStorage.clear();
    mainApi.setToken('');
    setCurrentUser({ name: '', email: '' });
    navigate('/');
  }

  async function handleProfileChange(userData) {
    try {
      const result = await mainApi.setUserInfo(userData);
      if (!result._id) throw new Error('Ошибка при обновлении профиля');
      setCurrentUser(userData);
      return { ok: true };
    } catch (error) { console.log('Ошибка при обновлении профиля', error); return { ok: false, error } }
  }

  async function removeFromSaved(ourId) {
    try {
      const { movieId } = await mainApi.removeMovieFromSaved(ourId);
      if (!movieId) throw new Error('Ошибка при удалении из сохраненных фильмов');
      getSavedMovies();
    }
    catch (error) {
      console.log('remove from saved', error);
    }
  }

  async function addToSaved({ country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId }) {
    try {
      const { movieId: theirId } = await mainApi.addMovieToSaved({
        country: country || 'не указано', director, duration, year, description,
        image, trailerLink: trailerLink || 'https://null.ru', nameRU, nameEN: nameEN || 'не указано', thumbnail, movieId,
      });
      if (!theirId) throw new Error('Ошибка при добавлении в сохраненные фильмы');
      getSavedMovies();
    }
    catch (error) {
      console.log('add to saved', error);
    }
  }

  function handleMoviesButton(movieData) {
    const savedMovie = savedMovies.find(({ movieId }) => movieId === movieData.id);
    if (savedMovie) removeFromSaved(savedMovie.id);
    else addToSaved(movieData);
  }

  function handleSavedMoviesButton({ id }) {
    removeFromSaved(id);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path='/' element={<><Header theme="dark" /><Main /><Footer /></>} />
          <Route element={<ProtectedRoute isAllowed={!currentUser.name} redirectPath="/movies" />}>
            <Route path='/signin' element={<Login onSubmit={handleLogin} />} />
            <Route path='/signup' element={<Register onSubmit={handleRegister} />} />
          </Route>
          <Route element={<ProtectedRoute isAllowed={currentUser.name || false} redirectPath="/" />}>
            <Route
              path='/movies'
              element={
                <>
                  <Header />
                  <Movies onButtonClick={handleMoviesButton} savedMovies={savedMovies} />
                  <Footer />
                </>}
            />
            <Route
              path='/saved-movies'
              element={
                <>
                  <Header />
                  <SavedMovies onButtonClick={handleSavedMoviesButton} savedMovies={savedMovies} />
                  <Footer />
                </>
              }
            />
            <Route path='/profile' element={
              <>
                <Header />
                <Profile onLogout={doLogout} onSubmit={handleProfileChange} />
              </>
            }
            />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
