import React, { useState } from "react";

import '../Styles/login.css'
import '../Styles/signup.css'
import  validationSignup from '../../Validation/SignUpValidation';
import axios from 'axios';


function Signup() {
    const[values,setValues]=useState(
        {
            email:'',
            password:'',
            name:'',
            phone:''
        }
    );

    const [error,setError]=useState({});
    // input change
    const handleInput=(event)=>{
        setValues({...values,[event.target.name]:[event.target.value]})
    }

    // form handling
     const handleSubmit=(event)=>{
       event.preventDefault();
       const validationError =validationSignup(values);
       setError(validationError);
       if(error.name==="" && error.email==="" && error.password==="" &&error.phone===""){
        // call api
        axios.post('http://localhost:8081/signup',values)
        .then(res=>console.log(res))
        .catch(err =>console.log(err));
       }
       
     }
return(

    <div className="container signup-container">
    <div className="signup-form">
        <h2 className="text-center">Sign Up</h2>
        <form action="" method="post" onSubmit={handleSubmit}>
        <div className="form-group">
                <label htmlFor="name">Name :</label>
                <input type="text" id="name" name="name" class="form-control"  placeholder="Enter your Name" onChange={handleInput}/>
                <span>{error.name&& <span className="text-danger">{error.name}</span>}</span>
        </div>
        <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" name="email" class="form-control"  placeholder="Enter your email"onChange={handleInput}/>
                <span>{error.email&& <span className="text-danger">{error.email}</span>}</span>
            </div>
      
        <div className="form-group">
                <label htmlFor="phone">Phone :</label>
                <input type="tel" id="phone" name="phone" class="form-control"  placeholder="Enter your phone" onChange={handleInput}/>
                <span>{error.phone&& <span className="text-danger">{error.phone}</span>}</span>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password :</label>
                <input type="password" id="password" name="password" class="form-control"  placeholder="************"onChange={handleInput}/>
                <span>{error.password&& <span className="text-danger">{error.password}</span>}</span>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPass">Confirm Password :</label>
                <input type="password" id="confirmPass" name="confirmPass" class="form-control"  placeholder="************" onChange={handleInput}/>
                <span>{error.confirmPassword&& <span className="text-danger">{error.confirmPassword}</span>}</span>
            </div>
            <button type="submit">Sign Up</button>
            <br/>
              <p> Have an account ?<a href="/login" className="login">Login</a></p>
        </form>
    </div>
</div>
     
);
}

export default Signup;