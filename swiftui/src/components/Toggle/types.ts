import { CSSProperties, PropsWithChildren } from 'react';
import { Modifiers } from '../../utils/modifiers';
import { BooleanBinding } from '../../utils/binding';
import { UIText } from '../../utils/text';

export type ToggleProps = {
  label?: UIText;
  isOn: BooleanBinding;
  onChange?: (isOn: boolean) => void;
  className?: string;
  style?: CSSProperties;
} & PropsWithChildren & Modifiers;