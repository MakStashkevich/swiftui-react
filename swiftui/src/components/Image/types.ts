import React from 'react';
import { Modifiers, SystemImageName } from '../../utils/modifiers';

export type ImageProps = {
  systemName?: SystemImageName;
  style?: React.CSSProperties;
} & Modifiers;
