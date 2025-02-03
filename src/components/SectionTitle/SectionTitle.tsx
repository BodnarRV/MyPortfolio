import React from "react";
import s from "./SectionTitle.module.css";

type SectionTitleType = {
  pref: string;
  title: string;
  isLine?: boolean;
  isBtn?: boolean;
  btnText?: string;
  href: string;
  lineWidth?: string;
};

const SectionTitle: React.FC<SectionTitleType> = ({
  pref,
  title,
  isLine = false,
  lineWidth,
  isBtn = false,
  btnText,
  href,
}) => {
  return (
    <div className={s.section_container}>
      <div className={s.name}>
        <h3 className={s.title}>
          <span className={s.pref}>{pref}</span>
          {title}
        </h3>
        {isLine && <div className={s.line} style={{ width: lineWidth }}></div>}
      </div>
      {isBtn && (
        <a href={href} className={s.btn}>
          {btnText}~~{">"}
        </a>
      )}
    </div>
  );
};

export default SectionTitle;
