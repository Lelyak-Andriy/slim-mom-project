import { createReducer } from '@reduxjs/toolkit';
import notificationActions from './notificationActions';
import authActions from '../auth/authActions';

const notification = createReducer(false, {
  [notificationActions.notificationTrue]: () => true,
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.registerError]: () => true,
  [notificationActions.notificationFalse]: () => false,
  [authActions.loginError]: () => true,
});

export default notification;
