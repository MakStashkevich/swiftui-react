import { CSSProperties, PropsWithChildren } from 'react';
import { Modifiers } from '../../utils/modifiers';
import { BooleanBinding } from '../../utils/binding';

export type ToggleProps = {
  label?: string;
  isOn: BooleanBinding;
  onChange?: (isOn: boolean) => void;
  className?: string;
  style?: CSSProperties;
} & PropsWithChildren & Modifiers;