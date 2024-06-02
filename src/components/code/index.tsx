import { CodeBlock } from "react-code-block";
import styles from "./styles.module.css";
import { useCopyToClipboard } from "react-use";
import { themes } from "prism-react-renderer";
import { toJson } from "../../utils";

type Prop = {
  code: any;
};

export const Code = ({ code }: Prop) => {
  const [allCodeState, copyToClipboardAll] = useCopyToClipboard();
  const [tokenState, copyToClipboardToken] = useCopyToClipboard();

  return (
    <section className={styles.codeBlock}>
      <CodeBlock code={toJson(code)} theme={themes.vsLight} language="json">
        <CodeBlock.Code className={styles.bg}>
          <CodeBlock.LineContent>
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </CodeBlock.Code>
      </CodeBlock>

      <div className={styles.buttons}>
        <button
          className={styles.copyButton}
          onClick={() => copyToClipboardAll(toJson(code))}
        >
          {allCodeState.value ? "Copied!" : "Copy code"}
        </button>
        <button
          className={styles.copyButton}
          onClick={() => copyToClipboardToken(toJson(code.access_token))}
        >
          {tokenState.value ? "Token copied!" : "Copy only a token"}
        </button>
      </div>
    </section>
  );
};
