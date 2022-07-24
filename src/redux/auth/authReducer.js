import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./authActions";

const createUser = (_, { payload }) => payload;
const loginUser = (_, { payload }) => payload.user;
const addToken = (_, { payload }) => payload.accessToken;
const addNewToken = (_, { payload }) => payload.newAccessToken;
const addRefreshToken = (_, { payload }) => payload.refreshToken;
const addNewRefreshToken = (_, { payload }) => payload.newRefreshToken;
const addSid = (_, { payload }) => payload.sid;
const getUser = (_, { payload }) => payload;

const user = createReducer(
  {},
  {
    [authActions.registerSuccess]: createUser,
    [authActions.loginSuccess]: loginUser,
    [authActions.getCurrentUserSuccess]: getUser,
    [authActions.logoutSuccess]: () => ({}),
    [authActions.unsetUserName]: () => ({}),
  }
);

const token = createReducer("", {
  [authActions.loginSuccess]: addToken,
  [authActions.refreshUserSuccess]: addNewToken,
  [authActions.logoutSuccess]: () => "",
  [authActions.tokenUnset]: () => "",
});

const refreshToken = createReducer("", {
  [authActions.loginSuccess]:addRefreshToken,
  [authActions.refreshUserSuccess]: addNewRefreshToken,
  [authActions.logoutSuccess]: () => "",
  [authActions.tokenUnset]: () => "",
});

const sid = createReducer("", {
  [authActions.loginSuccess]: addSid,
  [authActions.refreshUserSuccess]: addSid,
  [authActions.logoutSuccess]: () => "",
  [authActions.tokenUnset]: () => "",
});

export default combineReducers({
  user,
  token,
  refreshToken,
  sid
});
