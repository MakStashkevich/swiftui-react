import { Color } from '../colors';
import React from 'react';

export type Shadow = {
  color?: Color;
  x?: number;
  y?: number;
  radius?: number;
  opacity?: number;
};

export const getShadow = (shadow?: Shadow): React.CSSProperties | null => {
  if (!shadow) return null;

  const { color = 'black', x = 0, y = 0, radius = 0, opacity = 1 } = shadow;

  // В CSS box-shadow нет прямого аналога opacity для цвета тени,
  // поэтому мы преобразуем цвет в rgba, если это возможно.
  let shadowColor = color;
  if (typeof color === 'string' && (color.startsWith('#') || color.startsWith('rgb'))) {
    // Простая эвристика для преобразования цвета в rgba
    // В более сложном случае можно использовать библиотеку для работы с цветами
    if (color.startsWith('#')) {
      const hex = color.slice(1);
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      shadowColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    } else if (color.startsWith('rgb')) {
      // Предполагаем, что rgb(a) уже в правильном формате, но нужно изменить альфа-канал
      const parts = color.match(/\d+/g);
      if (parts && parts.length >= 3) {
        shadowColor = `rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${opacity})`;
      }
    }
  }

  return {
    boxShadow: `${x}px ${y}px ${radius}px ${shadowColor}`,
  };
};