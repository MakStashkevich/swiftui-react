import { CSSProperties, PropsWithChildren } from 'react';
import { Modifiers } from '../../utils/modifiers';
import { BooleanBinding } from '../../utils/binding';

export type ToggleProps = {
  isOn: BooleanBinding;
  onChange?: (isOn: boolean) => void;
  className?: string;
  style?: CSSProperties;
  title?: string; // todo: move to modifiers???
} & PropsWithChildren & Modifiers;