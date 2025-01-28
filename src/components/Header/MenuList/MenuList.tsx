import React from "react";
import { useTranslation } from "react-i18next";
import s from "./MenuList.module.css";
import LanguagesDropDown from "./LanguagesDropDown/LanguagesDropDown";

export default function MenuList() {
  const { t } = useTranslation();
  const menuItems = ["home", "projects", "about", "contacts"];

  return (
    <nav className={`container ${s.navigation}`}>
      <ul className={s.list}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <span className="hash">#</span>
            {t(item)}
          </li>
        ))}
      </ul>
      <LanguagesDropDown />
    </nav>
  );
}
