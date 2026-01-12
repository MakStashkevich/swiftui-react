import * as stylex from '@stylexjs/stylex';
import { fontHeight, fontSize, spacing, textColor } from './tokens.stylex';

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

// for buttons
export const textColorDefaultAccent = stylex.createTheme(textColor, {
    default: 'var(--swiftui-accent-color)'
});

export const textColorDefaultDestructive = stylex.createTheme(textColor, {
    default: 'var(--swiftui-destructive-color)'
});

export const textColorDefaultWhite = stylex.createTheme(textColor, {
    default: 'white'
});

export const textBlockSpacingDefaultZero = stylex.createTheme(spacing, {
    cellTextBlock: '0',
});