import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Csak neked Gábor!</h1>
      <figure className={styles.figure}>
        <Image
          className={styles.image}
          src="/gabor-vault.jpg"
          alt="Pizsamás férfi alszik egy aranyrudakkal teli széfben, fejét aranyrudakon pihentetve"
          width={1024}
          height={726}
          priority
        />
      </figure>
    </main>
  );
}
