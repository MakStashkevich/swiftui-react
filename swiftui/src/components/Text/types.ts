import { CSSProperties, PropsWithChildren } from 'react';
import { Modifiers } from '../../utils/modifiers';

export type TextProps = {
  className?: string;
  style?: CSSProperties;
} & PropsWithChildren & Modifiers;