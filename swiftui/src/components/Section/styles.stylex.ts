import * as stylex from '@stylexjs/stylex';
import { color, spacing } from '../../utils/stylex/tokens.stylex';

const minDevicePixelRatio2 = '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx)';
const minDevicePixelRatio3 = '@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 3dppx)';

export const numbers = stylex.defineVars({
  footer_webkit_line_clamp: stylex.types.number(2),
});

const styles = stylex.create({
    container: {
        paddingInline: spacing.sectionInline,
    },
    header: {
        paddingBottom: spacing.sectionHeaderBottom,
        paddingInline: spacing.sectionHeaderInline,
        textTransform: 'uppercase',
    },
    footer: {
        paddingTop: spacing.sectionFooterTop,
        paddingInline: spacing.sectionFooterInline,
    },
    // todo: when use textEllipsis???
    textEllipsis: {
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': numbers.footer_webkit_line_clamp,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
    },
    content: {
        borderRadius: spacing.radius,
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
    row: {
        display: 'block',
        position: 'relative',
    },
    rowLine: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cellImage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: spacing.cellImageLeft,
        marginRight: spacing.cellImageRight,
        maxWidth: '100%',
        minWidth: 0,
        height: 40,
    },
    separator: {
        alignItems: 'center',
        display: 'flex',
        flexGrow: '1',
        justifyContent: 'space-between',
        marginInlineStart: spacing.cellInline,
        maxWidth: '100%',
        minWidth: '0',
        position: 'relative',
        ':after': {
            backgroundColor: color.sectionSeparator,
            bottom: '0',
            content: '',
            height: 'var(--swiftui-cell-separator-height)',
            insetInlineStart: 0,
            position: 'absolute',
            transformOrigin: 'bottom left',
            width: '100%',
            willChange: 'transform',
            transform: {
                default: 'scaleY(.33)',
                [minDevicePixelRatio2]: 'scaleY(.5)',
                [minDevicePixelRatio3]: 'scaleY(.33)',
            },
        },
        ':before': {
            backgroundColor: color.sectionSeparator,
            content: '',
            height: 'var(--swiftui-cell-block-separator-height)',
            insetInlineStart: '0',
            position: 'absolute',
            top: '0',
            transformOrigin: 'top left',
            width: '100%',
            willChange: 'transform',
            transform: {
                default: 'scaleY(.33)',
                [minDevicePixelRatio2]: 'scaleY(.5)',
                [minDevicePixelRatio3]: 'scaleY(.33)',
            },
        }
    },
    separatorAfterIcon: {
        marginLeft: 0,
    },
    block: {
        minHeight: 'var(--swiftui-cell-min-height)',
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        marginInlineEnd: spacing.cellInline,
    }
});

export default styles;