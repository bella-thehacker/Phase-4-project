import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import LoginSuccessful from './LoginSuccessful'; // Import the new component

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); 
  const [showLoading, setShowLoading] = useState(false); 

  const handleLogin = (values, { setSubmitting, setErrors }) => {
    
    fetch('https://phase-4-project-ybtk.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Login failed. Please check your credentials.');
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('user_id', data.user_id);
        
        // Delay showing the success popup by 6 seconds
        setTimeout(() => {
          setShowLoading(false);
          setShowSuccessPopup(true);
        }, 1000); // Delay for 6 seconds
      })
      .catch((error) => {
        setErrors({ username: 'Login failed. Please try again.' });
        setShowLoading(false);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <>
     {/* Show the success popup */}
     {showSuccessPopup && <LoginSuccessful />}
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched }) => (
          <Form>
            <div className='signup-words'>
              <h2>Welcome Back!</h2>
            </div>

            <div>
              <label>Username</label>
              <Field name="username" type="text" />
              {errors.username && touched.username ? <div>{errors.username}</div> : null}
            </div>

            <div>
              <label>Password</label>
              <Field name="password" type="password" />
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
            </div>

            <button type="submit" className='button-class'>Login</button>

        

           
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;

