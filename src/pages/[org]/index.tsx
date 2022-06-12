import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';

import { filterTypes, filterSorts, filterDirections } from '@src/utils/filters';
import getRepos from '@src/utils/api/get-repos';
import getValidRepoFilters from '@src/utils/functions/get-valid-repo-filters';
import { reposKeys } from '@src/utils/query-keys';

import OrganizationPage from '@src/components/pages/organization-page';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const org = context.params?.org as string;
  const repofiltersFromUrl = getValidRepoFilters(context.query);
  const repofilters = {
    type: repofiltersFromUrl.type || filterTypes[0],
    sort: repofiltersFromUrl.sort || filterSorts[0],
    direction: repofiltersFromUrl.direction || filterDirections[0],
  };

  await queryClient.prefetchInfiniteQuery(
    reposKeys.list({
      org,
      ...repofilters,
    }),
    () =>
      getRepos({
        org,
        ...repofilters,
        perPage: 15,
        page: 1,
      }),
    {
      getNextPageParam: (lastPageGroup) => {
        return lastPageGroup.data.length >= 15
          ? lastPageGroup.page + 1
          : undefined;
      },
    }
  );

  // https://github.com/TanStack/query/issues/1458#issuecomment-788447705
  // turn pageParams: [undefined] ->  pageParams: [null]
  const dehydratedState = JSON.parse(JSON.stringify(dehydrate(queryClient)));

  return {
    props: {
      dehydratedState,
    },
  };
};

const OrgPage: NextPage = () => {
  const router = useRouter();
  const { org } = router.query;

  return (
    <>
      <Head>
        <title>Github Repo | {org}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OrganizationPage />
    </>
  );
};

export default OrgPage;
