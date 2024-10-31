import { useState } from "react";

export const useRegister = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isChecked) {
            alert("Du måste acceptera villkoren för att registrera dig");
            return;
        }

        console.log("Formuläret har skickats:", formData);
    };

    return {
        isChecked,
        formData,
        handleCheckboxChange,
        handleInputChange,
        handleSubmit
    };
};