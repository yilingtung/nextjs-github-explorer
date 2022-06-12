import styled from 'styled-components';

import {
  colorNetural200,
  colorNetural300,
  colorNetural600,
} from '@src/utils/colors';
import { borderRadius, fontSizeS } from '@src/utils/sizes';

export const Container = styled.div`
  padding: 24px;
  line-height: 1.5;
  font-size: ${fontSizeS}px;
  color: rgb(${colorNetural600});
  background-color: rgba(${colorNetural200}, 0.7);
  border-radius: ${borderRadius}px;
  overflow: auto;

  & pre {
    overflow-y: auto;
    background-color: rgba(${colorNetural300}, 1);
    border-radius: ${borderRadius}px;
    padding: 16px 24px;
  }

  & img {
    max-width: 100%;
  }
`;
