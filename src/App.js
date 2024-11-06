import './app.min.css';
import LoginRegister from './views/sections/LoginRegister/LoginRegister.jsx';
import Login from './views/sections/Login/Login';
import EmailVerify from './views/sections/EmailVerify/EmailVerify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/verify" element={<EmailVerify/>}/>
        <Route path="/welcomescreen" element={<LoginRegister/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
