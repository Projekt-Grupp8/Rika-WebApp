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

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('token', data.token); 
      return { success: true, data };

    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };

    } finally {
      setIsLoading(false);
    }
  };

  return { login, error, isLoading };
};

export default useLogin;