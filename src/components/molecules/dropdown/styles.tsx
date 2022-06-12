import styled, { css } from 'styled-components';

import SelectList from '@src/components/atoms/select-list';
import SelectOption from '@src/components/atoms/select-option';

import {
  colorPrimary,
  colorNetural200,
  colorNetural300,
  colorNetural600,
} from '@src/utils/colors';
import { borderRadius, fontSizeXS, fontSizeS } from '@src/utils/sizes';

export const Title = styled.div`
  font-size: ${fontSizeXS}px;
  font-weight: 600;
  padding: 4px 16px 8px;
  color: rgb(${colorNetural600});
  border-bottom: 1px solid rgba(${colorNetural200}, 0.6);
  margin-bottom: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Option = styled(SelectOption)<{ isSelected: boolean }>`
  align-items: center;
  justify-content: space-between;

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: rgb(${colorPrimary});
    `}

  > svg {
    flex-shrink: 0;

    path {
      ${({ isSelected }) =>
        isSelected &&
        css`
          fill: rgb(${colorPrimary});
        `}
    }
  }

  > :not(:last-child) {
    margin-right: 12px;
  }
`;

export const List = styled(SelectList)`
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  width: 100%;
  z-index: 5;
  box-shadow: 0 10px 40px 12px rgba(${colorNetural600}, 0.1);
`;

export const Button = styled.button<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 24px;
  border-radius: ${borderRadius}px;
  border: 2px solid rgb(${colorNetural300});
  color: rgb(${colorNetural600});
  background-color: white;
  cursor: pointer;

  > span {
    font-size: ${fontSizeS};
    margin-right: 12px;
  }

  > svg {
    transition: transform 0.3s;

    path {
      fill: rgb(${colorNetural600});
    }

    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: rotate(-180deg);
      `}
  }
`;

export const Container = styled.div`
  position: relative;
`;
