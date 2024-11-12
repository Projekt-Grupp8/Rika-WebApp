import React, { useState } from 'react';
import logo from '../../../images/logo_black.svg'
import { useNavigate } from 'react-router-dom';

const EmailVerify = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');
    try {
      const response = await fetch('https://userproviderrika-e6cvaydrc0edh7eb.westeurope-01.azurewebsites.net/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email: email, VerificationCode: verificationCode })
      });
  
      // Check if the response is OK (status in the 200 range)
      if (response.ok) {
        console.log('Verification successful, redirecting to login...');
        setMessage('Verification successful! Redirecting...');
        setTimeout(() => { navigate('/login'); }, 1000);
      } else {
        // Handle non-200 responses here
        setMessage('Verification failed. Please check the email and code, then try again.');
      }
    } catch (error) {
      console.error('Error occurred:', error); 
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  

return (
    
    <section id="email-section">
        <div className="container">
            <div className="email-welcome">
                <img src={logo} alt='logo' />
                <p>Please provide the verification code sent to your email</p>
            </div>
            <div className="email-form">
                <form onSubmit={handleSubmit}>
                <label>Email</label>
                            <input 
                                type="email" 
                                required 
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                    <label>Verification Code</label>
                    <input type="text" id="verification" required placeholder="Enter code here"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}>
                    </input>
                    {message && <p className="message">{message}</p>}
                    <button className="btn-black btn-width" type="submit" disabled={isLoading}>
                        {isLoading ? 'Verifying...' : 'Verify'}
                    </button>
                </form>
            </div>
        </div>
    </section>

  )
}

export default EmailVerify