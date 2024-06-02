import { useBoundStore } from "../../../zustand";
import styles from "./styles.module.css";
import { useGoogleLogin } from "@react-oauth/google";

export const GoogleLoginButton = () => {
  const { addGoogleCreds } = useBoundStore();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => addGoogleCreds(tokenResponse),
  });

  return (
    <button className={styles.GoogleLoginButton} onClick={() => login()}>
      Sign in with Google 🚀
    </button>
  );
};
