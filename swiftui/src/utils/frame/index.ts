import { Modifiers, getSizeFromModifiers } from '../modifiers';
import React from 'react';

export const getFrame = (frame?: Modifiers['frame']): React.CSSProperties | null => {
  if (!frame) return null;
  return getSizeFromModifiers({ frame });
};