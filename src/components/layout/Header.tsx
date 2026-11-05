import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./Container";
import { Logo } from "./Logo";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link href="/" aria-label="DeepFramework home" className={styles.home}>
          <Logo variant="colour" />
        </Link>
        <nav aria-label="Main" className={styles.nav}>
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
