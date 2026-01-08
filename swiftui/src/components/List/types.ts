import React, { PropsWithChildren } from 'react';
import { Modifiers } from '../../utils/modifiers';

export type ListProps = {
  style?: React.CSSProperties;
} & Modifiers & PropsWithChildren;