import { useNavigate } from "react-router-dom";
import { useBoundStore } from "../../../zustand";
import styles from "./styles.module.css";
import { googleLogout } from "@react-oauth/google";

export const GoogleLogoutButton = () => {
  const removeGoogleCreds = useBoundStore((store) => store.removeGoogleCreds);
  const navigate = useNavigate();

  const handelLogout = () => {
    googleLogout();
    removeGoogleCreds();
    navigate('/')
  };

  return (
    <button className={styles.GoogleLogoutButton} onClick={handelLogout}>
      Log out from Google 🌊
    </button>
  );
};
