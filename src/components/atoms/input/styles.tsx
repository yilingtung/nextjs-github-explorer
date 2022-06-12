import styled from 'styled-components';

import { device } from '@src/utils/media';
import { borderRadius, fontSizeS } from '@src/utils/sizes';
import {
  colorNetural200,
  colorNetural500,
  colorNetural600,
} from '@src/utils/colors';

export const Input = styled.input`
  height: 48px;
  width: 100%;
  padding-left: 22px;
  padding-right: 40px;
  font-size: ${fontSizeS}px;
  border: none;
  color: rgb(${colorNetural600});
  background-color: rgb(${colorNetural200});
  transition: background-color 0.3s ease-out;

  ::placeholder {
    color: rgb(${colorNetural500});
    opacity: 0.6;
    font-size: ${fontSizeS}px;
  }

  :focus {
    outline: none;
    background-color: rgba(${colorNetural200}, 0.6);
  }

  @media ${device.tablet} {
    padding-left: 12px;
    padding-right: 32px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: ${borderRadius}px;
  overflow: hidden;

  :hover {
    ${Input} {
      background-color: rgba(${colorNetural200}, 0.6);
    }
  }
`;

export const CloseBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border: none;
  background-color: transparent;
  right: 0;
  height: 100%;
  width: 40px;
  opacity: 0.6;
  cursor: pointer;

  :hover {
    opacity: 1;
  }

  > svg {
    width: 16px;
    height: 16px;

    > path {
      fill: rgb(${colorNetural600});
    }
  }

  @media ${device.tablet} {
    width: 32px;
  }
`;
