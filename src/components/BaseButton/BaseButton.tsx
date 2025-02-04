import React from "react";
import s from "./BaseButton.module.css";

type BaseButtonProps = {
  href: string;
  text: string;
  ariaLabel?: string;
  className?: string;
  target?: string;
};

const BaseButton: React.FC<BaseButtonProps> = ({
  href,
  text,
  ariaLabel,
  className,
  target,
}) => {
  return (
    <div className={s.btn_container}>
      <a
        href={href}
        className={`${s.link} ${className}`}
        aria-label={ariaLabel}
        target={target}
      >
        {text}
      </a>
    </div>
  );
};

export default BaseButton;
