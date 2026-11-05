import styles from "./SectionHead.module.css";

type SectionHeadProps = {
  id: string;
  title: string;
  intro: string;
  /** Use the muted on-violet colour for the intro (dark band). */
  onDark?: boolean;
};

/**
 * The heading row every content section opens with: the h2 beside its intro,
 * wrapping to a stack on narrow screens. The h2 id lets the section use
 * aria-labelledby.
 */
export function SectionHead({ id, title, intro, onDark = false }: SectionHeadProps) {
  return (
    <div className={styles.head}>
      <h2 id={`${id}-title`} className={styles.title}>
        {title}
      </h2>
      <p className={onDark ? `${styles.intro} ${styles.introOnDark}` : styles.intro}>{intro}</p>
    </div>
  );
}
