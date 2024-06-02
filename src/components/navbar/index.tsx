import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { GoogleLoginButton, GoogleLogoutButton } from "../google";
import { useBoundStore } from "../../zustand";
import { MouseEvent } from "react";
import classNames from 'classnames';

export const Navbar = () => {
  const { credentials } = useBoundStore((state) => state);

  const isDisable = (event: MouseEvent) => {
    if (!credentials) {
      event.preventDefault();
    }
  };
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <NavLink className={styles.listItem} to="/">
          <li>Home</li>
        </NavLink>

        <NavLink
          onClick={isDisable}
          className= {classNames(credentials ? styles.listItem : styles.disableItem) }
          to="/access-token"
        >
          <li>Access Token</li>
        </NavLink>

        <div className={styles.googleButton}>
          {credentials ? <GoogleLogoutButton /> : <GoogleLoginButton />}
        </div>
      </ul>
    </nav>
  );
};
