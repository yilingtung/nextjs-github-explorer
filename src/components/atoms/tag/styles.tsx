import styled from 'styled-components';

import { colorNetural200, colorNetural600 } from '@src/utils/colors';
import { borderRadius, fontSizeXS } from '@src/utils/sizes';

export const Container = styled.div`
  display: inline-block;
  font-size: ${fontSizeXS}px;
  color: rgb(${colorNetural600});
  background-color: rgba(${colorNetural200}, 0.7);
  border-radius: ${borderRadius}px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 8px 16px;
  position: relative;

  > span {
    white-space: nowrap;
  }
`;
