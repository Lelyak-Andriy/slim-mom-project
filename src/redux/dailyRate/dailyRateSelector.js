const getCalories = state => state.dailyRate.dailyRate;
const getProducts = state => state.dailyRate.notAllowedProducts;

// eslint-disable-next-line
export default { getCalories, getProducts };
