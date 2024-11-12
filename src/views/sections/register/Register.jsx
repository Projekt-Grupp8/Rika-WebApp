import React from 'react'
import { useRegister } from './useRegister'
import logoBlack from '../../../images/logo_black.svg'


export const Register = () => {

    const {
        isChecked,
        formData,
        errors,
        successMessage,
        errorMessage,
        loading,
        handleCheckboxChange,
        handleInputChange,
        handleSubmit,
    } = useRegister();

    return (
        <section id="register">
                <div className="container">
                    <div className="image-container">
                        <img src={logoBlack} alt="company logo"/>
                    </div>
                    <div className="form-title">
                        <h1>Sign Up</h1>
                        <p>Create a new account</p>
                    </div>
                    <form className="register-form" onSubmit={handleSubmit}>
                        <div className="user-name input-area">
                            <label htmlFor="user-name">User Name</label>
                            <input type="text" id="user-name" name="userName" placeholder="Enter your username" tabIndex="1" value={formData.firstName} onChange={handleInputChange}/>
                            {errors.userName && <span className="error-message">{errors.userName}</span>}
                        </div>
                        <div className="email input-area">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="Enter your email adress" tabIndex="3"  value={formData.email} onChange={handleInputChange}/>
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                        <div className="password input-area">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="********" tabIndex="4"  value={formData.password} onChange={handleInputChange}/>
                            {errors.password && <span className="error-message">{errors.password}</span>}
                        </div>
                        <div className="confirm-password input-area">
                            <label htmlFor="confirm-password">Confirm password</label>
                            <input type="password" id="confirm-password" name="confirmPassword" placeholder="********" tabIndex="5"  value={formData.confirmPassword} onChange={handleInputChange}/>
                            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                        </div>
                        <div className="terms-conditions">
                            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                            <p>By creating an account you have to agree with our terms & conditions</p>
                        </div>
                        <button
                        className="btn-black"
                        type="submit"
                        disabled={!isChecked || loading}>
                        {loading ? "Loading..." : "Register"}
                        </button>
                        
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                </div>
            </section>
    )
}
