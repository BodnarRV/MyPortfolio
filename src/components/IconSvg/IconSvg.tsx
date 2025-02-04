import React from "react";

type IconProps = {
  id: string;
  width?: number;
  height?: number;
  color?: string;
  className: string;
};

const IconSvg: React.FC<IconProps> = ({
  className,
  id,
  width,
  height,
  color,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={color}
      aria-hidden="true"
    >
      <use xlinkHref={`${import.meta.env.BASE_URL}assets/icons.svg#${id}`} />
    </svg>
  );
};

export default IconSvg;
