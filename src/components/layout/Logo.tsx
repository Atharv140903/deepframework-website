import Image from "next/image";
import styles from "./Logo.module.css";

type LogoProps = { variant: "colour" | "white" };

/**
 * Brand mark from the design kit plus the live "DeepFramework" wordmark.
 * Colour on light backgrounds, white outline on dark (kit rule).
 * The mark is decorative here; the surrounding link carries the name.
 */
export function Logo({ variant }: LogoProps) {
  return (
    <span className={styles.logo}>
      <Image src={`/logo-mark-${variant}.svg`} alt="" width={32} height={32} priority />
      <span>
        <b className={styles.deep}>Deep</b>
        <span className={styles.framework}>Framework</span>
      </span>
    </span>
  );
}
