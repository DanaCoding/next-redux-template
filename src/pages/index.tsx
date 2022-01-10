import type { NextPage } from 'next'
import Head from 'next/head'
import { Counter } from '../features/counter/Counter'
import styles from '../../styles/Home.module.css'

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.header}>
        <img src="/vercel.svg" className={styles.logo} alt="logo" />
        <Counter />
      </main>
    </div>
  )
}

export default IndexPage
