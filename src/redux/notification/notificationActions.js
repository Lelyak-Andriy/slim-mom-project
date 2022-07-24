import { createAction } from '@reduxjs/toolkit';

const notificationTrue = createAction('notification/notificationTrue');
const notificationFalse = createAction('notification/notificationFalse');

// eslint-disable-next-line
export default {
  notificationTrue,
  notificationFalse,
};
