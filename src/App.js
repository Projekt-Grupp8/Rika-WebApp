import './app.min.css';
import Login from './views/sections/Login/Login';
import EmailVerify from './views/sections/EmailVerify/EmailVerify';

function App() {
  return (
    <div className='container'>
      {/* <Login /> */}
      <EmailVerify />
    </div>
  );
}

export default App;
