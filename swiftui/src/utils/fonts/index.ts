import React from 'react';

export const Fonts = {
  largeTitle: { fontSize: 34, fontWeight: 'normal' as 'normal' },
  title: { fontSize: 28, fontWeight: 'normal' as 'normal' },
  title2: { fontSize: 22, fontWeight: 'normal' as 'normal' },
  title3: { fontSize: 20, fontWeight: 'normal' as 'normal' },
  headline: { fontSize: 17, fontWeight: 'bold' as 'bold' },
  body: { fontSize: 17, fontWeight: 'normal' as 'normal' },
  callout: { fontSize: 16, fontWeight: 'normal' as 'normal' },
  subheadline: { fontSize: 15, fontWeight: 'normal' as 'normal' },
  footnote: { fontSize: 13, fontWeight: 'normal' as 'normal' },
  caption: { fontSize: 12, fontWeight: 'normal' as 'normal' },
  caption2: { fontSize: 11, fontWeight: 'normal' as 'normal' },
};

export const FontWeights = {
  regular: 'normal' as 'normal',
  bold: 'bold' as 'bold',
  heavy: '800' as '800',
  medium: '600' as '600',
  light: '500' as '500',
  thin: '300' as '300',
  ultralight: '200' as '200',
  semibold: '700' as '700',
  black: '900' as '900',
};

export const getFont = (
  font?: keyof typeof Fonts | string,
  fontSize?: number,
  fontWeight?: keyof typeof FontWeights,
  italic?: boolean
): React.CSSProperties => {
  const baseFont = font && Fonts[font as keyof typeof Fonts] ? Fonts[font as keyof typeof Fonts] : {};
  return {
    ...baseFont,
    ...(fontSize && { fontSize }),
    ...(fontWeight && { fontWeight: FontWeights[fontWeight] }),
    ...(italic && { fontStyle: 'italic' }),
  };
};