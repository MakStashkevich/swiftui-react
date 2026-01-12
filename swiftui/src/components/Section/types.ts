import { CSSProperties, PropsWithChildren } from 'react';
import { Modifiers } from '../../utils/modifiers';
import { UIText } from '../../utils/text';

export type SectionProps = {
  header?: UIText;
  footer?: UIText;
  className?: string;
  style?: CSSProperties;
} & PropsWithChildren & Modifiers;