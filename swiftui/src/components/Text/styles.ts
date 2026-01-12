import * as stylex from '@stylexjs/stylex';
import { fontHeight, fontLetterSpacing, fontSize, spacing, textColor } from '../../utils/stylex/tokens.stylex';

const styles = stylex.create({
    container: {
        fontSize: fontSize.default,
        lineHeight: fontHeight.default,
        letterSpacing: fontLetterSpacing.default,
        color: textColor.default,
        paddingBlock: spacing.cellTextBlock,
    },
});

export default styles;