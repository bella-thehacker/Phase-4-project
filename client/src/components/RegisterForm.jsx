import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
});

const RegisterForm = ({ setShowLogin, setUserCredentials }) => {
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: '',
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values, { setSubmitting }) => {
        fetch('https://phase-4-project-ybtk.onrender.com/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Registered:', data);
          // Pass the username and password to login
          setUserCredentials({ username: values.username, password: values.password });
          // Automatically switch to login form
          setShowLogin(true);
          setSubmitting(false);
        })
        .catch(error => {
          console.error('Error:', error);
          setSubmitting(false);
        });
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <div className='signup-words'>
            <h2>Welcome!</h2>
          </div>
          <div>
            <label>First Name</label>
            <Field name="first_name" type="text" />
            {errors.first_name && touched.first_name ? <div>{errors.first_name}</div> : null}
          </div>
          <div>
            <label>Last Name</label>
            <Field name="last_name" type="text" />
            {errors.last_name && touched.last_name ? <div>{errors.last_name}</div> : null}
          </div>
          <div>
            <label>Email</label>
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
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
          <button type="submit" disabled={isSubmitting} className='button-class'>
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
