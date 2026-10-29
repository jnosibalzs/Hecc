import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Csak neked Peti!</h1>
      <figure className={styles.figure}>
        <Image
          className={styles.image}
          src="/gold-vault.jpg"
          alt="Pizsamás férfi alszik egy aranyrudakkal teli széfben, fejét aranyrudakon pihentetve"
          width={819}
          height={581}
          priority
        />
      </figure>
    </main>
  );
}
