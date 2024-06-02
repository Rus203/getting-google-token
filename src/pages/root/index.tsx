import { Navbar } from "../../components";
import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className={styles.root}>
      <Navbar />
      <Outlet />
    </div>
  );
};
