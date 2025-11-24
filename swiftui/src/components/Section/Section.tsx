import React from 'react';
import { SectionProps } from './types';
import styles from './styles';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';
import { sx } from '../../utils/stylex';
import { textColorDefaultSubtitle } from '../../utils/stylex/themes';
import { sxChild } from '../../utils/stylex/children';

export const Section: React.FC<SectionProps> = ({
  children,
  header,
  footer,
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
    // ... другие стили модификаторов
  };

  return (
    <section {...sx(styles.container, className)} style={{ ...style, ...modifierStyles }}>
      {header && <div {...sx(styles.header, textColorDefaultSubtitle)}>{header}</div>}
      <div {...sx(styles.content)}>
        {
          sxChild(children, styles.contentChildrenAll)
            .last(styles.contentChildrenLast)
            .render()
        }
      </div>
      {footer && <div {...sx(styles.footer, textColorDefaultSubtitle)}>{footer}</div>}
    </section>
  );
};