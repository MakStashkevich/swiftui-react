import * as stylex from '@stylexjs/stylex';
import { fontSize, textColor } from '../../utils/stylex/tokens.stylex';

const styles = stylex.create({
    container: {
        fontSize: fontSize.default,
        color: textColor.default,
    },
});

export default styles;