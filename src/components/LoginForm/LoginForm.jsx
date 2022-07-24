import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import styles from './LoginForm.module.css';

const LoginForm = ({ onSubmit, DisplayingErrorMessagesSchema }) => {
  return (
    <>
      <h1 className={styles.title}>Вход</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm({});
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <label className={styles.label}>
              <Field
                type="text"
                name="email"
                placeholder=" "
                className={`${styles.input} ${
                  touched.email && errors.email && styles.errorInput
                }`}
              />
              <p className={styles.name}>Логин *</p>
              {touched.email && errors.email && (
                <div className={styles.error}>{errors.email}</div>
              )}
            </label>
            <label className={styles.label}>
              <Field
                type="password"
                name="password"
                placeholder=" "
                className={`${styles.inputPass} ${
                  touched.password && errors.password && styles.errorInput
                }`}
              />
              <p className={styles.name}>Пароль *</p>
              {touched.password && errors.password && (
                <div className={styles.error}>{errors.password}</div>
              )}
            </label>
            <button type="submit" className={styles.buttonReg}>
              Вход
            </button>
          </Form>
        )}
      </Formik>
      <Link to="/auth/register" className={styles.buttonEnter}>
        Регистрация
      </Link>
    </>
  );
};
LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
