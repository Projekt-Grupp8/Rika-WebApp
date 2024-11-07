import { useState } from 'react';

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://userproviderrika-e6cvaydrc0edh7eb.westeurope-01.azurewebsites.net/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      
      if (response.ok) {
        if (data.status === "success") {
          localStorage.setItem('token', data.data.token);  // Save token for authentication
          window.location.reload();
          return { success: true, data: data.data };
        }
        
      } else {
        // Handle different error responses from backend
        switch (response.status) {
          case 401:
            setError(data.message || 'User account not verified.');
            break;
        }
        return { success: false, error: data.message };
      }

    } catch (err) {
      setError('Network error. Please check your connection.');
      return { success: false, error: err.message };
    } finally {
      setIsLoading(false);
    }
  };

  return { login, error, isLoading };
};

export default useLogin;