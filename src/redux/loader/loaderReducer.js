import { createReducer } from "@reduxjs/toolkit";
import dailyRateActions from "../dailyRate/dailyRateActions";
import authActions from "../auth/authActions";

const loader = createReducer(false, {
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,
  [dailyRateActions.fetchDailyRateRequest]: () => true,
  [dailyRateActions.fetchDailyRateSuccess]: () => false,
  [dailyRateActions.fetchDailyRateError]: () => false,
});

export default loader;
