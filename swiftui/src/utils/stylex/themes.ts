import * as stylex from '@stylexjs/stylex';
import { textColor } from './tokens.stylex';

export const textColorDefaultSubtitle = stylex.createTheme(textColor, {
    default: 'var(--swiftui-subtitle-text-color)'
});