import type { UseInfiniteQueryOptions } from 'react-query';
import { useInfiniteQuery } from 'react-query';
import type {
  GithubFilterDirection,
  GithubFilterSort,
  GithubFilterType,
  GithubRepository,
} from '@types';
import { filterDirections, filterSorts, filterTypes } from '@src/utils/filters';
import { reposKeys } from '@src/utils/query-keys';
import getRepos from '@src/utils/api/get-repos';

type Params = {
  org: string;
  type: GithubFilterType;
  sort: GithubFilterSort;
  direction: GithubFilterDirection;
  page: number;
  perPage: number;
};

type ResultData = {
  data: GithubRepository[];
  page: number;
  nextPage: number | undefined;
};

const useInfiniteRepos = (
  params: Pick<Params, 'org'> & Partial<Omit<Params, 'org' | 'page'>>,
  options?: UseInfiniteQueryOptions<ResultData, Error, ResultData>
) => {
  const {
    org,
    type = filterTypes[0],
    sort = filterSorts[0],
    direction = filterDirections[0],
    perPage = 15,
  } = params;
  return useInfiniteQuery<ResultData, Error>(
    reposKeys.list({ org, type, sort, direction }),
    ({ pageParam }) =>
      getRepos({
        org,
        type,
        sort,
        direction,
        perPage,
        page: pageParam,
      }),
    {
      getNextPageParam: (lastPageGroup) => {
        return lastPageGroup.data.length >= perPage
          ? lastPageGroup.page + 1
          : undefined;
      },
      ...options,
    }
  );
};

export default useInfiniteRepos;
