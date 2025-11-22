import { CSSProperties } from 'react';
import { Modifiers } from '../../utils/modifiers';
import { NumberBinding } from '../../utils/binding';

export type TextFieldProps = {
  value: NumberBinding | number;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
} & Modifiers;