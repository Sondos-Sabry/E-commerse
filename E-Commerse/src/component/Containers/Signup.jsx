import React, { useState } from "react";

import '../Styles/login.css'

import '../Styles/signup.css'
function Signup() {






    // JSX code for Signup form
    const renderForm = (
        <div className="form">
            <form  >
                <div className="input-container">

                    <label>Email </label>
                    <input type="text" name="uname" required />

                </div>

                <div className="input-container">

                    <label>firstname </label>
                    <input type="text" name="uname" required />

                </div>
                <div className="input-container">

                    <label>lastname </label>
                    <input type="text" name="uname" required />

                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />

                </div>
                <div className="button-container">
                    <input type="submit"  value="Sign UP"/>
                </div>
                Have an account? <a href="/login">Login</a>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="Signup-form">
                <div className="title">Sign In</div>
                {renderForm}
            </div>
        </div>
    );
}

export default Signup;