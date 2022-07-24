import React from 'react';
import { connect } from 'react-redux';
import productSelectors from '../../redux/products/productSelectors';
import productOperations from '../../redux/products/productOperations';
import DiaryProductsListItem from './DiaryProductsListItem/DiaryProductsListItem';
import styles from './DiaryProductsList.module.css';

const DiaryProductsList = ({ products, date, toFetchProducts }) => {
  return (
    <>
      {!products || !(products.length > 0) ? (
        <h4 className={styles.title}>
          Съеденные в этот день продукты ещё не добавлены
        </h4>
      ) : (
        ''
      )}
      {products && (
        <ul className={styles.list}>
          {products.map(({ id, ...props }) => (
            <DiaryProductsListItem key={id} id={id} {...props} />
          ))}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  products: productSelectors.getProducts(state),
  date: state.date,
});
const mapDispatchToProps = dispatch => {
  return {
    toFetchProducts: date => dispatch(productOperations.fetchProducts(date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiaryProductsList);
