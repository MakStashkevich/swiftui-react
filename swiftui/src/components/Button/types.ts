import React from 'react';
import { Modifiers } from '../../utils/modifiers';
import { SystemName } from '../../types/system-name';
import { StringBinding } from '../../utils/binding';

export type ButtonProps = {
  style?: React.CSSProperties;
  title?: StringBinding | string;
  systemImage?: SystemName;
  role?: 'destructive' | 'cancel';
  action: () => void;
  children?: React.ReactNode;
} & Modifiers;