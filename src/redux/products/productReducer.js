import { createReducer } from '@reduxjs/toolkit';
import productActions from './producActions.js';
import authActions from '../auth/authActions';

const toAddProduct = (state, action) => {
  return action.payload;
};

const toDeleteProduct = (state, { payload }) => ({
  ...state,
  eatenProducts: state.eatenProducts.filter(item => item.id !== payload),
});

const products = createReducer(
  {},
  {
    [productActions.fetchProductSuccess]: (state, action) => action.payload,
    [productActions.addProductSuccess]: toAddProduct,
    [productActions.deleteProductSuccess]: toDeleteProduct,
    [authActions.logoutSuccess]: () => {},
  },
);

export default products;
