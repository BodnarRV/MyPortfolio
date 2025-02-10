import React from "react";
import { NavLink } from "react-router-dom";
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
  className = "",
  target,
  children,
}) => {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <div className={s.btn_container}>
      {isExternal ? (
        <a
          href={href}
          className={`${s.link} ${className}`}
          aria-label={ariaLabel}
          target={target || "_blank"}
          rel="noopener noreferrer"
        >
          {children}
          {text}
        </a>
      ) : (
        <NavLink
          to={href}
          className={`${s.link} ${className}`}
          aria-label={ariaLabel}
        >
          {children}
          {text}
        </NavLink>
      )}
    </div>
  );
};

export default BaseButton;
