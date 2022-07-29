import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation('nav')
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to {t('home')}, USER</h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Status 1 &rarr;</h2>
            <p>Page height:</p>
            <p>Page width:</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Status 2 &rarr;</h2>
            <p>Mouse position:</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Status 3 &rarr;</h2>
            <p>Current date:</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Status 4 &rarr;</h2>
            <p>Your IP:</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  // this is to ensure server return the right content based on language in the query string.
  // updateLanguage(ctx)
  return { props: {} }
}
