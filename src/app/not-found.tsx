import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main>
      <Container className={styles.inner}>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.body}>The page you are looking for does not exist or has moved.</p>
        <Link href="/" className={styles.link}>
          Back to the home page
        </Link>
      </Container>
    </main>
  );
}
