import styled, { css } from 'styled-components';

import { device } from '@src/utils/media';
import { borderRadius } from '@src/utils/sizes';
import { colorNetural100 } from '@src/utils/colors';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 8px 16px;
  border: none;
  background-color: transparent;
  border-radius: ${borderRadius}px;
  overflow: hidden;

  ${(props) =>
    typeof props.onClick === 'function' &&
    css`
      cursor: pointer;

      :hover {
        background-color: rgb(${colorNetural100});
      }
    `}

  @media ${device.tablet} {
    padding: 8px;
  }
`;
