import React from 'react';

import colorsMap from '@src/utils/maps/language-colors-map';

import Label from '../../atoms/label';

import * as S from './styles';

export interface LanguageTagProps {
  type: string;
}

export const LanguageTag = React.memo(({ type }: LanguageTagProps) => {
  const color = colorsMap[type as keyof typeof colorsMap]?.color || 'gray';
  return (
    <S.Container>
      <S.ColorBox color={color} />
      <Label>{type}</Label>
    </S.Container>
  );
});

LanguageTag.displayName = 'LanguageTag';
