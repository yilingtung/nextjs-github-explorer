import type { ParsedUrlQuery } from 'querystring';

import type {
  GithubFilterDirection,
  GithubFilterSort,
  GithubFilterType,
} from '@types';
import { filterTypes, filterSorts, filterDirections } from '@src/utils/filters';

const getValidRepoFilters = (queries: ParsedUrlQuery) => {
  const returnQueries = {
    type:
      queries.type && filterTypes.includes(queries.type as GithubFilterType)
        ? (queries.type as GithubFilterType)
        : undefined,
    sort:
      queries.sort && filterSorts.includes(queries.sort as GithubFilterSort)
        ? (queries.sort as GithubFilterSort)
        : undefined,
    direction:
      queries.direction &&
      filterDirections.includes(queries.direction as GithubFilterDirection)
        ? (queries.direction as GithubFilterDirection)
        : undefined,
  };

  return returnQueries;
};

export default getValidRepoFilters;
