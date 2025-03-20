import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import s from "./LanguagesDropDown.module.css";

type LanguagesDropDownProps = {
  closeHamburger: () => void;
};

const LanguagesDropDown: React.FC<LanguagesDropDownProps> = ({
  closeHamburger,
}) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const languages = [
    { code: "en", label: "EN" },
    { code: "ua", label: "UA" },
  ];

  const handleDropDownClick = (event: React.MouseEvent) => {
    if (
      event.target instanceof HTMLElement &&
      !event.target.closest(`.${s.languages_list}`)
    ) {
      setIsDropDownOpen((prev) => !prev);
    }
  };

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsDropDownOpen(false);
    closeHamburger();
  };

  return (
    <div className={s.menu}>
      <span className={s.title} onClick={handleDropDownClick}>
        {i18n.language.toUpperCase()}
        <div className={`${s.languages_list} ${isDropDownOpen ? s.show : ""}`}>
          {isDropDownOpen && (
            <ul>
              {languages.map(({ code, label }) => (
                <li
                  key={code}
                  className={s.lang_item}
                  onClick={() => handleLanguageChange(code)}
                >
                  <span className="hash">#</span>
                  {label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </span>
    </div>
  );
};

export default LanguagesDropDown;
