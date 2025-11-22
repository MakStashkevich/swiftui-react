import React from 'react';
import { Modifiers } from '../../utils/modifiers';
import { ZStackAlignment } from '../../utils/alignments';

export type ZStackProps = {
  alignment?: ZStackAlignment;
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & Modifiers;
