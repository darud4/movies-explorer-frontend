import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MovieCard from '../MoviesCard/MovieCard';

function App() {
  return (
    <div className="page">
      <Header />
      <MovieCard />
      <SearchForm />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
