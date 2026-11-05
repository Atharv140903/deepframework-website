import { ContentSection } from "@/components/layout/ContentSection";
import { solutions } from "@/content/home";
import styles from "./SolutionGrid.module.css";

export function SolutionGrid() {
  return (
    <ContentSection section={solutions}>
      <div className={styles.grid}>
        {solutions.items.map((item) => (
          <div key={item.title} className={styles.cell}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.body}>{item.body}</p>
            <span className={styles.tags}>{item.tags}</span>
          </div>
        ))}
      </div>
    </ContentSection>
  );
}
