import type { NextPage } from 'next';
import Head from 'next/head';

import Form from 'components/Form';

import styles from 'styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dwelling - Homebuying for Humans.</title>
        <meta
          name="description"
          content="A new, modern and easy way to buy a home. Digital-first and wildly transparent."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Form />
      </main>
    </>
  );
};

export default Home;
