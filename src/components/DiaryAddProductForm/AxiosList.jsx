import React from 'react';
import styles from "./DiaryAddProductForm.module.css";

const AxiosList = ({arr, toGetProduct}) => {
  return <ul className={styles.productList} onClick={toGetProduct}>
    {arr.map(el => <li className={styles.productListItem} value={el.title.ru} data-id={el._id} key={el._id}>{el.title.ru}</li>)}
  </ul>
}

export default AxiosList;
