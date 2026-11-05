import { ContentSection } from "@/components/layout/ContentSection";
import { principles } from "@/content/home";
import styles from "./Principles.module.css";

export function Principles() {
  return (
    <ContentSection section={principles}>
      <div className={styles.row}>
        {principles.items.map((item) => (
          <div key={item.title} className={styles.item}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.body}>{item.body}</p>
          </div>
        ))}
      </div>
      <p className={styles.security}>{principles.security}</p>
    </ContentSection>
  );
}
