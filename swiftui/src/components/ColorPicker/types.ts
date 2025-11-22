import React from 'react';
import { BooleanBinding, StringBinding } from '../../utils/binding';
import { Modifiers } from '../../utils/modifiers';

export type ColorPickerProps = {
  selection: StringBinding | string;
  onChange?: (color: StringBinding | string) => void;
  title?: StringBinding | string;
  supportsOpacity?: BooleanBinding | boolean;
  style?: React.CSSProperties;
} & Modifiers;