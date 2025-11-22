import { CSSProperties, PropsWithChildren, ReactNode } from 'react';
import { Modifiers } from '../../utils/modifiers';

export type SectionProps = {
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
  style?: CSSProperties;
} & PropsWithChildren & Modifiers;