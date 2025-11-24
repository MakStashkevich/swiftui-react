import * as stylex from '@stylexjs/stylex';
import { color, fontSize, spacing } from '../../utils/stylex/tokens.stylex';

const styles = stylex.create({
    container: {
        padding: spacing.section,
    },
    header: {
        padding: spacing.cell,
        fontSize: fontSize.subtitle,
    },
    footer: {
        padding: spacing.cell,
        fontSize: fontSize.subtitle,
    },
    content: {
        borderRadius: spacing.radius,
        padding: spacing.cell,
        overflow: 'hidden',
        position: 'relative',
        isolation: 'isolate',
        ':before': {
            backgroundColor: color.sectionBg,
            borderRadius: 'inherit',
            content: "",
            inset: 0,
            position: 'absolute',
            willChange: 'transform',
            zIndex: -1,
        },

        display: 'flex',
        flexDirection: 'column',
    },
    contentChildrenAll: {
        '--swiftui-cell-separator-height': '1px',
    },
    contentChildrenLast: {
        '--swiftui-cell-separator-height': '0',
    },
});

export default styles;