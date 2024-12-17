import { SvgProps } from "@src/shared/types/types";
import * as React from "react";
const SvgA: React.FC<SvgProps> = ({ width = 54, height = 53, ...props }) => (
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
      d="M54 53H40.886L26.982 25.893 13.238 53H0l4.841-9.46L26.981 0l22.193 43.54z"
    />
  </svg>
);
export default SvgA;
