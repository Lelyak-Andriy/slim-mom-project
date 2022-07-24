import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './DailyCalorieIntake.module.css';
import dailyRateSelector from '../../redux/dailyRate/dailyRateSelector';
import sprite from '../../assets/images/sprite.svg';

const DailyCalorieIntake = () => {
  const calories = useSelector(dailyRateSelector.getCalories);
  const products = useSelector(dailyRateSelector.getProducts);

  const [value, setValue] = useState('');
  const onChange = event => setValue(event.target.value);

  const productsFinal = products.filter(product =>
    product.toLowerCase().includes(value),
  );
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>
        Ваша рекомендуемая суточная норма калорий составляет
      </p>
      <div className={styles.container}>
        <p className={styles.caloriesText}>
          <span className={styles.caloriesValue}>{calories}</span> ккал
        </p>
        <p className={styles.productsTitle}>
          Продукты, которые вам не рекомендуется употреблять
        </p>

        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            name="filter"
            value={value}
            onChange={onChange}
          />
          <span>
            <svg width="12" height="12">
              <use href={sprite + '#search-icon'} />
            </svg>
          </span>
        </div>

        <ol className={styles.productsList}>
          {productsFinal.map((product, id) => (
            <li key={id} className={styles.productsItem}>
              {product}
            </li>
          ))}
        </ol>
        <Link to="/auth/register" className={styles.button}>
          Начать худеть
        </Link>
      </div>
    </div>
  );
};

export default DailyCalorieIntake;
