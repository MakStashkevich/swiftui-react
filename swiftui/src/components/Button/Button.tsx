import React from 'react';
import { ButtonProps } from './types';
import './Button.style.css';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';

export const Button: React.FC<ButtonProps> = ({
  title,
  systemImage,
  role,
  action,
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
  disabled,
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
    <button
      className="Button"
      data-role={role}
      onClick={action}
      style={{ ...style, ...modifierStyles }}
      disabled={disabled}
    >
      {systemImage && <img src={systemImage} alt="system icon" />}
      {title && <span>{title}</span>}
      {children}
    </button>
  );
};