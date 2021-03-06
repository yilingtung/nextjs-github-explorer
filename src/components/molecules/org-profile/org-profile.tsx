import React from 'react';

import { device } from '@src/utils/media';
import useMediaQuery from '@src/utils/hooks/use-media-query';

import Label from '@src/components/atoms/label';
import Skeleton, { SkeletonSquare } from '@src/components/atoms/skeleton';

import LinkSvg from '@src/assets/icons/link.svg';

import * as S from './styles';

export interface OrgProfileProps {
  className?: string;
  name: string;
  avtar?: string;
  description?: string;
  githubUrl: string;
  blogUrl?: string | null;
  onClearValue?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export const OrgProfile = React.memo(
  ({
    className,
    name,
    avtar,
    description,
    githubUrl,
    blogUrl,
  }: OrgProfileProps) => {
    return (
      <S.Container className={className}>
        <S.Avatar avtar={avtar} />
        <S.Content>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <S.Name>{name}</S.Name>
          </a>
          {description && <S.Description>{description}</S.Description>}
          {blogUrl && (
            <a href={blogUrl} target="_blank" rel="noreferrer">
              <Label Icon={LinkSvg}>{blogUrl}</Label>
            </a>
          )}
        </S.Content>
      </S.Container>
    );
  }
);

OrgProfile.displayName = 'OrgProfile';

export interface OrgProfileSkeletonProps {
  className?: string;
}

export const OrgProfileSkeleton = React.memo(
  ({ className }: OrgProfileSkeletonProps) => {
    const isTablet = useMediaQuery(device.tablet);
    const isMobile = useMediaQuery(device.mobile);

    return (
      <S.Container className={className}>
        <SkeletonSquare size={isMobile ? 96 : isTablet ? 120 : 160} />
        <S.Content>
          <Skeleton width="50%" size="title" />
          <Skeleton width="100%" />
          <Skeleton width="30%" />
        </S.Content>
      </S.Container>
    );
  }
);

OrgProfileSkeleton.displayName = 'OrgProfileSkeleton';
