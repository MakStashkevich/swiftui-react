import React from 'react';
import { SectionProps } from './types';
import './Section.style.css';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';

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
    <section className={['swiftui-section', className].filter(Boolean).join(' ')} style={{ ...style, ...modifierStyles }}>
      {header && <div className="swiftui-section__header">{header}</div>}
      <div className="swiftui-section__content">{children}</div>
      {footer && <div className="swiftui-section__footer">{footer}</div>}
    </section>
  );
};