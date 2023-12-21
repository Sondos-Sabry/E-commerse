// Login.js
import React ,{useState}from "react";
import '../Styles/login.css';
import validationLogin from '../../Validation/LoginValidation';

function Login() {

    
    const[values,setValues]=useState(
        {
            email:'',
            password:''
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
       const validationError =validationLogin(values);
       setError(validationError);
       
     }
   
    return (
        
        <div className="container login-container">
        <div className="login-form">
            <h2 className="text-center">Login</h2>
            <form action="" method="post" onSubmit={handleSubmit}>
            <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" name="email" class="form-control" 
                     onChange={handleInput}  />
                   <span>{error.email&& <span className="text-danger">{error.email}</span>}</span>
                </div>
    
                <div className="form-group">
                    <label htmlFor="password">Password :</label>
                    <input type="password" id="password" name="password" class="form-control"onChange={handleInput} 
                    />
               <span>{error.password&& <span className="text-danger">{error.password}</span>}</span>
  
                </div>
                <button type="submit">Login</button>
                <br/>
                  <p>Don't have an account ?<a href="/signup" className="signup">Sign Up</a></p>
            </form>
        </div>
    </div>
          
    );
}

export default Login;
