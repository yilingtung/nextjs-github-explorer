import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const DynamicHomePage = dynamic(
  () => import('@src/components/pages/home-page')
);
const DynamicOrganizationPage = dynamic(
  () => import('@src/components/pages/organization-page')
);

const Home: NextPage = () => {
  const router = useRouter();
  const { org } = router.query;

  return (
    <>
      <Head>
        <title>Github Repo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {router.isReady && (
        <>{org ? <DynamicOrganizationPage /> : <DynamicHomePage />}</>
      )}
    </>
  );
};

export default Home;
