import React from 'react';
import { ColorPickerProps } from './types';
import './ColorPicker.style.css';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';
import { getValueOrBinding } from '../../utils/binding';

export const ColorPicker: React.FC<ColorPickerProps> = ({
  selection,
  onChange,
  title,
  supportsOpacity,
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
  const currentColor = getValueOrBinding(selection);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    <div className="ColorPicker" style={{ ...style, ...modifierStyles }}>
      {title && <label className="ColorPicker-label">{title}</label>}
      <input
        type="color"
        value={currentColor}
        onChange={handleChange}
        className="ColorPicker-input"
        disabled={disabled}
        // supportsOpacity не поддерживается напрямую в HTML input type="color"
        // Для поддержки opacity потребуется более сложная реализация с кастомным пикером
      />
    </div>
  );
};