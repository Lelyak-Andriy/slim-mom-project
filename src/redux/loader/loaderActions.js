import { createAction } from "@reduxjs/toolkit";

const loaderTrue = createAction("loader/loaderTrue");
const loaderFalse = createAction("loader/loaderFalse");

export default {
  loaderTrue,
  loaderFalse,
};
