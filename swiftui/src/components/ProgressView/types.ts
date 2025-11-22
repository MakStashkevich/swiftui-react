import React from 'react';
import { Modifiers } from '../../utils/modifiers';
import { NumberBinding } from '../../utils/binding';

export type ProgressProps = {
  value?: NumberBinding | number;
  total?: NumberBinding | number;
  style?: React.CSSProperties;
} & Modifiers;