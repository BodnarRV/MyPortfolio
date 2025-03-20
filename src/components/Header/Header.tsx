import React, { useEffect } from "react";
import Hamburger from "hamburger-react";
import s from "./Header.module.css";
import color from "../../colors";

import Logo from "../../assets/social/Logo.png";
import MenuList from "./MenuList/MenuList";
import { useDispatch, useSelector } from "react-redux";
import { selectHamburgerState } from "../../redux/hamburger/selectors";
import { toggleHamburger } from "../../redux/hamburger/slice";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const selectHamburgerIsOpen = useSelector(selectHamburgerState);

  const handleCloseMenu = () => {
    if (selectHamburgerIsOpen) {
      dispatch(toggleHamburger());
    }
  };

  // Effect to handle the body scroll behavior
  useEffect(() => {
    if (selectHamburgerIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectHamburgerIsOpen]);

  return (
    <>
      <header className={`container ${s.header}`}>
        <div className={s.logo_container}>
          <a className={s.title} href="/">
            <img className={s.logo_img} src={Logo} />
            {t("myName")}
          </a>
          <div className={s.hamburger}>
            <Hamburger
              toggled={selectHamburgerIsOpen}
              toggle={() => dispatch(toggleHamburger())}
              size={25}
              color={color.linkInActive}
              duration={0.3}
              easing="ease-in"
            />
          </div>
        </div>
        <div className={`${s.menuList} ${selectHamburgerIsOpen ? s.show : ""}`}>
          <MenuList handleClick={handleCloseMenu} />
        </div>
      </header>
    </>
  );
}
