import React from 'react';
import { HStackProps } from './types';
import './HStack.style.css';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';
import { getAlignment } from '../../utils/alignments';

export const HStack: React.FC<HStackProps> = ({
  spacing,
  alignment = 'center',
  children,
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
    ...getAlignment(alignment, 'hstack'),
    // ... другие стили модификаторов
  };

  const inlineStyle: React.CSSProperties = {
    gap: spacing !== undefined ? `${spacing}px` : undefined,
    ...style,
    ...modifierStyles,
  };

  return (
    <div className="HStack" style={inlineStyle}>
      {children}
    </div>
  );
};