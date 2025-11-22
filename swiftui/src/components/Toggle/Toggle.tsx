import React from 'react';
import { ToggleProps } from './types';
import './Toggle.style.css';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';

export const Toggle: React.FC<ToggleProps> = ({
  children,
  isOn,
  onChange,
  className,
  style,
  // Modifiers
  title,
  frame,
  padding,
  border,
  cornerRadius,
  shadow,
  scaleEffect,
  rotationEffect,
  opacity,
  hidden,
  disabled,
  // ... другие модификаторы
}) => {
  const handleClick = () => {
    if (onChange) {
      onChange(!isOn);
    }
  };

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
    <div
      className={['swiftui-toggle', isOn ? 'swiftui-toggle--on' : 'swiftui-toggle--off', className].filter(Boolean).join(' ')}
      onClick={handleClick}
      style={{ ...style, ...modifierStyles }}
    >
      <div className="swiftui-toggle__switch" />
      {children && <span className="swiftui-toggle__label">{children}</span>}
    </div>
  );
};