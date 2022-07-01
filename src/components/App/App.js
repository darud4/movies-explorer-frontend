import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';

function App() {
  return (
    <div className="page">
      <Header />
      <SearchForm />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
