import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MovieCardList from '../MoviesCardList/MovieCardList';

function App() {
  return (
    <div className="page">
      <Header />
      <MovieCardList />
      <SearchForm />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
