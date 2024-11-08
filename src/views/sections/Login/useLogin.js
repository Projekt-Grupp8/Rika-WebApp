import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
          console.log('Received Token:', data.data.contentResult.token); 
          localStorage.setItem('token', data.data.contentResult.token);  
          navigate('/home');  
          return { success: true, data: data.data.contentResult };
        }
      }
       else {
        // Handle different error responses from backend
        switch (response.status) {
          case 401:
            setError(data.message || 'User account not verified.');
            break;
          default:
            setError(data.message || "Something went wrong");
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