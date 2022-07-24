import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import authSelectors from "../../redux/auth/authSelectors";
import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import Notification from "../../shared/Notification/Notification";
import RegistrationForm from "../../components/RegistrationForm/RegistrationFormContainer";
import authActions from "../../redux/auth/authActions";
import getLoader from "../../redux/loader/loaderSelectors";
import Loader from "../../shared/Loader/Loader";
import { pageContainer, bgContainer, headerHide, logoHide } from "./LoginRegistrationPage.module.css";

const RegistrationPage = () => {
  const name = useSelector(authSelectors.getUserName);
  const loader = useSelector(getLoader);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (name) {
      dispatch(authActions.unsetUserName());
      history.push("/auth/login");
    }
  }, [name, history, dispatch]);
  
  return (
    <>
      <div className={bgContainer}>
        <div className={headerHide}>
          <Header />
        </div>
        <div className={logoHide}>
          <Logo />
        </div>
        <div className={pageContainer}>
          <RegistrationForm />
          {loader && <Loader/>}
        </div>
      </div>
      <Notification><span>Произошла ошибка, повторите попытку еще раз</span></Notification>
    </>
  );
};

export default RegistrationPage;