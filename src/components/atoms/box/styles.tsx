import styled from 'styled-components';

import type { BoxProps } from './box';

export const Container = styled.div<Pick<BoxProps, 'align'>>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};
  justify-content: center;
  width: 100%;
  height: 100%;
`;
