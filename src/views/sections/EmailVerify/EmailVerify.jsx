import React, { useState } from 'react';
import logo from '../../../images/logo_black.svg'


const EmailVerify = () => {
    const [verificationCode, setVerificationCode] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setMessage('');
    
        // Retrieve the token from localStorage
        const token = localStorage.getItem('token');
    
        if (!token) {
          setMessage('You must be logged in to verify.');
          setIsLoading(false);
          return;
        }
    
        try {
          // Make a request to your API
          const response = await fetch('https://userproviderrika-e6cvaydrc0edh7eb.westeurope-01.azurewebsites.net/verify', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,  // Include the token in the Authorization header
            },
            body: JSON.stringify({ code: verificationCode }),
          });
    
          const data = await response.json();
    
          // Handle the response based on success or failure
          if (response.ok && data.success) {
            setMessage('Verification successful! Redirecting...');
            // Redirect or update the state as per your app’s flow
          } else {
            setMessage('Verification failed. Please check the code and try again.');
          }
        } catch (error) {
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