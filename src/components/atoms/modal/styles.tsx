import styled from 'styled-components';

import { device } from '@src/utils/media';
import { colorNetural600 } from '@src/utils/colors';
import { borderRadius, layoutMaxWidth } from '@src/utils/sizes';

export const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 8px;
  border: none;
  background-color: transparent;
  z-index: 1;
  cursor: pointer;
`;

export const Content = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100%;
  max-width: ${layoutMaxWidth}px;
  background-color: white;
  position: relative;
  box-shadow: 0 10px 20px 0 rgba(${colorNetural600}, 0.04);
  border-radius: ${borderRadius}px;
  padding: 24px;

  @media ${device.tablet} {
    padding: 16px;
  }

  @media ${device.mobile} {
    border-radius: 0;
  }
`;

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  padding: 50px 20px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 200;

  @media ${device.mobile} {
    padding: 0;
  }
`;
