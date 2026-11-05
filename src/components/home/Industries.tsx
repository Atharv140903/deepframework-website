import { ContentSection } from "@/components/layout/ContentSection";
import { industries } from "@/content/home";
import { IndustryCard } from "./IndustryCard";
import styles from "./Industries.module.css";

export function Industries() {
  return (
    <ContentSection section={industries}>
      <div className={styles.body}>
        <div className={styles.cards}>
          {industries.featured.map((industry) => (
            <IndustryCard key={industry.name} industry={industry} />
          ))}
        </div>
        <div className={styles.also}>
          <span className={styles.alsoLabel}>Also</span>
          {industries.also.map((name) => (
            <span key={name} className={styles.chip}>
              {name}
            </span>
          ))}
          <p className={styles.note}>{industries.alsoNote}</p>
        </div>
      </div>
    </ContentSection>
  );
}
