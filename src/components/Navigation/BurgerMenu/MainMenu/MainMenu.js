import React, { useRef, useContext } from "react";
import useOnClickOutside from "../onClickOutside/onClickOutside";
import { MenuContext } from "../NavState/NavState";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { SideMenu } from "../SideMenu/SideMenu";

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <>
      <HamburgerButton />
      <SideMenu />
    </>
  );
};

export default MainMenu;
