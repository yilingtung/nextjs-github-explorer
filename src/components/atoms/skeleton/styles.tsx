import styled, { keyframes } from 'styled-components';

import type {
  SkeletonProps,
  SkeletonSquareProps,
} from '@src/components/atoms/skeleton';

import { borderRadius } from '@src/utils/sizes';
import { colorNetural300 } from '@src/utils/colors';

const fadeIn = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

export const Text = styled.div<Pick<SkeletonProps, 'size' | 'width'>>`
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}px`)};
  height: ${({ size = 'paragraph' }) =>
    ({ title: '32px', subtitle: '23px', paragraph: '24px' }[size])};
  border-radius: ${borderRadius}px;
  background-color: rgb(${colorNetural300});
  animation: 2s ${fadeIn} ease-out infinite;
`;

export const Square = styled.div<Pick<SkeletonSquareProps, 'size'>>`
  width: ${({ size }) => (typeof size === 'string' ? size : `${size}px`)};
  height: ${({ size }) => (typeof size === 'string' ? size : `${size}px`)};
  border-radius: ${borderRadius}px;
  background-color: rgb(${colorNetural300});
  animation: 2s ${fadeIn} ease-out infinite;
`;
