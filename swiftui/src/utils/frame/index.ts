import { Modifiers, getSizeFromModifiers } from '../modifiers';
import React from 'react';

export const getFrame = (
  frame?: Modifiers['frame'],
  _?: {
    defaultSize?: { width: number, height: number },
    modifiers?: Modifiers,
    isImage?: boolean
  }
): React.CSSProperties | null => {
  if (!frame) return null;
  return getSizeFromModifiers({ frame, ..._?.modifiers }, _?.defaultSize, _?.isImage);
};