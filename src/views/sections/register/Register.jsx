import React from 'react'
import { useRegister } from './useRegister'


export const Register = () => {

    const {
        isChecked,
        formData,
        handleCheckboxChange,
        handleInputChange,
        handleSubmit,
    } = useRegister();

    return (
        <section id="register">
                <div className="container">
                    <div className="image-container">
                        <img src="/images/register/logo.svg" alt=""/>
                    </div>
                    <div className="form-title">
                        <h5>Sign Up</h5>
                        <p>Create a new account</p>
                    </div>
                    <form action="" className="register-form" onSubmit={handleSubmit}>
                        <div className="user-name input-area">
                            <label htmlFor="first-name">User Name</label>
                            <input type="text" id="first-name" name="firstName" placeholder="Enter your first name" tabIndex="1" value={formData.firstName} onChange={handleInputChange}/>
                        </div>
                        <div className="email input-area">
                            <label for="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="Enter your email adress" tabIndex="3"  value={formData.email} onChange={handleInputChange}/>
                        </div>
                        <div className="password input-area">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="********" tabIndex="4"  value={formData.password} onChange={handleInputChange}/>
                        </div>
                        <div className="confirm-password input-area">
                            <label for="confirm-password">Confirm password</label>
                            <input type="password" id="confirm-password" name="confirmPassword" placeholder="********" tabIndex="5"  value={formData.confirmPassword} onChange={handleInputChange}/>
                        </div>
                        <div className="terms-conditions">
                            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                            <p>By creating an account you have to agree with our terms & conditions</p>
                        </div>
                        <button className="btn-black" type="submit" disabled={!isChecked}>Register</button>
                    </form>
                </div>
            </section>
    )
}
