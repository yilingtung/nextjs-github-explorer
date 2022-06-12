import React from 'react';

import Header from '@src/components/organisms/header';

import * as S from './styles';

export interface SiteLayoutProps {
  children?: React.ReactNode;
}

export const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.Main>{children}</S.Main>
      </S.Content>
    </S.Container>
  );
};

export const getLayout = (page: React.ReactNode) => (
  <SiteLayout>{page}</SiteLayout>
);
