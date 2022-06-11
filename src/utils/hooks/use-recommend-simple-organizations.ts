import { useQuery, UseQueryOptions } from 'react-query';

import type { SimpleGithubOrgData } from '@types';
import { simpleOrganizationsKeys } from '@src/utils/query-keys';
import getRecommendSimpleOrganizations from '@src/utils/api/get-recommend-simple-organizations';

type Params = Parameters<typeof getRecommendSimpleOrganizations>[0];

const useRecommendSimpleOrganizations = (
  params: Params,
  options?: UseQueryOptions<SimpleGithubOrgData[], Error, SimpleGithubOrgData[]>
) => {
  const { nameList } = params;

  return useQuery<SimpleGithubOrgData[], Error, SimpleGithubOrgData[]>(
    simpleOrganizationsKeys.recommendList(nameList),
    () => getRecommendSimpleOrganizations(params),
    options
  );
};

export default useRecommendSimpleOrganizations;
