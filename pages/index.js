import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [change, setChange] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Holi{' '}
          <a href="" style={{ color: 'red' }}>
            Corazón
          </a>
        </h1>

        <p className={styles.description}>
          Solo pasaba aqui para saludarte y decirte que....
        </p>

        <p
          className={styles.description}
          style={{ display: change ? 'block' : 'none' }}
        >
          🎶 Ya cayó la noche, las nenas se bajaron del coche... jaja ok no, Tqm
          💕
        </p>

        <div
          className={styles.card}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setChange(!change);
          }}
        >
          <h3>Click Aqui &rarr;</h3>
          <p></p>
        </div>
      </main>
    </div>
  );
}
