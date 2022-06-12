import Link from 'next/link';
import React from 'react';

import OrganizationInputSearchStories from '@src/components/organisms/organization-input-search';

import * as S from './styles';

export interface HeaderProps {
  className?: string;
}

export const Header = React.memo(({ className }: HeaderProps) => {
  return (
    <S.Container className={className}>
      <S.Wrapper>
        <Link href="/" passHref>
          <a>
            <S.Logo>Github Explorer</S.Logo>
          </a>
        </Link>
        <OrganizationInputSearchStories />
      </S.Wrapper>
    </S.Container>
  );
});

Header.displayName = 'Header';
