import { useQuery, UseQueryOptions } from 'react-query';
import type { UseQueryResult } from 'react-query';

import type { GithubRepository } from '@types';
import { reposKeys } from '@src/utils/query-keys';
import getRepo from '@src/utils/api/get-repo';

type Params = Parameters<typeof getRepo>[0];

const useRepo = (
  params: Params,
  options?: UseQueryOptions<GithubRepository, Error, GithubRepository>
): UseQueryResult<GithubRepository, Error> => {
  const { org, repoName } = params;
  return useQuery<GithubRepository, Error, GithubRepository>(
    reposKeys.detail({ org, repoName }),
    () => getRepo(params),
    options
  );
};

export default useRepo;
