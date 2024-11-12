import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Regex-mönster för validering
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // E-post regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Lösenord regex

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Kopiera errors state för att uppdatera felmeddelanden
    const newErrors = { ...errors };

    // Validera användarnamn (userName)
    if (name === 'userName') {
      if (!value) {
        newErrors.userName = 'User Name is required';
      } 
      else if (value.length < 4) {
        newErrors.userName = 'User Name must be at least 4 characters long';
      } 
      else {
        newErrors.userName = ''; // Rensa fel om det är giltigt
      }
    }

    // Validering för email
    if (name === 'email') {
      if (!value) {
        newErrors.email = 'Email is required';
      } 
      else if (!emailRegex.test(value)) {
        newErrors.email = 'Email is invalid';
      } 
      else {
        newErrors.email = ''; // Rensa fel om det är giltigt
      }
    }

    // Validering för lösenord
    if (name === 'password') {
      if (!value) {
        newErrors.password = 'Password is required';
      } 
      else if (!passwordRegex.test(value)) {
        newErrors.password = 'Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one number.';
      } 
      else {
        newErrors.password = ''; // Rensa fel om det är giltigt
      }
    }

    // Validering för bekräftelse av lösenord
    if (name === 'confirmPassword') {
      if (!value) {
        newErrors.confirmPassword = 'Confirm password is required';
      } else if (value !== formData.password) {
        newErrors.confirmPassword = 'Passwords do not match';
      } else {
        newErrors.confirmPassword = ''; // Rensa fel om det är giltigt
      }
    }

    setErrors(newErrors); // Uppdatera errors state
  };

  const validate = () => {
    const newErrors = {};

    // Validering för användarnamn (userName)
    if (!formData.userName) {
      newErrors.userName = 'User Name is required';
    } else if (formData.userName.length < 4) {
      newErrors.userName = 'User Name must be at least 4 characters long';
    }

    // Validering för email
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Validering för lösenord
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one number.';
    }

    // Validering för bekräftelse av lösenord
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true om inga fel finns
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Förhindra standard submit-beteende
    setIsLoading(true);
    if (!isChecked) {
      alert("You must accept the terms and conditions to register.");
      return;
    }

    if (!validate()) {
      return; // Om validering misslyckas, stoppa submission
    }

    try {
        // Gör API-anrop till /register
        const response = await fetch('https://userproviderrika-e6cvaydrc0edh7eb.westeurope-01.azurewebsites.net/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: formData.userName,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            isVerified: false,
            termsConfirmed: isChecked,
          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {

          localStorage.setItem('registerToken', data.token);

          setSuccessMessage('Registration successful! Redirecting to login page...');
          setErrorMessage(''); // Rensa eventuella tidigare felmeddelanden
          // Omdirigera användaren efter ett par sekunder (eller direkt)
          setTimeout(() => {
            navigate('/verify'); // Ändra URL till den sida du vill omdirigera till
          }, 3000);
        } 
        else {
          // Hantera API-fel
          setErrorMessage(data.message || 'Something went wrong. Please try again later.');
          setSuccessMessage(''); // Rensa framgångsmeddelandet om ett fel uppstår
        }
      } catch (error) {
        setErrorMessage('Something went wrong.');
        setSuccessMessage(''); // Rensa framgångsmeddelandet om ett fel uppstår
      }
      finally {
      setIsLoading(false);
      }
    // Hantera formulärdata här (skicka till server, etc.)
    console.log("Formuläret har skickats:", formData);
  };

  return {
    isChecked,
    formData,
    errors,
    successMessage,
    errorMessage,
    isLoading,
    handleCheckboxChange,
    handleInputChange,
    handleSubmit,
  };
};
