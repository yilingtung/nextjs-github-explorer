import { device } from '@src/utils/media';
import useMediaQuery from '@src/utils/hooks/use-media-query';

import * as S from './styles';

export interface HomePageProps {
  className?: string;
}

export const HomePage = ({ className }: HomePageProps) => {
  const isTablet = useMediaQuery(device.tablet);

  return (
    <S.Container className={className}>
      <S.BannerContainer>
        <S.BannerImg src="/banner.png" alt="banner" />
        {!isTablet && <S.BannerInput />}
      </S.BannerContainer>
      <S.RecommendOrganizations />
    </S.Container>
  );
};
