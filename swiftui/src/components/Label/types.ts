import React from 'react';
import { SystemName } from '../../types/system-name';
import { Modifiers } from '../../utils/modifiers';
import { StringBinding } from '../../utils/binding';

export type LabelProps = {
  systemImage?: SystemName;
  title?: StringBinding | string;
  style?: React.CSSProperties;
} & Modifiers;