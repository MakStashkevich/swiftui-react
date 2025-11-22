import { CSSProperties } from 'react';
import { Modifiers } from '../../utils/modifiers';

export type SpacerProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: CSSProperties;
} & Modifiers;