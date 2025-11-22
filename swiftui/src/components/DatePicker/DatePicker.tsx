import React from 'react';
import { DatePickerProps } from './types';
import './DatePicker.style.css';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';
import { getValueOrBinding } from '../../utils/binding';

export const DatePicker: React.FC<DatePickerProps> = ({
  selection,
  displayedComponents,
  onChange,
  title,
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
  const currentDate = getValueOrBinding(selection);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    if (displayedComponents === 'hourAndMinute' && currentDate) {
      newDate.setHours(currentDate.getHours());
      newDate.setMinutes(currentDate.getMinutes());
    }
    if (onChange) {
      onChange(newDate);
    }
    if (typeof selection !== 'string' && !(selection instanceof Date)) {
      selection.value = newDate;
    }
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [hours, minutes] = event.target.value.split(':').map(Number);
    const newDate = currentDate ? new Date(currentDate) : new Date();
    newDate.setHours(hours);
    newDate.setMinutes(minutes);
    if (onChange) {
      onChange(newDate);
    }
    if (typeof selection !== 'string' && !(selection instanceof Date)) {
      selection.value = newDate;
    }
  };

  const showDate = !displayedComponents || (Array.isArray(displayedComponents) && displayedComponents.includes('date')) || displayedComponents === 'date';
  const showTime = !displayedComponents || (Array.isArray(displayedComponents) && displayedComponents.includes('hourAndMinute')) || displayedComponents === 'hourAndMinute';

  const formatDate = (date: Date) => date.toISOString().split('T')[0];
  const formatTime = (date: Date) => date.toTimeString().split(' ')[0].substring(0, 5);

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
    <div className="DatePicker" style={{ ...style, ...modifierStyles }}>
      {title && <label className="DatePicker-label">{title}</label>}
      {showDate && (
        <input
          type="date"
          value={currentDate ? formatDate(currentDate) : ''}
          onChange={handleDateChange}
          className="DatePicker-input DatePicker-dateInput"
          disabled={disabled}
        />
      )}
      {showTime && (
        <input
          type="time"
          value={currentDate ? formatTime(currentDate) : ''}
          onChange={handleTimeChange}
          className="DatePicker-input DatePicker-timeInput"
          disabled={disabled}
        />
      )}
    </div>
  );
};