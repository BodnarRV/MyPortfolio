import React from "react";
import icons from "../../assets/icons.svg";

type IconProps = {
  id: string;
  className?: string;
};

const IconSvg: React.FC<IconProps> = ({ className, id }) => {
  return (
    <svg className={className} aria-hidden="true">
      <use xlinkHref={`${icons}#${id}`} />
    </svg>
  );
};

export default IconSvg;
