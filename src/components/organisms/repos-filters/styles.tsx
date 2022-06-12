import styled from 'styled-components';

import { device } from '@src/utils/media';

export const Container = styled.div`
  display: flex;

  @media ${device.tablet} {
    flex-direction: column;
  }

  & > * {
    min-width: 160px;

    &:not(:last-child) {
      margin-right: 8px;

      @media ${device.tablet} {
        margin-right: 0;
        margin-bottom: 8px;
      }
    }
  }
`;
