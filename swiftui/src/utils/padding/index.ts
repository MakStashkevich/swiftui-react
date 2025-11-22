import React from 'react';

export type Padding =
  | boolean
  | number
  | {
      leading?: number;
      top?: number;
      bottom?: number;
      trailing?: number;
      horizontal?: number;
      vertical?: number;
      all?: number;
    };

export const SYSTEM_PADDING = 20;

export const getPadding = (paddingProps?: Padding): React.CSSProperties | null => {
  if (paddingProps === undefined || paddingProps === null) return null;
  if (typeof paddingProps === 'number') {
    return {
      paddingTop: paddingProps,
      paddingBottom: paddingProps,
      paddingLeft: paddingProps,
      paddingRight: paddingProps,
    };
  }
  if (typeof paddingProps === 'boolean' && paddingProps === true) {
    return {
      paddingTop: SYSTEM_PADDING,
      paddingBottom: SYSTEM_PADDING,
      paddingLeft: SYSTEM_PADDING,
      paddingRight: SYSTEM_PADDING,
    };
  }
  const { top, bottom, leading, trailing, vertical, horizontal, all } =
    paddingProps as Exclude<Padding, boolean | number>;
  return {
    ...((top !== undefined || vertical !== undefined || all !== undefined) && {
      paddingTop: all ?? vertical ?? top,
    }),
    ...((bottom !== undefined || vertical !== undefined || all !== undefined) && {
      paddingBottom: all ?? vertical ?? bottom,
    }),
    ...((leading !== undefined || horizontal !== undefined || all !== undefined) && {
      paddingLeft: all ?? horizontal ?? leading,
    }),
    ...((trailing !== undefined || horizontal !== undefined || all !== undefined) && {
      paddingRight: all ?? horizontal ?? trailing,
    }),
  };
};