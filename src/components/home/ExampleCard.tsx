import type { Example } from "@/content/home";
import styles from "./ExampleCard.module.css";

export function ExampleCard({ example }: { example: Example }) {
  return (
    <article className={styles.card}>
      <p className={styles.industry}>{example.industry}</p>
      <h3 className={styles.title}>{example.title}</h3>
      <p className={styles.body}>{example.body}</p>
    </article>
  );
}
