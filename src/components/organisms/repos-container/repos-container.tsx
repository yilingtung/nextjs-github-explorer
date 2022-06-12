import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import AutoSizer from 'react-virtualized-auto-sizer';

import getValidRepoFilters from '@src/utils/functions/get-valid-repo-filters';
import useInfiniteRepos from '@src/utils/hooks/use-infinite-repos';

import type { CardRepoProps } from '@src/components/molecules/card-repo';
import RepoList from '@src/components/molecules/repo-list';
import RepoListGrid from '@src/components/molecules/repo-list-grid';
import HintText from '@src/components/atoms/hint-text';
import Button from '@src/components/atoms/button';

import * as S from './styles';

export interface ReposContainerProps {
  className?: string;
  isGrid?: boolean;
}

export const ReposContainer = React.memo(
  ({ className, isGrid = false }: ReposContainerProps) => {
    const router = useRouter();
    const { org } = router.query;
    const filters = useMemo(
      () => getValidRepoFilters(router.query),
      [router.query]
    );

    const {
      status: fetchReposStatus,
      data: reposDataPages,
      error: fetchReposError,
      isFetchingNextPage,
      hasNextPage,
      fetchNextPage,
    } = useInfiniteRepos(
      {
        org: org as string,
        type: filters.type,
        sort: filters.sort,
        direction: filters.direction,
      },
      { enabled: !!org && router.isReady }
    );

    const formattedRepos = useMemo(() => {
      if (!reposDataPages) return undefined;
      const flatArray = ([] as CardRepoProps[]).concat(
        ...reposDataPages.pages.map((page) =>
          page.data.map((d) => ({
            id: d.id,
            name: d.name,
            org: org as string,
            description: d.description,
            stars: d.stargazers_count,
            language: d.language,
            githubUrl: d.html_url,
          }))
        )
      );
      return flatArray;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reposDataPages]);

    // const handleClickRepo = useCallback(
    //   (repoName: string) => {
    //     router.push(
    //       { pathname: `/${org}/${repoName}` }
    //       //  { state: { modal: true } }
    //     );
    //   },
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    //   [org]
    // );

    return (
      <S.Container className={className}>
        <AutoSizer disableHeight style={{ width: '100%' }}>
          {({ width }) =>
            isGrid ? (
              <RepoListGrid
                listHeight={window.innerHeight}
                listWidth={width}
                data={formattedRepos || []}
                disableFetchMore={fetchReposStatus === 'error'}
                hasNextPage={hasNextPage}
                isFetchingNextPage={isFetchingNextPage}
                fetchNextPage={() => {
                  fetchNextPage();
                }}
                // onClickRepo={handleClickRepo}
              />
            ) : (
              <RepoList
                listHeight={window.innerHeight}
                listWidth={600}
                data={formattedRepos || []}
                disableFetchMore={fetchReposStatus === 'error'}
                hasNextPage={hasNextPage}
                isFetchingNextPage={isFetchingNextPage}
                fetchNextPage={() => {
                  fetchNextPage();
                }}
                // onClickRepo={handleClickRepo}
              />
            )
          }
        </AutoSizer>
        {fetchReposStatus === 'error' && (
          <S.ListFooter>
            <Button
              onClick={() => {
                fetchNextPage();
              }}
              size="small"
            >
              Load More
            </Button>
            {fetchReposStatus === 'error' && (
              <HintText>{fetchReposError.message}</HintText>
            )}
          </S.ListFooter>
        )}
        {fetchReposStatus === 'success' && !hasNextPage && (
          <HintText align="center">No More Repositories.</HintText>
        )}
      </S.Container>
    );
  }
);

ReposContainer.displayName = 'ReposContainer';
