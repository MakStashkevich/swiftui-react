import * as stylex from '@stylexjs/stylex';
import { fontHeight, fontSize, textColor } from './tokens.stylex';

// for headers and footers
export const textColorDefaultSubtitle = stylex.createTheme(textColor, {
    default: 'var(--swiftui-subtitle-text-color)'
});

export const fontSizeDefaultSubtitle = stylex.createTheme(fontSize, {
    default: 'var(--swiftui-subtitle-font-size)'
});

export const fontHeightDefaultSubtitle = stylex.createTheme(fontHeight, {
    default: 'var(--swiftui-subtitle-font-height)'
});

export const fontLetterSpacingDefaultSubtitle = stylex.createTheme(fontHeight, {
    default: 'var(--swiftui-subtitle-font-letter-spacing)'
});