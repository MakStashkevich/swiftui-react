import * as stylex from '@stylexjs/stylex';
import { spacing } from '../../utils/stylex/tokens.stylex';

const styles = stylex.create({
    container: {
        // margin: '0 auto',
        // minWidth: '320px',
        // maxWidth: '768px',
        // overflow: 'hidden',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        gap: spacing.doubleGap,

        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',
        minHeight: 'var(--content-safe-area, 100vh)',
    }
});

export default styles;