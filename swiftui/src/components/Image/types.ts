import React from 'react';
import { Modifiers } from '../../utils/modifiers';
import { SystemName } from '../../types/system-name';

export type ImageProps = {
  systemName?: SystemName;
  style?: React.CSSProperties;
} & Modifiers;