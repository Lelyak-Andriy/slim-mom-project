import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import DailyCaloriesForm from "../../components/DailyCaloriesForm/DailyCaloriesForm";
import Modal from "../../shared/Modal/Modal.js";
import Header from "../../components/Header/Header";
import Loader from "../../shared/Loader/Loader";
import Notification from "../../shared/Notification/Notification";
import getLoader from "../../redux/loader/loaderSelectors";
import styles from "../../shared/Modal/Modal.module.css";
import { pageContainer, bgContainer } from "./MainPage.module.css";

const MainPage = function () {
  const [showModal, setShowModal] = useState(false);
  const loader = useSelector(getLoader);

  const modalToggle = () => {
    setShowModal((prevState) => !prevState.showModal);
  };

  const modalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={bgContainer}>
        <Header />
        <div className={pageContainer}>
          <DailyCaloriesForm onShowModal={modalToggle} />

          <div id="overlay" className={showModal ? styles.overlay : styles.notShow}>
            <CSSTransition in={showModal} timeout={300} classNames={styles} unmountOnExit>
              <Modal onModalToggle={modalClose} />
            </CSSTransition>
          </div>
        </div>
      </div>
      <Notification><span>Выход выполнен успешно</span></Notification>
      {loader && <Loader />}
    </>
  );
};

export default MainPage;