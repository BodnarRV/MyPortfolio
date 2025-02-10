import React from "react";
import { NavLink } from "react-router-dom";
import s from "./SectionTitle.module.css";

type SectionTitleType = {
  pref: string;
  title: string;
  isLine?: boolean;
  isBtn?: boolean;
  btnText?: string;
  href?: string;
  lineWidth?: string;
  paddingTop?: string;
};

const SectionTitle: React.FC<SectionTitleType> = ({
  pref,
  title,
  isLine = false,
  lineWidth,
  isBtn = false,
  btnText,
  href = "#",
  paddingTop,
}) => {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  return (
    <div className={s.section_container} style={{ paddingTop }}>
      <div className={s.name}>
        <h3 className={s.title}>
          <span className={s.pref}>{pref}</span>
          {title}
        </h3>
        {isLine && <div className={s.line} style={{ width: lineWidth }}></div>}
      </div>
      {isBtn &&
        href &&
        (isExternal ? (
          <a
            href={href}
            className={s.btn}
            target="_blank"
            rel="noopener noreferrer"
          >
            {btnText}~~{">"}
          </a>
        ) : (
          <NavLink to={href} className={s.btn}>
            {btnText}~~{">"}
          </NavLink>
        ))}
    </div>
  );
};

export default SectionTitle;
