import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Routes>
          <Route path='/' element={<><Header /><Main /><Footer /></>} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/movies' element={<><Header /><Movies /><Footer /></>} />
          <Route path='/saved-movies' element={<><Header /><SavedMovies /><Footer /></>} />
          <Route path='/profile' element={<><Header /><Profile /></>} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
