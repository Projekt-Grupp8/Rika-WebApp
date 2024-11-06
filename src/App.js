import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories'

function App() {
  return (
    <div className='container'>
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
