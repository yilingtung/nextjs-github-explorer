import React from 'react';
import { useRouter } from 'next/router';

import { filterTypes, filterSorts, filterDirections } from '@src/utils/filters';
import getCapitalizeFilterOptions from '@src/utils/functions/get-capitalize-filter-options';

import Dropdown from '@src/components/molecules/dropdown';

import * as S from './styles';

const typeOptions = getCapitalizeFilterOptions(filterTypes);
const sortOptions = getCapitalizeFilterOptions(filterSorts);
const directionOptions = getCapitalizeFilterOptions(filterDirections);

export interface ReposFiltersProps {
  className?: string;
}

export const ReposFilters = React.memo(
  React.forwardRef<HTMLDivElement, ReposFiltersProps>(({ className }, ref) => {
    const router = useRouter();
    const queries = router.query;

    return (
      <S.Container ref={ref} className={className}>
        <Dropdown
          title="Select Type"
          placeholder="Select Type"
          list={typeOptions}
          value={queries.type || filterTypes[0]}
          onChangeValue={(d) => {
            const { type, ...rest } = {
              ...queries,
              type: d,
            };
            router.push({
              query: {
                ...rest,
                ...(d !== filterTypes[0] && { type }),
              },
            });
          }}
        />
        <Dropdown
          title="Select Order"
          placeholder="Select Order"
          list={sortOptions}
          value={queries.sort || filterSorts[0]}
          onChangeValue={(d) => {
            const { sort, ...rest } = {
              ...queries,
              sort: d,
            };
            router.push({
              query: {
                ...rest,
                ...(d !== filterSorts[0] && { sort }),
              },
            });
          }}
        />
        <Dropdown
          title="Select Direction"
          placeholder="Select Direction"
          list={directionOptions}
          value={queries.direction || filterDirections[0]}
          onChangeValue={(d) => {
            const { direction, ...rest } = {
              ...queries,
              direction: d,
            };
            router.push({
              query: {
                ...rest,
                ...(d !== filterDirections[0] && { direction }),
              },
            });
          }}
        />
      </S.Container>
    );
  })
);

ReposFilters.displayName = 'ReposFilters';
