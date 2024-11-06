import React, { useState } from 'react';
import logo from '../../../images/logo_black.svg';
import useLogin from './useLogin';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

const Login = () => {
  const { login, error: loginError, isLoading } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' }); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const newErrors = { email: '', password: '' };
    let hasError = false;

    if (!emailRegex.test(email)) {
        newErrors.email = 'Please enter a valid email address.';
        hasError = true;
    }

    if (!passwordRegex.test(password)) {
        newErrors.password = 'Password must meet complexity requirements.';
        hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    // Inga fel fortsätt med inlogg
    const result = await login(email, password);

    if (result.success) {
      setEmail('');
      setPassword('');
      console.log('Login successful!', result.data);
    } else {
      console.error('Login failed:', result.error);
    }
  };

  return (
    <div id="login-section">
      <div className="container">
        <img src={logo} alt="Logo" />
        <div className="login-welcome">
          <h1>Welcome!</h1>
          <p>please login or sign up to continue our app</p>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="email">
              <label>Email</label>
              <input type="email" id="email" disabled={isLoading} required value={email} placeholder="fashionshop@rika.com" onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: '' }); 
              }}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="password">
              <label>Password</label>
              <input type="password" id="password" disabled={isLoading} placeholder="*************" required value={password} onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors({ ...errors, password: '' });
                }}/>  
                {errors.password && <p className="error-message">{errors.password}</p>}
            </div>
            {loginError && <p className="error-message">{loginError}</p>}
            <div className="button-login">
              <button className="btn-black btn-width" type="submit" disabled={isLoading}>{isLoading ? 'Logging in...' : 'Login'} </button>
              <p>or</p>
            </div>
            <div className="social-media-login">
              <button className="btn-facebook btn-width"><i class="fa-brands fa-facebook"></i><span>Continue with<strong className="facebook"> Facebook</strong></span></button>
              <button className="btn-social btn-width"><i class="fa-brands fa-google"></i><span>Continue with<strong> Google</strong></span></button>
              <button className="btn-social btn-width"><i class="fa-brands fa-apple"></i><span>Continue with<strong> Apple</strong></span></button>
            </div>
          </form>
        </div>
      </div>
    </div> 
  );
};
export default Login;