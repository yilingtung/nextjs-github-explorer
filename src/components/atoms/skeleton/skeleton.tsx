import React from 'react';

import * as S from './styles';

export interface SkeletonProps {
  className?: string;
  width: number | string;
  size?: 'title' | 'subtitle' | 'paragraph';
}

export const Skeleton = React.memo(
  ({ className, width, size = 'paragraph' }: SkeletonProps) => {
    return <S.Text className={className} width={width} size={size} />;
  }
);

Skeleton.displayName = 'Skeleton';

export interface SkeletonSquareProps {
  className?: string;
  size: number | string;
}

export const SkeletonSquare = React.memo(
  ({ className, size }: SkeletonSquareProps) => {
    return <S.Square className={className} size={size} />;
  }
);

SkeletonSquare.displayName = 'SkeletonSquare';
