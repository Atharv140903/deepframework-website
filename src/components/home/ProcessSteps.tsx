import { ContentSection } from "@/components/layout/ContentSection";
import { processSteps } from "@/content/home";
import styles from "./ProcessSteps.module.css";

export function ProcessSteps() {
  return (
    <ContentSection section={processSteps}>
      <ol className={styles.steps}>
        {processSteps.steps.map((step) => (
          <li key={step.step} className={styles.step}>
            <span className={styles.label}>{step.step}</span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.body}>{step.body}</p>
            <span className={styles.duration}>{step.duration}</span>
          </li>
        ))}
      </ol>
    </ContentSection>
  );
}
