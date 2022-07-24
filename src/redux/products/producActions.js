import { createAction } from '@reduxjs/toolkit';
const addProductRequest = createAction('Product/addRequest');
const addProductSuccess = createAction('Product/addSuccess');
const addProductError = createAction('Product/addError');

const fetchProductRequest = createAction('Product/fetchRequest');
const fetchProductSuccess = createAction('Product/fetchSuccess');
const fetchProductError = createAction('Product/fetchError');


const deleteProductRequest = createAction('Product/deleteRequest');
const deleteProductSuccess = createAction('Product/deleteSuccess');
const deleteProductError = createAction('Product/deleteError');

// eslint-disable-next-line
export default {
  addProductRequest,
  addProductSuccess,
  addProductError,
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,

};
