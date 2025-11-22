import React from 'react';

export type ZStackProps = {
  alignment?:
    | 'topLeading'
    | 'top'
    | 'topTrailing'
    | 'leading'
    | 'center'
    | 'trailing'
    | 'bottomLeading'
    | 'bottom'
    | 'bottomTrailing';
  style?: React.CSSProperties;
  children?: React.ReactNode;
};
