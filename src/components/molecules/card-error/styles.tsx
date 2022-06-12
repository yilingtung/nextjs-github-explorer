import styled from 'styled-components';

import { fontSizeS } from '@src/utils/sizes';

export const Text = styled.div`
  font-size: ${fontSizeS}px;
  margin-top: 20px;
`;

export const BannerImg = styled.img`
  width: 100%;
  max-width: 200px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  width: 100%;
`;
