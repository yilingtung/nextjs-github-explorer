import styled from 'styled-components';

import type { HintTextProps } from './hint-text';

import { colorNetural500 } from '@src/utils/colors';
import { fontSizeXS } from '@src/utils/sizes';

export const Container = styled.div<Pick<HintTextProps, 'align'>>`
  font-size: ${fontSizeXS}px;
  color: rgb(${colorNetural500});
  text-align: ${({ align }) => align};
`;
