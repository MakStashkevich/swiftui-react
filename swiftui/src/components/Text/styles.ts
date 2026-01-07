import * as stylex from '@stylexjs/stylex';
import { fontHeight, fontSize, spacing, textColor } from '../../utils/stylex/tokens.stylex';

const styles = stylex.create({
    container: {
        fontSize: fontSize.default,
        lineHeight: fontHeight.default,
        color: textColor.default,
        paddingBlock: spacing.cellTextBlock,
    },
});

export default styles;