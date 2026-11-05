import { projectBrief } from "@/content/home";
import styles from "./ProjectBrief.module.css";

/** Example project card beside the hero: what a typical engagement looks like. */
export function ProjectBrief() {
  return (
    <article aria-label="Example project brief" className={styles.card}>
      <div className={styles.top}>
        <b className={styles.badge}>PROJECT BRIEF</b>
        <span className={styles.example}>Example</span>
      </div>
      <div className={styles.body}>
        <dl className={styles.rows}>
          {projectBrief.rows.map((row) => (
            <div key={row.label} className={styles.row}>
              <dt className={styles.label}>{row.label}</dt>
              <dd className={styles.value}>{row.value}</dd>
            </div>
          ))}
        </dl>
        <ol className={styles.timeline}>
          {projectBrief.timeline.map((step) => (
            <li key={step.when} className={styles.step}>
              <span className={step.live ? `${styles.bar} ${styles.live}` : styles.bar} aria-hidden="true" />
              <b className={styles.when}>{step.when}</b>
              <span className={styles.phase}>{step.phase}</span>
            </li>
          ))}
        </ol>
        <p className={styles.outcome}>
          <b>What changed:</b> {projectBrief.outcome}
        </p>
      </div>
      <p className={styles.note}>{projectBrief.note}</p>
    </article>
  );
}
