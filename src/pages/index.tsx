import type { NextPage } from 'next';
import Head from 'next/head';

import HomePage from '@src/components/pages/home-page';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Github Repo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
