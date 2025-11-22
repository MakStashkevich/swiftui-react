import { CSSProperties, PropsWithChildren } from 'react';
import { Modifiers } from '../../utils/modifiers';
import { NumberBinding } from '../../utils/binding';

export type StepperProps = {
  value: NumberBinding | number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  className?: string;
  style?: CSSProperties;
  range?: number[];
  onChange?: () => void;
} & PropsWithChildren & Modifiers;