import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MovieCardList from '../MoviesCardList/MovieCardList';
import Page404 from '../Page404/Page404';

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Routes>
          <Route path='/' element={<><Header /><Main /><Footer /></>} />
          <Route path='/movies' element={<><Header /><Movies /><Footer /></>} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
