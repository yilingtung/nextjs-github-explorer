import type { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { dehydrate, InfiniteData, QueryClient } from 'react-query';

import type { GithubRepository } from '@types';
import { filterTypes, filterSorts, filterDirections } from '@src/utils/filters';
import getRepos from '@src/utils/api/get-repos';
import getValidRepoFilters from '@src/utils/functions/get-valid-repo-filters';
import useInfiniteRepos from '@src/utils/hooks/use-infinite-repos';
import { reposKeys } from '@src/utils/query-keys';

import SearchSvg from '@src/assets/icons/search.svg';

import styles from '@src/styles/Home.module.css';

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

  const dehydratedState = dehydrate(queryClient);
  // https://github.com/TanStack/query/issues/1528#issuecomment-751445360
  (
    dehydratedState.queries[0].state.data as InfiniteData<GithubRepository[]>
  ).pageParams = [1];

  return {
    props: {
      dehydratedState,
    },
  };
};

const OrgPage: NextPage = () => {
  const router = useRouter();
  const query = router.query;

  const org = query.org as string;
  const filters = useMemo(() => getValidRepoFilters(query), [query]);

  const {
    // status: fetchReposStatus,
    data: reposDataPages,
    // error: fetchReposError,
    // isFetchingNextPage,
    // hasNextPage,
    fetchNextPage,
  } = useInfiniteRepos({
    org,
    type: filters.type,
    sort: filters.sort,
    direction: filters.direction,
  });

  return (
    <div className={styles.container}>
      <SearchSvg />
      {reposDataPages?.pages.map(({ data }) => data.map((d) => d.name))}
      <button onClick={() => fetchNextPage()}>load more</button>
    </div>
  );
};

export default OrgPage;
