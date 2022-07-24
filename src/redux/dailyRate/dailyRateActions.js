import { createAction } from '@reduxjs/toolkit';

const fetchDailyRateRequest = createAction('dailyRate/fetchRequest');
const fetchDailyRateSuccess = createAction('dailyRate/fetchSuccess');
const fetchDailyRateError = createAction('dailyRate/fetchError');

const fetchDailyRateRequestAuth = createAction('dailyRate/fetchRequestAuth');
const fetchDailyRateSuccessAuth = createAction('dailyRate/fetchSuccessAuth');
const fetchDailyRateErrorAuth = createAction('dailyRate/fetchErrorAuth');

const changeFilter = createAction('dailyRate/changeFilter');

// eslint-disable-next-line
export default {
  fetchDailyRateRequest,
  fetchDailyRateSuccess,
  fetchDailyRateError,

  fetchDailyRateRequestAuth,
  fetchDailyRateSuccessAuth,
  fetchDailyRateErrorAuth,

  changeFilter,
};
