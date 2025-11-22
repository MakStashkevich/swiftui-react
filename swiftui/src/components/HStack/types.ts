import React from 'react';
import { Modifiers } from '../../utils/modifiers';
import { HStackAlignment } from '../../utils/alignments';
import { NumberBinding } from '../../utils/binding';

export type HStackProps = {
  spacing?: NumberBinding | number;
  alignment?: HStackAlignment;
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & Modifiers;