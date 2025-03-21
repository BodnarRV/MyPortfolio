import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import s from "./MenuList.module.css";
import LanguagesDropDown from "./LanguagesDropDown/LanguagesDropDown";

type MenuListProps = {
  handleClick: () => void;
};

const MenuList: React.FC<MenuListProps> = ({ handleClick }) => {
  const { t } = useTranslation();
  const menuItems = [
    { path: "/", label: "home" },
    { path: "/experience", label: "experience" },
    { path: "/about", label: "about" },
    { path: "/contacts", label: "contacts" },
  ];

  return (
    <nav className={`container ${s.navigation}`}>
      <ul className={s.list}>
        {menuItems.map(({ path, label }, index) => (
          <li key={index} onClick={handleClick}>
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? s.activeLink : "")}
            >
              <span className="hash">#</span>
              {t(label)}
            </NavLink>
          </li>
        ))}
      </ul>
      <LanguagesDropDown closeHamburger={handleClick} />
    </nav>
  );
};

export default MenuList;
