import React from "react";
import s from "./BaseButton.module.css";

type BaseButtonProps = {
  href: string;
  text: string;
  ariaLabel?: string;
  className?: string;
  target?: string;
  children?: React.ReactNode;
};

const BaseButton: React.FC<BaseButtonProps> = ({
  href,
  text,
  ariaLabel,
  className,
  target,
  children,
}) => {
  return (
    <div className={s.btn_container}>
      <a
        href={href}
        className={`${s.link} ${className}`}
        aria-label={ariaLabel}
        target={target}
      >
        {children}
        {text}
      </a>
    </div>
  );
};

export default BaseButton;
