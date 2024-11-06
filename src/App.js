import './app.min.css';
import Login from './views/sections/Login/Login';
import EmailVerify from './views/sections/EmailVerify/EmailVerify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/verify" element={<EmailVerify/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
