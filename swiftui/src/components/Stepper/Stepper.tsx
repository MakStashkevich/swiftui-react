import React from 'react';
import { StepperProps } from './types';
import './Stepper.style.css';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';

export const Stepper: React.FC<StepperProps> = ({
  children,
  value,
  onIncrement,
  onDecrement,
  className,
  style,
  range, // todo: add range logic
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
  disabled,
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
    <div className={['swiftui-stepper', className].filter(Boolean).join(' ')} style={{ ...style, ...modifierStyles }}>
      <button onClick={onDecrement} disabled={disabled}>-</button>
      {children || <span>{Number(value)}</span>}
      <button onClick={onIncrement} disabled={disabled}>+</button>
    </div>
  );
};