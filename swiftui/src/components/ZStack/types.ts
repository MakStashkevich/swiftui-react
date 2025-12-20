import React, { PropsWithChildren } from 'react';
import { Modifiers } from '../../utils/modifiers';
import { ZStackAlignment } from '../../utils/alignments';

export type ZStackProps = {
  className?: string;
  alignment?: ZStackAlignment;
  style?: React.CSSProperties;
} & PropsWithChildren & Modifiers;
