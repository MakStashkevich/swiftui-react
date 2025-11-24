import * as stylex from '@stylexjs/stylex';
import { textColor } from './tokens.stylex';

// for headers and footers
export const textColorDefaultSubtitle = stylex.createTheme(textColor, {
    default: 'var(--swiftui-subtitle-text-color)'
});