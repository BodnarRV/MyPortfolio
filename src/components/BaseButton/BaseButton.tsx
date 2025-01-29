import React from "react";
import s from "./BaseButton.module.css";

type BaseButtonProps = {
  href: string;
  text: string;
};

const BaseButton: React.FC<BaseButtonProps> = ({ href, text }) => {
  return (
    <div className={s.btn_container}>
      <a href={href} className={s.link}>
        {text}
      </a>
    </div>
  );
};

export default BaseButton;
