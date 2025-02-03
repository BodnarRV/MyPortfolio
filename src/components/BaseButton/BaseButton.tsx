import React from "react";
import s from "./BaseButton.module.css";

type BaseButtonProps = {
  href: string;
  text: string;
  ariaLabel?: string;
  className?: string;
};

const BaseButton: React.FC<BaseButtonProps> = ({
  href,
  text,
  ariaLabel,
  className,
}) => {
  return (
    <div className={s.btn_container}>
      <a
        href={href}
        className={`${s.link} ${className}`}
        aria-label={ariaLabel}
      >
        {text}
      </a>
    </div>
  );
};

export default BaseButton;
