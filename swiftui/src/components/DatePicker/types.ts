import React from 'react';
import { DateBinding, StringBinding } from '../../utils/binding';
import { Modifiers } from '../../utils/modifiers';

export type DatePickerProps = {
  selection: DateBinding | Date;
  displayedComponents?: 'date' | 'hourAndMinute' | ('date' | 'hourAndMinute')[];
  onChange?: (date: DateBinding | Date) => void;
  title?: StringBinding | string;
  style?: React.CSSProperties;
} & Modifiers;