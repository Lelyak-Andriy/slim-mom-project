import axios from "axios";
import dailyRateActions from "./dailyRateActions";
import authOperations from "../auth/authOperations";

axios.defaults.baseURL = "https://slimmom-backend.goit.global";

// const token = {
//   set(token) {
//     console.log("set");
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

const onFetchDailyRates = (values) => (dispatch) => {
  dispatch(dailyRateActions.fetchDailyRateRequest());

  axios
    .post("/daily-rate", values)
    .then((receivedData) => {
      dispatch(dailyRateActions.fetchDailyRateSuccess(receivedData.data));
    })
    .catch((error) => {
      dispatch(dailyRateActions.fetchDailyRateError(error));
    });
};

const onFetchDailyRatesAuthorised = (values, userId) => (dispatch, getState) => {
  const {
    auth: { sid: sidValue },
  } = getState();

  // token.set(
  //   "eyJhbGciOidfvdfvJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmU0NTYzYThiMzcwMDAwMDRkMGExOWQiLCJzaWQiOiI1ZmZkZWZlOGIzNThiNTNlYzhlYjFkNzYiLCJpYXQiOjE2MTA0Nzc1NDQsImV4cCI6MTYxMDQ4MTE0NH0.DAB6l-1fjlOAxzIhnAu2Ek7Bl5z-P39cEH8Sh3DxBBk"
  // );

  dispatch(dailyRateActions.fetchDailyRateRequestAuth());

  axios
    .post(`/daily-rate/${userId}`, values)
    .then((receivedData) => {
      dispatch(dailyRateActions.fetchDailyRateSuccess(receivedData.data));
    })
    .catch((error) => {
      dispatch(authOperations.refreshUser({ sid: sidValue }, "DailyRates", values, userId));
      dispatch(dailyRateActions.fetchDailyRateErrorAuth(error));
    });
};

// eslint-disable-next-line
export default {
  onFetchDailyRates,
  onFetchDailyRatesAuthorised,
};
