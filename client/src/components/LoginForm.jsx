import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        // Submit to backend
        fetch('http://127.0.0.1:8040/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
          .then((response) => response.json())
          .then((data) => console.log('Logged in:', data));
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
