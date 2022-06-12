import React, { useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';

import useDebounce from '@src/utils/hooks/use-debounce';
import useSimpleOrganizations from '@src/utils/hooks/use-simple-organizations';
import useNextQueryParams from '@src/utils/hooks/use-next-query-params';

import SelectList from '@src/components/atoms/select-list';
import SelectOption from '@src/components/atoms/select-option';
import HintText from '@src/components/atoms/hint-text';
import InputSearch from '@src/components/molecules/input-search';

import * as S from './styles';

const INPUT_DEBOUNCE = 500;

export interface OrganizationInputSearchProps {
  className?: string;
}

export const OrganizationInputSearch = ({
  className,
}: OrganizationInputSearchProps) => {
  const router = useRouter();
  const queries = useNextQueryParams();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState('');
  const debounceInputValue = useDebounce(inputValue, INPUT_DEBOUNCE);

  const {
    status: fetchSimpleOrganizationsStatus,
    data: simpleOrganizationsData,
    error: fetchSimpleOrganizationsError,
  } = useSimpleOrganizations(
    { name: debounceInputValue as string },
    { enabled: !!debounceInputValue }
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    []
  );

  const handleInputClear = useCallback(() => {
    setInputValue('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, INPUT_DEBOUNCE + 100);
  }, []);

  const navigateToOrganization = useCallback(
    (name: string) => {
      const { org, ...rest } = {
        ...queries,
        org: name,
      };
      router.push({
        pathname: '/',
        query: {
          ...rest,
          ...(!!name && { org }),
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [queries]
  );

  const handleSumbit = useCallback(() => {
    navigateToOrganization(inputValue);
  }, [navigateToOrganization, inputValue]);

  const handleSelectOption = useCallback(
    (
      name: string,
      _setSuggestionOpen: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      _setSuggestionOpen(false);
      setInputValue(name);
      navigateToOrganization(name);
    },
    [navigateToOrganization]
  );

  const renderSuggestions = ({
    setSuggestionOpen,
  }: {
    setSuggestionOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    if (debounceInputValue === '' || inputValue === '') return undefined;

    if (fetchSimpleOrganizationsStatus === 'loading') {
      return (
        <SelectList>
          <SelectOption>
            <HintText>Loading...</HintText>
          </SelectOption>
        </SelectList>
      );
    }

    if (fetchSimpleOrganizationsStatus === 'error') {
      return (
        <SelectList>
          <SelectOption>
            <HintText>{fetchSimpleOrganizationsError.message}</HintText>
          </SelectOption>
        </SelectList>
      );
    }

    if (simpleOrganizationsData && simpleOrganizationsData.length <= 0) {
      return (
        <SelectList>
          <SelectOption>
            <HintText>Empty result.</HintText>
          </SelectOption>
        </SelectList>
      );
    }

    return (
      <SelectList>
        {simpleOrganizationsData?.map((simpleOrganization) => (
          <S.ItemContainer
            key={simpleOrganization.id}
            onClick={() =>
              handleSelectOption(simpleOrganization.login, setSuggestionOpen)
            }
            role="button"
            tabIndex={0}
          >
            <S.Thumbnail thumbnail={simpleOrganization.avatar_url} />
            <S.Name>{simpleOrganization.login}</S.Name>
          </S.ItemContainer>
        ))}
      </SelectList>
    );
  };

  return (
    <InputSearch
      className={className}
      ref={inputRef}
      value={inputValue}
      placeholder="Search Organization"
      onChange={handleInputChange}
      onClearValue={handleInputClear}
      onSubmit={handleSumbit}
      renderSuggestions={renderSuggestions}
    />
  );
};
