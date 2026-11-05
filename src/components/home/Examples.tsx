import { ContentSection } from "@/components/layout/ContentSection";
import { examples } from "@/content/home";
import { ExampleCard } from "./ExampleCard";
import styles from "./Examples.module.css";

export function Examples() {
  return (
    <ContentSection section={examples}>
      <div className={styles.row}>
        {examples.items.map((example) => (
          <ExampleCard key={example.title} example={example} />
        ))}
      </div>
    </ContentSection>
  );
}
