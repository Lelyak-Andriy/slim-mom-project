import React, { Component } from 'react';
import DiaryDateCalendar from '../../components/DiaryDateCalendar/DiaryDateCalendar.jsx';
import DiaryAddProductForm from '../../components/DiaryAddProductForm/DiaryAddProductForm.js';
import DiaryAddProductList from '../../components/DiaryProductsList/DiaryProductList.js';
import RightSideBar from '../../components/RightSideBar/RightSideBar.js';
import Header from '../../components/Header/Header';
import img from '../../assets/images/plus.png';
import Modal from '../../components/DiaryAddProductForm/AddProductModal.jsx';

import styles from './diary.module.css';

class DiaryPage extends Component {
  state = {
    showModal: false,
  };

  modalToggle = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
    document.body.classList.add('stopScroll');
  };

  render() {
    return (
      <>
        <Header />
        <div className={styles.container}>
          <div className={styles.containerInformation}>
            <DiaryDateCalendar />
            <div className={styles.hidden}>
              <DiaryAddProductForm />
            </div>
            <DiaryAddProductList />
            <button
              className={styles.roundBtn}
              onClick={this.modalToggle}
              type="button"
            >
              <img
                className={styles.img}
                src={img}
                alt="add"
                width="14"
                height="14"
              />
            </button>

            {this.state.showModal && <Modal onModalToggle={this.modalToggle} />}
          </div>
          <RightSideBar />
        </div>
      </>
    );
  }
}
export default DiaryPage;
