import styled from 'styled-components';

import { borderRadius } from '@src/utils/sizes';
import { colorNetural600 } from '@src/utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: white;
  border-radius: ${borderRadius}px;
  box-shadow: 0 10px 40px 12px rgba(${colorNetural600}, 0.1);
`;
