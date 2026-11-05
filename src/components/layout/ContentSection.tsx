import type { Section } from "@/content/home";
import { Container } from "./Container";
import { SectionHead } from "./SectionHead";
import styles from "./ContentSection.module.css";

type ContentSectionProps = {
  section: Section;
  /** Dark violet background (the Technology band). */
  band?: boolean;
  children: React.ReactNode;
};

/**
 * The outer shell every home content section shares: top divider, padded
 * container, and the SectionHead. The section is labelled by its h2.
 */
export function ContentSection({ section, band = false, children }: ContentSectionProps) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className={band ? `${styles.section} ${styles.band}` : styles.section}
    >
      <Container className={styles.inner}>
        <SectionHead id={section.id} title={section.title} intro={section.intro} onDark={band} />
        {children}
      </Container>
    </section>
  );
}
