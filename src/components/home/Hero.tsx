import { Container } from "@/components/layout/Container";
import { hero } from "@/content/home";
import { ProjectBrief } from "./ProjectBrief";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <Container className={styles.inner}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 id="hero-title" className={styles.title}>
            {hero.titleLead}
            <span className={styles.accent}>{hero.titleAccent}</span>
          </h1>
          <p className={styles.lead}>{hero.lead}</p>
          <div className={styles.actions}>
            <a href={hero.cta.href} className={styles.primary}>
              {hero.cta.label}
            </a>
          </div>
          <p className={styles.industries}>{hero.industries}</p>
        </div>
        <ProjectBrief />
      </Container>
    </section>
  );
}
