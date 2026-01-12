import React from 'react';
import { TextProps } from './types';
import styles from './styles';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';
import { getFont } from '../../utils/fonts';
import { sx } from '../../utils/stylex';
import { getBackgroundColor, getForegroundColor } from '../../utils/colors';

export const Text: React.FC<TextProps> = ({
  children,
  className,
  style,
  // Modifiers
  frame,
  padding,
  border,
  cornerRadius,
  shadow,
  scaleEffect,
  rotationEffect,
  opacity,
  hidden,
  fontSize,
  fontWeight,
  font,
  bold,
  italic,
  strikethrough,
  underline,
  foregroundColor,
  background,
  // ... другие модификаторы
}) => {
  const modifierStyles: React.CSSProperties = {
    ...getFrame(frame),
    ...getPadding(padding),
    ...getBorder(border),
    ...getCornerRadius(cornerRadius),
    ...getShadow(shadow),
    ...getTransform(scaleEffect, rotationEffect),
    ...(opacity !== undefined && { opacity }),
    ...(hidden && { display: 'none' }),
    ...getFont(font, fontSize, fontWeight, italic),
    ...(bold && { fontWeight: 'bold' }),
    ...(strikethrough && { textDecoration: 'line-through' }),
    ...(underline && { textDecoration: 'underline' }),
    ...getForegroundColor(foregroundColor),
    ...getBackgroundColor(background),
    // ... другие стили модификаторов
  };

  return (
    <span {...sx(styles.container, className)} style={{ ...style, ...modifierStyles }}>
      {children}
    </span>
  );
};