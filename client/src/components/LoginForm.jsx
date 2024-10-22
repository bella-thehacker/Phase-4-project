import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        // Submit to backend
        fetch('http://127.0.0.1:8040/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Login failed. Please check your credentials.'); // Handle login failure
            }
            return response.json();
          })
          .then((data) => {
            console.log('Logged in:', data);
            localStorage.setItem('token', data.access_token); // Save token in local storage
            localStorage.setItem('user_id', data.user_id); // Save user ID in local storage
            alert('Login successful!'); // Inform user of successful login
          })
          .catch((error) => {
            console.error('Login error:', error);
            setErrors({ username: 'Login failed. Please try again.' }); // Set form error state
          })
          .finally(() => {
            setSubmitting(false); // Always set submitting to false
          });
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label>Username</label>
            <Field name="username" type="text" />
            {errors.username && touched.username ? (
              <div>{errors.username}</div>
            ) : null}
          </div>

          <div>
            <label>Password</label>
            <Field name="password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
          </div>

          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
