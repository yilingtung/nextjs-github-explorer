import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useRecommendSimpleOrganizations from '@src/utils/hooks/use-recommend-simple-organizations';
import CardOrganization, {
  CardOrganizationSkeleton,
} from '@src/components/molecules/card-organization';

import * as S from './styles';

const CardGroup = () => {
  const router = useRouter();
  const queries = router.query;

  const {
    status: fetchRecommendOrgsStatus,
    data: recommendOrgsData,
    error: fetchRecommendOrgsError,
  } = useRecommendSimpleOrganizations({
    nameList: ['vercel', 'figma', 'mswjs', 'facebook', 'Dcard', 'strapi'],
  });

  return (
    <S.CardGroup>
      {fetchRecommendOrgsStatus === 'idle' ||
      fetchRecommendOrgsStatus === 'loading' ? (
        <>
          {new Array(6).fill(0).map((_, index) => (
            <CardOrganizationSkeleton key={index} />
          ))}
        </>
      ) : fetchRecommendOrgsStatus === 'error' ? (
        fetchRecommendOrgsError.message
      ) : (
        recommendOrgsData?.map((orgData) => (
          <Link
            key={orgData.id}
            href={{
              query: {
                ...queries,
                org: orgData.login,
              },
            }}
            passHref
          >
            <a>
              <CardOrganization
                key={orgData.id}
                name={orgData.login}
                thumbnail={orgData.avatar_url}
              />
            </a>
          </Link>
        ))
      )}
    </S.CardGroup>
  );
};

export interface RecommendOrganizationsProps {
  className?: string;
}

export const RecommendOrganizations = React.memo(
  ({ className }: RecommendOrganizationsProps) => {
    return (
      <S.Container className={className}>
        <S.Title>You might be interested</S.Title>
        <CardGroup />
      </S.Container>
    );
  }
);

RecommendOrganizations.displayName = 'RecommendOrganizations';
