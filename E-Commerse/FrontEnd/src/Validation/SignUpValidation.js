// LoginValidation.js
const validationSignup = (values) => {
    let errors = {};
  
    const emailPattern = /\S+@\S+\.\S+/;
    const passwordPattern = /^[A-Za-z]+[0-9]\w{7,14}$/;
  
    // Name validation
    if (!values.name) {
      errors.name = 'Name is required';
    } else {
      errors.name = '';
    }
  
    // Phone validation
    if (!values.phone) {
      errors.phone = 'Phone is required';
    } else {
      errors.phone = '';
    }
  
    // Email validation
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(values.email)) {
      errors.email = 'Invalid email address';
    } else {
      errors.email = " ";
    }
  
    // Password validation
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (!passwordPattern.test(values.password)) {
      errors.password = 'Password must be at least 7 characters';
    } else {
      errors.password = '';
    }
  
    // Confirm Password validation
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match';
    } else {
      errors.confirmPassword = '';
    }
  
    return errors;
  };
  
  export default validationSignup;
  