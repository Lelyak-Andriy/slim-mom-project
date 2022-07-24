import React from 'react';
import { connect } from 'react-redux';
import styles from './DiaryProductsListItem.module.css';
import productOperations from '../../../redux/products/productOperations';

const DiaryProductsListItem = ({
  title,
  weight,
  kcal,
  deleteProduct,
  dayId,
}) => {
  const calories = Math.round(kcal);
  return (
    <li className={styles.listItem}>
      <p className={styles.listItemName}>{title}</p>
      <p className={styles.listItemWeight}>{weight} г</p>
      <p className={styles.listItemCalorie}>
        {calories} <span>ккал</span>
      </p>
      <button
        type="button"
        className={styles.button}
        onClick={() => deleteProduct(dayId)}
      >
        X
      </button>
    </li>
  );
};

const mapStateToProps = state => ({
  dayId: state.products.id,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteProduct: dayId => {
      return dispatch(productOperations.deleteProduct(dayId, ownProps.id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiaryProductsListItem);
