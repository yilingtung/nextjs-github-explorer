import styled from 'styled-components';

import { colorNetural600, colorNetural900 } from '@src/utils/colors';
import { device } from '@src/utils/media';
import { fontSizeM, fontSizeS, layoutMaxWidth } from '@src/utils/sizes';

export const Logo = styled.div`
  margin: 0;
  color: rgb(${colorNetural900});
  font-weight: 900;
  font-size: ${fontSizeM}px;

  @media ${device.tablet} {
    font-size: ${fontSizeS}px;
  }

  @media ${device.mobile} {
    width: 72px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${layoutMaxWidth}px;

  > :not(:last-child) {
    margin-right: 16px;
  }

  > a {
    text-decoration: none;
  }
`;

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  padding: 0 12px;
  background-color: white;
  box-shadow: 0 10px 20px 0 rgba(${colorNetural600}, 0.04);
  z-index: 100;
`;
