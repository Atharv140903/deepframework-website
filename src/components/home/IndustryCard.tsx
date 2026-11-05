import type { Industry } from "@/content/home";
import styles from "./IndustryCard.module.css";

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <article className={styles.card} aria-labelledby={`industry-${industry.name.toLowerCase()}`}>
      <p className={styles.name}>{industry.name}</p>
      <h3 id={`industry-${industry.name.toLowerCase()}`} className={styles.title}>
        {industry.title}
      </h3>
      <ul className={styles.points}>
        {industry.points.map((point) => (
          <li key={point} className={styles.point}>
            <span className={styles.bullet} aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p className={styles.worksWith}>{industry.worksWith}</p>
    </article>
  );
}
