import styles from "./Container.module.css";

type ContainerProps = { children: React.ReactNode; className?: string };

/** Centres content at the site's max width with the responsive side gutter. */
export function Container({ children, className }: ContainerProps) {
  return <div className={className ? `${styles.container} ${className}` : styles.container}>{children}</div>;
}
