import React from 'react';

export const getCornerRadius = (
  cornerRadius?:
    | number
    | {
        topLeft?: number;
        topRight?: number;
        bottomLeft?: number;
        bottomRight?: number;
      },
  overflowNeeded: boolean = false
): React.CSSProperties | null => {
  if (cornerRadius === undefined) return null;

  let borderRadius: React.CSSProperties = {};

  if (typeof cornerRadius === 'number') {
    borderRadius = { borderRadius: cornerRadius };
  } else {
    borderRadius = {
      borderTopLeftRadius: cornerRadius.topLeft,
      borderTopRightRadius: cornerRadius.topRight,
      borderBottomLeftRadius: cornerRadius.bottomLeft,
      borderBottomRightRadius: cornerRadius.bottomRight,
    };
  }

  if (overflowNeeded) {
    return { ...borderRadius, overflow: 'hidden' };
  }
  return borderRadius;
};