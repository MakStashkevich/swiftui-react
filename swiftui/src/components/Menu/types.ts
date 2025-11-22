import React, { ReactNode } from 'react';
import { SystemName } from '../../types/system-name';
import { Modifiers } from '../../utils/modifiers';
import { StringBinding } from '../../utils/binding';

export type MenuProps = {
  style?: React.CSSProperties;
  title?: StringBinding | string;
  systemImage?: SystemName;
  primaryAction?: () => void;
  children?: ReactNode;
} & Modifiers;