import { SvgProps } from "@src/shared/types/types";
import * as React from "react";
const SvgD: React.FC<SvgProps> = ({ width = 54, height = 53, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 54 53"
    {...props}
  >
    <path
      fill="#B70F33"
      d="M53.986 24.816c.291 9.577-4.01 20.2-14.4 25.505a27 27 0 0 1-12.364 2.845H0v-35.29l12.63.054v22.25h15.483c10.872-.428 12.506-8.746 12.714-13.47.16-3.534-1.913-9.748-7.961-12.345a18.7 18.7 0 0 0-7.379-1.431H0V0h27.703c16.492.677 25.92 13.213 26.283 24.816"
    />
  </svg>
);
export default SvgD;
