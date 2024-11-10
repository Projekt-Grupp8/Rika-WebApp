import './app.min.css';
import LoginRegister from './views/sections/LoginRegister/LoginRegister.jsx';
import CategoryPage from './views/sections/categoryPage/CategoryPage.jsx';
import Login from './views/sections/Login/Login';
import EmailVerify from './views/sections/EmailVerify/EmailVerify';
import MinePage from './views/sections/MinePage/MinePage.jsx';
import { Register } from './views/sections/register/Register';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';  
import Footer from './components/Footer';  
import User from './views/sections/UserProfile/UserProfile.jsx';
import { useState, useEffect } from 'react';
import CartPage from './views/sections/cart/CartPage.jsx';
import { useLocation } from 'react-router-dom';  

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <AuthLayout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </BrowserRouter>
  );
}

function AuthLayout({ isAuthenticated, setIsAuthenticated }) {
  const handleLogout = () => {
    localStorage.removeItem('token');   
    setIsAuthenticated(false);          
  };

  const location = useLocation();  

  return (
    <>
     
      {isAuthenticated && location.pathname !== "/cart" && <Header />}

      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
        <Route path="/verify" element={<EmailVerify />} />
        <Route path="/" element={<LoginRegister />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/home" element={isAuthenticated ? <MinePage onLogout={handleLogout} /> : <Navigate to="/login" />} />
        <Route path="/user" element={localStorage.getItem('token') ? <User onLogout={handleLogout} /> : <Navigate to="/login" />} />

        <Route 
          path="/product" 
          element={localStorage.getItem('token') ? <CategoryPage onLogout={handleLogout} /> : <Navigate to="/login" />} 
        />

        <Route 
          path="/cart" 
          element={isAuthenticated ? <CartPage /> : <Navigate to="/login" />} 
        />
      </Routes>

     
      {isAuthenticated && location.pathname !== "/cart" && <Footer />}
    </>
  );
}

export default App;
