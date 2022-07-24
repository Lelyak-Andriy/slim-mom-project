import { createReducer } from '@reduxjs/toolkit';
import errorActions from './errorActions';
import authActions from '../auth/authActions';

const error = createReducer(false, {
  [errorActions.errorTrue]: () => true,
  [authActions.loginError]: () => true,
  [authActions.registerError]: () => true,
  [errorActions.errorFalse]: () => false,
  [authActions.loginRequest]: () => false,
  [authActions.registerRequest]: () => false,
  [authActions.logoutRequest]: () => false,
  [authActions.registerRequest]: () => false,
});

export default error;
