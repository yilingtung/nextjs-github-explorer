import styled from 'styled-components';

import type { OrgProfileProps } from './org-profile';
import { device } from '@src/utils/media';
import { borderRadius, fontSizeL, fontSizeS } from '@src/utils/sizes';

export const Avatar = styled.div<Pick<OrgProfileProps, 'avtar'>>`
  display: inline-flex;
  flex-shrink: 0;
  width: 160px;
  height: 160px;
  border-radius: ${borderRadius}px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ avtar }) => avtar});

  @media ${device.tablet} {
    width: 120px;
    height: 120px;
  }

  @media ${device.mobile} {
    width: 96px;
    height: 96px;
  }
`;

export const Name = styled.div`
  display: inline-flex;
  font-size: ${fontSizeL}px;
  line-height: 32px;
  font-weight: 600;
  word-break: break-all;
`;

export const Description = styled.div`
  font-size: ${fontSizeS}px;
  line-height: 24px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;

  > :not(:last-child) {
    margin-bottom: 16px;
  }

  > a {
    display: inline-flex;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;

  > :not(:last-child) {
    margin-bottom: 24px;
  }

  @media ${device.tablet} {
    flex-direction: row;

    > :not(:last-child) {
      margin-bottom: 0;
      margin-right: 16px;
    }
  }
`;
