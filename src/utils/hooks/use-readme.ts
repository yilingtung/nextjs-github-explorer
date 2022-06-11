import { useQuery, UseQueryOptions } from 'react-query';
import type { UseQueryResult } from 'react-query';

import { readmesKeys } from '@src/utils/query-keys';
import getReadme from '@src/utils/api/get-readme';

type Params = Parameters<typeof getReadme>[0];

type ResultData = string | null;

const useReadme = (
  params: Params,
  options?: UseQueryOptions<ResultData, Error, ResultData>
): UseQueryResult<ResultData, Error> => {
  const { org, repoName } = params;
  return useQuery<ResultData, Error, ResultData>(
    readmesKeys.detail({ org, repoName }),
    () => getReadme(params),
    options
  );
};

export default useReadme;
