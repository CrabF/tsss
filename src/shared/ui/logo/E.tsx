import { SvgProps } from "@src/shared/types/types";
import * as React from "react";
const SvgE: React.FC<SvgProps> = ({ width = 54, height = 53, ...props }) => (
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
      d="M53.855 12.882V0H.045v12.858zm-41.08 27.274.012-9.537h23.385V17.803L0 17.815l.024 35.288L54 53.12V40.156z"
    />
  </svg>
);
export default SvgE;
