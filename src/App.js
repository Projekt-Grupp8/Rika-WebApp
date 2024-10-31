import './App.css';
import LoginRegister from './views/sections/LoginRegister/LoginRegister.jsx';

function App() {
  return (
    <div className='container'>
      <a className='btn-round-xl'><i class="fa-light fa-bars-staggered"></i></a>
      <LoginRegister />
    </div>
  );
}

export default App;
