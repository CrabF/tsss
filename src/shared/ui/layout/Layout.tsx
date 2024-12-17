import React, { FC } from "react";
import styles from "./Layout.module.css";

export const Layout: FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
