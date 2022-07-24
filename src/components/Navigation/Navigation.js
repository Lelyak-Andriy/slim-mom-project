import React from "react";
import styles from "./Navigation.module.css";
import Container from "../../shared/Container/Container";
import { NavLink } from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo";
import { NavState } from "./BurgerMenu/NavState/NavState";
import MainMenu from "./BurgerMenu/MainMenu/MainMenu";
import Logo from "../Logo/Logo";

function Navigation() {
  return (
    <>
      <div className={styles.container}>
        <Container>
          <div className={styles.boxTablet}>
            <Logo />
            <div className={styles.userInfoTablet}>
              <UserInfo />
            </div>
            <div className={styles.burgerMenu}>
              <NavState>
                <MainMenu />
              </NavState>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.boxDesktop}>
        <div className={styles.regularMenu}>
          <Logo className={styles.logoDesct} />
          <div className={styles.navContainer}>
            <NavLink className={styles.desktopLink} activeClassName={styles.desktopLinkActive} to="/daily-rate">
              ДНЕВНИК
            </NavLink>
            <NavLink className={styles.desktopLink} activeClassName={styles.desktopLinkActive} to="/calculator">
              КАЛЬКУЛЯТОР
            </NavLink>
          </div>
        </div>

        <div className={styles.userInfoDesktop}>
          <UserInfo />
        </div>
      </div>

      <div className={styles.userInfo}>
        <UserInfo />
      </div>
    </>
  );
}

export default Navigation;
