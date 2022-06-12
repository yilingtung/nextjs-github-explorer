import styled from 'styled-components';

import { device } from '@src/utils/media';
import { fontSizeM } from '@src/utils/sizes';

export const Title = styled.div`
  font-size: ${fontSizeM}px;
  font-weight: 900;
  margin-bottom: 24px;
`;

export const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    text-decoration: none;
    width: 33%;

    @media ${device.tablet} {
      width: 50%;
    }

    @media ${device.mobile} {
      width: 100%;
    }
  }
`;

export const Container = styled.div`
  max-width: 800px;
  padding: 40px 0;
  margin: 0 auto;
`;
