import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { doLogin } from '../../utils/auth';

function App() {

  const [isErrorPopup, setErrorPopup] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);

  const closeErrorPopup = () => setErrorPopup(false);

  async function handleLogin({ email, password }) {
    try {
      const response = await doLogin(email, password)
      console.log(response);
    }
    catch (err) {
      console.log(err);
    }
  }

  function handleRegister({ name, email, password }) {

  }

  async function doSearch(searchText) {
    console.log(searchText);
    const results = await moviesApi.search(searchText);
    console.log(results);
    setMovies(results.filter(movie => movie.nameRU.includes(searchText)));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter>
        <div className="page">
          <Popup titleText="Какая-то ошибка" popupText="Текст какой-то ошбики" submitText="ОК" onClose={closeErrorPopup} isOpen={isErrorPopup} />
          <Routes>
            <Route path='/' element={<><Header isLogged={false} /><Main /><Footer /></>} />
            <Route path='/signin' element={<Login onSubmit={handleLogin} />} />
            <Route path='/signup' element={<Register onSubmit={handleRegister} />} />
            <Route path='/movies' element={<><Header /><Movies onSearch={doSearch} movies={movies} /><Footer /></>} />
            <Route path='/saved-movies' element={<><Header /><SavedMovies /><Footer /></>} />
            <Route path='/profile' element={<><Header /><Profile /></>} />

            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
