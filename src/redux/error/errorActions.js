import { createAction } from '@reduxjs/toolkit';

const errorTrue = createAction('error/errorTrue');
const errorFalse = createAction('error/errorFalse');

// eslint-disable-next-line
export default {
  errorTrue,
  errorFalse,
};
