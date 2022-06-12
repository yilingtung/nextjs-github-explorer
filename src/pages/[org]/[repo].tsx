import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import RepoPage from '@src/components/pages/repo-page';

const Repo: NextPage = () => {
  const router = useRouter();
  const { repoName, ownerName } = router.query;

  return (
    <>
      <Head>
        <title>
          Github Repo | {ownerName} / {repoName}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RepoPage repoName={repoName as string} />
    </>
  );
};

export default Repo;
