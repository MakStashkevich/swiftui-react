import React from 'react';
import { ZStackProps } from './types';
import styles from './styles';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';
import { getAlignment } from '../../utils/alignments';
import { sx } from '../../utils/stylex';
import { sxChild } from '../../utils/stylex/children';

export const ZStack: React.FC<ZStackProps> = ({
  alignment = 'leading',
  children,
  style,
  className,
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
    <div {...sx(styles.container, className, {style: { ...style, ...modifierStyles }})}>
      {
        sxChild(children, {style: { ...{gridArea: '1/1/1/1'} }})
          .render()
      }
    </div>
  );
};
