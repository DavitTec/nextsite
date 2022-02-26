// about
import Head from "next/head";
import Image from "next/image";
import styles from "../public/css/Home.module.css";
import myLogo from "../public/DLogo.svg";

const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`
}

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/DavitTec/nextsite/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
            src={myLogo}
            alt="DAVIT Logo"
            width={75}
            height={24} />
          </span>
        </a>
      </footer>

    </div>
  );
}
