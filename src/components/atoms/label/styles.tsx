import styled, { css } from 'styled-components';

import { colorNetural600 } from '@src/utils/colors';
import { fontSizeXS } from '@src/utils/sizes';

import type { LabelProps } from './';

export const Container = styled.div<Pick<LabelProps, 'iconType'>>`
  display: inline-block;
  font-size: ${fontSizeXS};
  color: rgb(${colorNetural600});
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 22px;
  position: relative;

  > svg {
    flex-shrink: 0;
    position: absolute;
    left: 0;
    width: 14px;
    height: 14px;

    & path {
      ${({ iconType }) =>
        iconType === 'fill'
          ? css`
              fill: rgb(${colorNetural600});
            `
          : css`
              stroke: rgb(${colorNetural600});
            `}
    }
  }

  > span {
    white-space: nowrap;
  }
`;
