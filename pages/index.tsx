import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Test Page</title>
        <meta name="description" content="A simple Next.js test page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js!
        </h1>

        <div className={styles.card}>
          <p>Counter: {count}</p>
          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>
        </div>
      </main>
    </div>
  )
} 