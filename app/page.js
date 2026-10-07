import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Csak neked Robi!</h1>
      <figure className={styles.figure}>
        <Image
          className={styles.image}
          src="/gorilla-upscaled.jpg"
          alt="Gorilla, aki a középső ujját mutatja"
          width={864}
          height={1152}
          priority
        />
      </figure>
    </main>
  );
}
