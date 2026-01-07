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
  // https://developer.apple.com/documentation/swiftui/horizontalalignment
  vstack: {
    leading: {
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    trailing: {
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  },
  // https://developer.apple.com/documentation/swiftui/verticalalignment
  hstack: {
    top: {
      alignItems: 'flex-start',
    },
    center: {
      alignItems: 'center',
    },
    bottom: {
      alignItems: 'flex-end',
    },
    // todo: firstTextBaseline, lastTextBaseline
  },
  // https://developer.apple.com/documentation/swiftui/alignment
  zstack: {
    topLeading: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    top: {
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    topTrailing: {
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
    },

    leading: {
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    trailing: {
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    
    bottomLeading: {
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
    },
    bottom: {
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    bottomTrailing: {
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    // todo: leadingLastTextBaseline, trailingFirstTextBaseline
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