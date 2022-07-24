import React from 'react';
import CalculatorCalorieForm from '../../components/CalculatorCalorieForm';
import Header from '../../components/Header/Header';
import RightSideBar from '../../components/RightSideBar/RightSideBar.js';
import Notification from '../../shared/Notification/Notification';

import styles from '../DiaryPage/diary.module.css';

const CalculatorPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.CalculatorCalorieFormBox}>
          <CalculatorCalorieForm />
        </div>
        <RightSideBar />
      </div>
      <Notification><span>Вход выполнен успешно</span></Notification>
    </>
  );
};

export default CalculatorPage;
