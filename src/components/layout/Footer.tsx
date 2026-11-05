import { Container } from "./Container";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <span>© 2026 DeepFramework</span>
        <span>Custom AI solutions for enterprise · India and worldwide</span>
      </Container>
    </footer>
  );
}
