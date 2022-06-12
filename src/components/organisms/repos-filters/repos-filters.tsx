import React from 'react';
import { useRouter } from 'next/router';

import { filterTypes, filterSorts, filterDirections } from '@src/utils/filters';
import capitalizeFirstLetter from '@src/utils/functions/capitalize-first-letter';

import Dropdown from '@src/components/molecules/dropdown';

import * as S from './styles';

const typeOptions = filterTypes.map((type) => ({
  label: capitalizeFirstLetter(type),
  value: type,
}));

const sortOptions = filterSorts.map((type) => ({
  label: capitalizeFirstLetter(type),
  value: type,
}));

const directionOptions = filterDirections.map((type) => ({
  label: capitalizeFirstLetter(type),
  value: type,
}));

export interface ReposFiltersProps {
  className?: string;
}

export const ReposFilters = React.memo(
  React.forwardRef<HTMLDivElement, ReposFiltersProps>(({ className }, ref) => {
    const router = useRouter();

    return (
      <S.Container ref={ref} className={className}>
        <Dropdown
          title="Select Type"
          placeholder="Select Type"
          list={typeOptions}
          value={router.query.type || filterTypes[0]}
          onChangeValue={(d) => {
            const { type, ...rest } = {
              ...router.query,
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
          value={router.query.sort || filterSorts[0]}
          onChangeValue={(d) => {
            const { sort, ...rest } = {
              ...router.query,
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
          value={router.query.direction || filterDirections[0]}
          onChangeValue={(d) => {
            const { direction, ...rest } = {
              ...router.query,
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
