import React from 'react';

export type TextAlignment = 'leading' | 'center' | 'trailing';
export type VStackAlignment = 'leading' | 'center' | 'trailing';
export type HStackAlignment = 'top' | 'center' | 'bottom';
export type ZStackAlignment =
  | 'top'
  | 'center'
  | 'bottom'
  | 'leading'
  | 'trailing'
  | 'topLeading'
  | 'topTrailing'
  | 'bottomLeading'
  | 'bottomTrailing';

export const AlignmentMap = {
  vstack: {
    leading: {
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    trailing: {
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  },
  hstack: {
    top: {
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottom: {
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  },
  zstack: {
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    leading: {
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    trailing: {
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    top: {
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    bottom: {
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    topLeading: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    topTrailing: {
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
    bottomLeading: {
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
    },
    bottomTrailing: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
  },
};

export const getAlignment = (
  alignment: ZStackAlignment | VStackAlignment | HStackAlignment,
  stackType: 'hstack' | 'vstack' | 'zstack'
): React.CSSProperties => {
  if (stackType === 'vstack') {
    return AlignmentMap.vstack[alignment as VStackAlignment];
  } else if (stackType === 'hstack') {
    return AlignmentMap.hstack[alignment as HStackAlignment];
  } else {
    return AlignmentMap.zstack[alignment as ZStackAlignment];
  }
};