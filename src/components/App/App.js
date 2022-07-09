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

function App() {

  const [isErrorPopup, setErrorPopup] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const closeErrorPopup = () => setErrorPopup(false);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter>
        <div className="page">
          <Popup titleText="Какая-то ошибка" popupText="Текст какой-то ошбики" submitText="ОК" onClose={closeErrorPopup} isOpen={isErrorPopup} />
          <Routes>
            <Route path='/' element={<><Header isLogged={false} /><Main /><Footer /></>} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/movies' element={<><Header /><Movies /><Footer /></>} />
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
