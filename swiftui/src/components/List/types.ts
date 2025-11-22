import React from 'react';
import { Modifiers } from '../../utils/modifiers';

export type ListProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode; // ReactElement | ReactElement[]
} & Modifiers;