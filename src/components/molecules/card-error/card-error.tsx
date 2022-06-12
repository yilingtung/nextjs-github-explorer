import React from 'react';

import * as S from './styles';

export interface CardErrorProps {
  className?: string;
  type?: 'error' | 'notFound';
  message: string;
}

export const CardError = React.memo(
  ({ className, type = 'error', message }: CardErrorProps) => {
    return (
      <S.Container className={className}>
        <S.BannerImg
          src={type === 'notFound' ? '/not-found.png' : '/error.png'}
          alt="error image"
          loading="lazy"
        />
        <S.Text>{message}</S.Text>
      </S.Container>
    );
  }
);

CardError.displayName = 'CardError';
