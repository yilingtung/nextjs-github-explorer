import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { dehydrate, QueryClient } from 'react-query';

import { reposKeys } from '@src/utils/query-keys';
import getRepo from '@src/utils/api/get-repo';

import RepoPage from '@src/components/pages/repo-page';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const org = (context.query?.org as string) || '';
  const repoName = (context.query?.repo as string) || '';

  await queryClient.prefetchQuery(reposKeys.detail({ org, repoName }), () =>
    getRepo({
      org,
      repoName,
    })
  );

  // https://github.com/TanStack/query/issues/1458#issuecomment-788447705
  // turn pageParams: [undefined] ->  pageParams: [null]
  const dehydratedState = JSON.parse(JSON.stringify(dehydrate(queryClient)));

  return {
    props: {
      dehydratedState,
      org: context.params?.org,
      repo: context.params?.repo,
    },
  };
};

const Repo: NextPage<{ org: string; repo: string }> = ({ org, repo }) => {
  return (
    <>
      <Head>
        <title>
          Github Repo | {org} / {repo}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RepoPage repoName={repo as string} />
    </>
  );
};

export default Repo;
