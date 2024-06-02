import { Code } from "../../components";
import { useBoundStore } from "../../zustand";
import styles from './styles.module.css'

export const AccessToken = () => {
  const credentials = useBoundStore((state) => state.credentials);
  return (
    <main>
      <h2 className={styles.title}>Access token</h2>
      <Code code={credentials} />
    </main>
  );
};
