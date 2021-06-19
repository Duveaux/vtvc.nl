import Link from "next/link";
import styles from "./404.module.scss";

export default function Custom404() {
  return (
    <div className={styles.parent}>
      <div className={styles.child}>
        <h1>404</h1>
        <Link href="/">Let's go back</Link>
      </div>
    </div>
  );
}
