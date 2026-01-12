import React from 'react';
import { VStackProps } from './types';
import styles from './styles';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';
import { getAlignment } from '../../utils/alignments';
import { sx } from '../../utils/stylex';

export const VStack: React.FC<VStackProps> = ({
  children,
  className,
  style,
  spacing,
  alignment = 'center',
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
    ...getAlignment(alignment, 'vstack'),
    // ... другие стили модификаторов
  };

  const inlineStyle: React.CSSProperties = {
    gap: spacing !== undefined ? `${spacing}pt` : undefined,
    ...style,
    ...modifierStyles,
  };

  return (
    <div {...sx(styles.container, className)} style={inlineStyle}>
      {children}
    </div>
  );
};