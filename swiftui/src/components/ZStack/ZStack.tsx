import React from 'react';
import { ZStackProps } from './types';
import './ZStack.style.css';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';
import { getAlignment } from '../../utils/alignments';

export const ZStack: React.FC<ZStackProps> = ({
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
    ...getAlignment(alignment, 'zstack'),
    // ... другие стили модификаторов
  };

  return (
    <div className="ZStack" style={{ ...style, ...modifierStyles }}>
      {children}
    </div>
  );
};
