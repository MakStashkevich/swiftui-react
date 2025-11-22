import { CSSProperties, PropsWithChildren } from 'react';
import { Modifiers } from '../../utils/modifiers';
import { VStackAlignment } from '../../utils/alignments';

export type VStackProps = {
  className?: string;
  style?: CSSProperties;
  spacing?: number;
  alignment?: VStackAlignment;
} & PropsWithChildren & Modifiers;
