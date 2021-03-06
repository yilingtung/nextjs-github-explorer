import styled from 'styled-components';

import type { CardOrganizationProps } from './card-organization';

import { colorNetural100 } from '@src/utils/colors';
import { borderRadius, fontSizeS, fontSizeL } from '@src/utils/sizes';

export const Thumbnail = styled.div<Pick<CardOrganizationProps, 'thumbnail'>>`
  display: inline-flex;
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: ${borderRadius}px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.thumbnail});
`;

export const Name = styled.div`
  white-space: nowrap;
  font-size: ${fontSizeL}px;
  font-weight: 600;
  line-height: 32px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Description = styled.div`
  display: -webkit-box;
  font-size: ${fontSizeS}px;
  line-height: 24px;
  -webkit-line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

interface ContentProps {
  jusitifyCenter?: React.CSSProperties['justifyContent'];
}

export const Content = styled.div<ContentProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: ${({ jusitifyCenter }) => jusitifyCenter};
  margin-left: 24px;
  min-width: 0;
`;

export const Container = styled.div`
  display: flex;
  border-radius: ${borderRadius}px;
  overflow: hidden;
  padding: 24px 16px;
  transition: background-color 0.3s ease-out;

  :hover {
    background-color: rgb(${colorNetural100});
  }
`;
