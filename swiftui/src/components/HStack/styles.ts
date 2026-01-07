import * as stylex from '@stylexjs/stylex';
import { spacing } from '../../utils/stylex/tokens.stylex';

const styles = stylex.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: spacing.stackGapInline,
        width: '100%',
    },
});

export default styles;