import { CSSProperties } from 'react';
import { Modifiers } from '../../utils/modifiers';
import { NumberBinding, StringBinding } from '../../utils/binding';

export type SliderProps = {
  value: NumberBinding | number;
  min?: NumberBinding | number;
  max?: NumberBinding | number;
  step?: NumberBinding | number;
  onChange: (value: NumberBinding | number) => void;
  className?: StringBinding | string;
  style?: CSSProperties;
  range?: number[];
} & Modifiers;