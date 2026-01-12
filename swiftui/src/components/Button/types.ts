import React, { PropsWithChildren } from 'react';
import { Modifiers, SystemImageName } from '../../utils/modifiers';
import { UIText } from '../../utils/text';

export type ButtonProps = {
  style?: React.CSSProperties;
  title?: UIText;
  systemImage?: SystemImageName;
  role?: 'destructive' | 'cancel';
  action: React.MouseEventHandler<HTMLButtonElement>;
} & PropsWithChildren & Modifiers;