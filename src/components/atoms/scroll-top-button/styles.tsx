import styled from 'styled-components';

import { colorNetural600 } from '@src/utils/colors';

export const Container = styled.button`
  display: inline-block;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 40px;
  height: 40px;
  border: none;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 20px 0 rgba(${colorNetural600}, 0.1);
  transition: box-shadow 0.3s;
  z-index: 100;
  cursor: pointer;

  :hover {
    box-shadow: 0 10px 20px 0 rgba(${colorNetural600}, 0.2);
  }

  > svg {
    width: 14px;
    height: 14px;

    & path {
      fill: rgb(${colorNetural600});
    }
  }
`;
