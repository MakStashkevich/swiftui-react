import * as stylex from '@stylexjs/stylex';
import { fontHeight, fontSize, textColor } from '../../utils/stylex/tokens.stylex';

const styles = stylex.create({
    container: {
        fontSize: fontSize.default,
        lineHeight: fontHeight.default,
        color: textColor.default,
    },
});

export default styles;