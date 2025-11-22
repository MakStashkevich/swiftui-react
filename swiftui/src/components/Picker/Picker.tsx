import React from 'react';
import { PickerProps } from './types';
import './Picker.style.css';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';
import { getValueOrBinding } from '../../utils/binding';

export const Picker: React.FC<PickerProps> = ({
  selection,
  onChange,
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
  disabled,
  // ... другие модификаторы
}) => {
  const currentValue = getValueOrBinding(selection);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
    if (typeof selection !== 'string' && 'setValue' in selection) {
      selection.setValue(event.target.value);
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
    <select className="Picker" value={currentValue} onChange={handleChange} style={{ ...style, ...modifierStyles }} disabled={disabled}>
      {children}
    </select>
  );
};