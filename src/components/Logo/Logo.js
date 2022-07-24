import React from 'react';
import logo from '../../assets/images/desktop/logo-desktop-x1-min.png';
import './Logo.css';
import { authSelectors } from '../../redux/auth';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Logo = ({ isAuthenticated }) => {
  return (
    <Link className="logoContainer" to="/daily-rate">
      {/* <NavLink  to="/diaryPage"> <img src={logo} className="logoImage" /></NavLink> */}
      <img src={logo} alt="logo" className="logoImage" width="47" height="44" />
      {isAuthenticated ? (
        <>
          <p className="logoTextSlimAuth">Slim </p>
          <p className="logoTextMomAuth">Mom </p>
        </>
      ) : (
        <>
          <p className="logoTextSlim">Slim </p>
          <p className="logoTextMom ">Mom </p>
        </>
      )}
    </Link>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Logo);
