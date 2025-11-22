import React from 'react';
import { StringBinding } from '../../utils/binding';
import { Modifiers } from '../../utils/modifiers';

export type PickerProps = {
  selection: StringBinding | string;
  onChange?: (newValue: string) => void;
  style?: React.CSSProperties;
  children: React.ReactNode; // ReactElement | ReactElement[]
} & Modifiers;