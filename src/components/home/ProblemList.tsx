import { ContentSection } from "@/components/layout/ContentSection";
import { problem } from "@/content/home";
import styles from "./ProblemList.module.css";

export function ProblemList() {
  return (
    <ContentSection section={problem}>
      <div className={styles.row}>
        {problem.items.map((item) => (
          <div key={item.number} className={styles.item}>
            <span className={styles.number}>{item.number}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.body}>{item.body}</p>
          </div>
        ))}
      </div>
    </ContentSection>
  );
}
