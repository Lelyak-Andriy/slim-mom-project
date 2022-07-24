import axios from "axios";
import productActions from "./producActions.js";

axios.defaults.baseURL = "https://slimmom-backend.goit.global";

const addProduct = (date, productId, weight) => (dispatch) => {
  dispatch(productActions.addProductRequest());
  axios
    .post("/day", { date, productId, weight })
    .then((resp) => dispatch(productActions.addProductSuccess(resp.data.day || resp.data.newDay)))
    .catch((err) => dispatch(productActions.addProductError(err)));
};

const fetchProducts = (date) => dispatch => {
  dispatch(productActions.fetchProductRequest());
  axios
    .post("/day/info", { date })
    .then((resp) => dispatch(productActions.fetchProductSuccess(resp.data)))
    .catch((err) => {
      dispatch(productActions.fetchProductError(err));
    });
};

const deleteProduct = (dayId, eatenProductId) => (dispatch) => {
  dispatch(productActions.deleteProductRequest());
  axios
    .delete("/day", { data: { dayId, eatenProductId } })
    .then(() => {
      dispatch(productActions.deleteProductSuccess(eatenProductId));
    })
    .catch((error) => {
      dispatch(productActions.deleteProductError(error));
    });
};

// eslint-disable-next-line
export default {
  addProduct,
  fetchProducts,
  deleteProduct,
};
