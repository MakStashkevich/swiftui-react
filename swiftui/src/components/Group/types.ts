import React from 'react';
import { Modifiers } from '../../utils/modifiers';

export type GroupProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & Modifiers;