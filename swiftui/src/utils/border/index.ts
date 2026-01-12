import { Color, convertColor } from '../colors';
import React from 'react';

export type Border = {
  color?: Color;
  width?: number;
};

export const getBorder = (border?: Border): React.CSSProperties | null => {
  if (!border) return null;
  return {
    ...(border.color && {
      borderColor: convertColor(border.color),
      borderStyle: 'solid', // Добавляем стиль границы по умолчанию
    }),
    ...(border.width && { borderWidth: border.width }),
  };
};