import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import styles from './RegistrationForm.module.css';

const RegistrationForm = ({ handleSubmit, DisplayingErrorMessagesSchema }) => {
  return (
    <>
      <h1 className={styles.title}>Регистрация</h1>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm({});
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <label className={styles.label}>
              <Field
                type="text"
                name="username"
                placeholder=" "
                className={`${styles.input} ${
                  touched.username && errors.username && styles.errorInput
                }`}
              />
              <p className={styles.name}>Имя *</p>
              {touched.username && errors.username && (
                <div className={styles.error}>{errors.username}</div>
              )}
            </label>
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
              Регистрация
            </button>
          </Form>
        )}
      </Formik>
      <Link to="/auth/login" className={styles.buttonEnter}>
        Вход
      </Link>
    </>
  );
};
RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default RegistrationForm;
