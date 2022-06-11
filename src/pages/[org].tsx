import type { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import type { UnPromisify } from '@types';
import { filterTypes, filterSorts, filterDirections } from '@src/utils/filters';
import getRepos from '@src/utils/api/get-repos';
import getValidRepoFilters from '@src/utils/functions/get-valid-repo-filters';
import useInfiniteRepos from '@src/utils/hooks/use-infinite-repos';

import styles from '@src/styles/Home.module.css';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const filters = getValidRepoFilters(context.query);

  const reposData = await getRepos({
    org: context.params?.org as string,
    type: filters.type || filterTypes[0],
    sort: filters.sort || filterSorts[0],
    direction: filters.direction || filterDirections[0],
    perPage: 15,
    page: 1,
  });

  return {
    props: { reposData },
  };
};

interface PageProps {
  reposData: UnPromisify<ReturnType<typeof getRepos>>;
}

const OrgPage: NextPage<PageProps> = ({ reposData }) => {
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
  } = useInfiniteRepos(
    {
      org,
      type: filters.type,
      sort: filters.sort,
      direction: filters.direction,
    },
    {
      initialData: {
        pages: [reposData],
        pageParams: [undefined],
      },
    }
  );

  return (
    <div className={styles.container}>
      {reposDataPages?.pages.map(({ data }) => data.map((d) => d.name))}
      <button onClick={() => fetchNextPage()}>load more</button>
    </div>
  );
};

export default OrgPage;
