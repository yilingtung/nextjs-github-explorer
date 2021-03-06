import styled, { css } from 'styled-components';

import Label from '@src/components/atoms/label';

import { colorNetural100 } from '@src/utils/colors';
import { borderRadius, fontSizeS, fontSizeL } from '@src/utils/sizes';

export const Description = styled.div`
  display: -webkit-box;
  min-height: 48px;
  font-size: ${fontSizeS}px;
  line-height: 24px;
  -webkit-line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Name = styled.div`
  white-space: nowrap;
  font-size: ${fontSizeL}px;
  font-weight: 600;
  line-height: 32px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  height: 18px;

  > :not(:last-child) {
    margin-right: 8px;
  }
`;

export const HeaderStarLabel = styled(Label)`
  flex-shrink: 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > :not(:last-child) {
    margin-right: 8px;
  }

  > a {
    min-width: 0;
  }
`;

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 162px;
  border-radius: ${borderRadius}px;
  overflow: hidden;
  padding: 24px 16px;
  background-color: rgb(${colorNetural100});
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${borderRadius}px;
  overflow: hidden;
  padding: 24px 16px;
  transition: background-color 0.3s ease-out;

  ${(props) =>
    typeof props.onClick === 'function' &&
    css`
      cursor: pointer;

      :hover {
        background-color: rgb(${colorNetural100});
      }
    `}

  > :not(:last-child) {
    margin-bottom: 8px;
  }
`;
