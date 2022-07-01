import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MovieCardList from '../MoviesCardList/MovieCardList';
import Page404 from '../Page404/Page404';

function App() {
  return (
    <div className="page">
      <Page404 />
      <Header />
      <MovieCardList />
      <SearchForm />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
