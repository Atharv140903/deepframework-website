import { ContentSection } from "@/components/layout/ContentSection";
import { technology } from "@/content/home";
import styles from "./TechGrid.module.css";

export function TechGrid() {
  return (
    <ContentSection section={technology} band>
      <div className={styles.row}>
        {technology.items.map((item) => (
          <div key={item.title} className={styles.item}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.body}>{item.body}</p>
          </div>
        ))}
      </div>
    </ContentSection>
  );
}
