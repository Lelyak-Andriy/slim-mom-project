import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

const refreshUserRequest = createAction('auth/refreshUserRequest');
const refreshUserSuccess = createAction('auth/refreshUserSuccess');
const refreshUserError = createAction('auth/refreshUserError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const unsetUserName = createAction('auth/unsetUserName');
const tokenUnset = createAction('token/tokenUnset');

// eslint-disable-next-line
export default {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  unsetUserName,
  tokenUnset,
  refreshUserRequest,
  refreshUserSuccess,
  refreshUserError
};
