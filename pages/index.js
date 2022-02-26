import Head from "next/head";
import Image from "next/image";
import styles from "../public/css/Home.module.css";
import favIcon from "../public/favicon.ico";
import myLogo from "../public/DLogo.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Davit-NextSite</a>
</h1>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        <h2>Deploy &rarr;</h2>
        <span className={styles.version}>
              Version 0.0.1
            </span>
    </p>
        <div className={styles.grid}>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about developing a website with ease</p>
          </a>

          <a
            href="https://github.com/DavitTec/nextsite"
            className={styles.card}
          >
            <h2>Install &rarr;</h2>
            <p>Instantly deploy your next website site with ease.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/DavitTec/nextsite/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src={myLogo} alt="DAVIT Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
