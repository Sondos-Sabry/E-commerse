// LoginValidation.js
const validationLogin = (values) => {
    
    let errors = {};
  
    const emailPattern=/\S+@\S+\.\S+/;
    const passwordPattern=/^[A-Za-z]\w{7,14}$/;
    // Email validation
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(values.email)) {
      errors.email = 'Invalid email address';
    }else{
        errors.email="";
    }
  
    // Password validation
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (!passwordPattern.test(values.password )) {
      errors.password = 'Password must be at least 7 characters';
    }else{
        errors.password='';
    }
  
    return errors;
  };
  
  export default validationLogin;
  