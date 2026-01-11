import { CSSProperties } from 'react';
import { ClipShape } from '../filters';

export const getClipShape = (shape?: ClipShape): CSSProperties => {
  if (typeof shape === 'string') {
    switch (shape) {
      case 'circle':
        return { clipPath: 'circle(50% at 50% 50%)' };
      case 'capsule':
        return { borderRadius: '9999px' };
      case 'rectangle':
        return { borderRadius: '0px' };
      case 'ellipse':
        return { clipPath: 'ellipse(50% 50% at 50% 50%)' };
    }
  } else if (typeof shape === 'object' && shape.shape === 'roundedRectangle') {
    return { borderRadius: `${shape.cornerRadius}px` };
  }
  return {};
};
