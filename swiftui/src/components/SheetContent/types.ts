import { CSSProperties, PropsWithChildren } from 'react';
import { Modifiers } from '../../utils/modifiers';

export type SheetContentProps = {
  className?: string;
  style?: CSSProperties;
} & PropsWithChildren & Modifiers;