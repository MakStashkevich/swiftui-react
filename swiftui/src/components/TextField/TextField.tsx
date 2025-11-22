import React from 'react';
import { TextFieldProps } from './types';
import './TextField.style.css';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';

export const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  placeholder,
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
  disabled,
  textContentType,
  keyboardType,
  textInputAutocapitalization,
  autocorrectionDisabled,
  // ... другие модификаторы
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
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

  // Маппинг textContentType и keyboardType на стандартные HTML атрибуты
  const inputAutoComplete = textContentType === 'oneTimeCode' ? 'one-time-code' : textContentType;
  const inputInputMode = keyboardType === 'numberPad' || keyboardType === 'decimalPad' ? 'numeric' : undefined;
  const inputAutocapitalize = textInputAutocapitalization === 'never' ? 'off' : textInputAutocapitalization;

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={['swiftui-textfield', className].filter(Boolean).join(' ')}
      style={{ ...style, ...modifierStyles }}
      disabled={disabled}
      autoComplete={inputAutoComplete}
      inputMode={inputInputMode}
      autoCapitalize={inputAutocapitalize}
      autoCorrect={autocorrectionDisabled ? 'off' : 'on'}
    />
  );
};