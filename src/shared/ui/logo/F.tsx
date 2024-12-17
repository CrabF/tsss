import { SvgProps } from "@src/shared/types/types";
import * as React from "react";
const SvgF: React.FC<SvgProps> = ({ width = 54, height = 53, ...props }) => (
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
      d="M0 0v12.761l54 .024V0zm27.136 17.662H0v9.406h.03v25.735h12.448V30.549h14.658z"
    />
  </svg>
);
export default SvgF;
