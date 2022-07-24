import axios from 'axios';
import authActions from './authActions';
import notificationActions from '../notification/notificationActions';
import dailyRateOperations from '../dailyRate/dailyRateOperations';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());

  axios
    .post('auth/register', credentials)
    .then(({ data }) => {
      dispatch(authActions.registerSuccess(data));
    })
    .catch(error => {
      dispatch(authActions.registerError(error));
    })
    .finally(() =>
      setTimeout(() => dispatch(notificationActions.notificationFalse()), 2500),
    );
};

const login = credentials => dispatch => {
  dispatch(authActions.loginRequest());

  axios
    .post('auth/login', credentials)
    .then(({ data }) => {
      token.set(data.accessToken);
      dispatch(authActions.loginSuccess(data));
    })
    .catch(error => {
      dispatch(authActions.loginError(error));
    })
    .finally(() =>
      setTimeout(() => dispatch(notificationActions.notificationFalse()), 2500),
    );
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken, sid: sidValue },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  axios
    .get('user')
    .then(({ data }) => {
      dispatch(authActions.getCurrentUserSuccess(data));
    })
    .catch(error => {
      dispatch(authActions.getCurrentUserError(error));
      dispatch(refreshUser({ sid: sidValue }, 'getUser'));
      // if (error.response.status === 401) {
      //   dispatch(authActions.tokenUnset());
      // }
    });
};

const refreshUser = (credentials, action, values, userId) => (
  dispatch,
  getState,
) => {
  const {
    auth: { refreshToken: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authActions.refreshUserRequest());

  axios
    .post('auth/refresh', credentials)
    .then(({ data }) => {
      token.set(data.newAccessToken);
      dispatch(authActions.refreshUserSuccess(data));
      switch (action) {
        case 'getUser':
          dispatch(getCurrentUser());
          break;

        case 'DailyRates':
          dispatch(
            dailyRateOperations.onFetchDailyRatesAuthorised(values, userId),
          );
          break;

        case 'logOut':
          dispatch(logOut());
          break;

        default:
          break;
      }
    })
    .catch(error => {
      if (error.response.status === 401) {
        dispatch(authActions.tokenUnset());
      }
      dispatch(authActions.refreshUserError(error));
    })
    .finally(() =>
      setTimeout(() => dispatch(notificationActions.notificationFalse()), 2500),
    );
};

const logOut = () => (dispatch, getState) => {
  const {
    auth: { sid: sidValue },
  } = getState();

  dispatch(authActions.logoutRequest());

  axios
    .post('auth/logout')
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(error => {
      dispatch(refreshUser({ sid: sidValue }, 'logOut'));
      if (error.response.status === 401) {
        dispatch(authActions.tokenUnset());
      }
      dispatch(authActions.logoutError(error));
    })
    .finally(() =>
      setTimeout(() => dispatch(notificationActions.notificationFalse()), 2500),
    );
};

// eslint-disable-next-line
export default {
  register,
  login,
  getCurrentUser,
  refreshUser,
  logOut,
};
