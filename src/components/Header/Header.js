import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.css';

const Header = ({ isAuthenticated }) => {
  return (
    <>
      {!isAuthenticated && (
        <div className={styles.headerContainer}>
          <Logo />

          <div className={styles.navContainer}>
            <NavLink className={styles.loginLink} to="/auth/login">
              Вход
            </NavLink>
            <NavLink className={styles.loginLink} to="/auth/register">
              Регистрация
            </NavLink>
          </div>
        </div>
      )}

      {isAuthenticated && <Navigation />}
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps, null)(Header);
