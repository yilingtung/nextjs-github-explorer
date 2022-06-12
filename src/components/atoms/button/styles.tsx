import styled from 'styled-components';

import type { ButtonProps } from './button';

import { device } from '@src/utils/media';
import { borderRadius } from '@src/utils/sizes';
import {
  colorNetural900,
  colorNetural800,
  colorNetural500,
  colorNetural200,
} from '@src/utils/colors';

export const Container = styled.button<Pick<ButtonProps, 'size'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 24px;
  height: ${({ size }) => (size === 'medium' ? '48px' : '40px')};
  border: none;
  border-radius: ${borderRadius}px;
  color: white;
  background-color: rgb(${colorNetural900});
  transition: background-color 0.3s ease-out;
  cursor: pointer;

  &:active,
  &:hover {
    background-color: rgb(${colorNetural800});
  }

  &[disabled] {
    color: rgb(${colorNetural500});
    background-color: rgb(${colorNetural200});
    cursor: default;
  }

  @media ${device.tablet} {
    padding: 0 16px;
  }
`;
