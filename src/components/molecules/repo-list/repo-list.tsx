import { useCallback, useRef, memo } from 'react';
import Link from 'next/link';
import {
  VariableSizeList,
  VariableSizeListProps,
  areEqual,
} from 'react-window';
import { ReactWindowScroller } from 'react-window-scroller';

import { CARD_REPO_HEIGHT } from '@src/utils/constants';
import { device } from '@src/utils/media';
import useMediaQuery from '@src/utils/hooks/use-media-query';
import useNextQueryParams from '@src/utils/hooks/use-next-query-params';

import CardRepo, {
  CardRepoSkeleton,
} from '@src/components/molecules/card-repo';
import type { CardRepoProps } from '@src/components/molecules/card-repo';

import * as S from './styles';

export interface RepoListProps {
  listHeight: number;
  listWidth: number;
  data: CardRepoProps[];
  disableFetchMore?: boolean;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  fetchNextPage?: () => void;
}

export const RepoList = memo(
  ({
    listHeight,
    listWidth,
    data,
    // 如果發生 API rate limit 就轉為手動觸發 fetchNextPage
    disableFetchMore = false,
    hasNextPage = false,
    isFetchingNextPage = false,
    fetchNextPage,
  }: RepoListProps) => {
    const queries = useNextQueryParams();
    const itemCount = data.length;
    const isEmpty = data.length <= 0;
    const isInitialLoading = isFetchingNextPage && isEmpty;
    const itemHeight = CARD_REPO_HEIGHT + 24;
    const skeletonCountInScreen = Math.round(listHeight / itemHeight);
    const renderItemCount =
      (hasNextPage && !disableFetchMore) || isInitialLoading
        ? itemCount + skeletonCountInScreen
        : itemCount;
    const isTablet = useMediaQuery(device.tablet);

    // handle infinite scroll
    const observer = useRef<IntersectionObserver | null>(null);
    // will be call every single time when component rerender
    const lastElementRef = useCallback(
      (node: HTMLDivElement | null) => {
        if (disableFetchMore || isFetchingNextPage) {
          return;
        }
        // disconnect observer from previous element before reconnet
        if (observer.current) {
          observer.current.disconnect();
        }
        observer.current = new IntersectionObserver((enties) => {
          if (
            enties[0].isIntersecting &&
            hasNextPage &&
            typeof fetchNextPage === 'function'
          ) {
            fetchNextPage();
          }
        });

        if (node) {
          observer.current.observe(node);
        }
      },
      [disableFetchMore, isFetchingNextPage, hasNextPage, fetchNextPage]
    );

    const getItemSize = () => {
      return itemHeight;
    };

    // eslint-disable-next-line react/display-name
    const renderRepos: VariableSizeListProps['children'] = memo(
      ({ index, style }) => {
        const repo: CardRepoProps | undefined =
          index > itemCount ? undefined : data[index];

        return (
          <S.ItemWrapper
            ref={(node) => {
              if (index === itemCount - 1) {
                lastElementRef(node);
              }
            }}
            style={style}
          >
            {!repo ? (
              <CardRepoSkeleton />
            ) : (
              <Link
                key={index}
                href={{
                  query: { ...queries, org: repo.org, repo: repo.name },
                }}
                as={`/${repo.org}/${repo.name}`}
                scroll={false}
              >
                <a>
                  <CardRepo
                    name={repo.name}
                    description={repo.description}
                    githubUrl={repo.githubUrl}
                    language={repo.language}
                    stars={repo.stars}
                  />
                </a>
              </Link>
            )}
          </S.ItemWrapper>
        );
      },
      areEqual
    );

    return (
      <ReactWindowScroller throttleTime={isTablet ? 300 : undefined}>
        {({ ref, outerRef, style, onScroll }) => (
          <VariableSizeList
            ref={ref}
            outerRef={outerRef}
            style={style}
            height={listHeight}
            width={listWidth}
            itemCount={renderItemCount}
            itemSize={getItemSize}
            onScroll={onScroll}
          >
            {renderRepos}
          </VariableSizeList>
        )}
      </ReactWindowScroller>
    );
  }
);

RepoList.displayName = 'RepoList';
