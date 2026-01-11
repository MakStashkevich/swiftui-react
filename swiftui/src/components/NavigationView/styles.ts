import * as stylex from '@stylexjs/stylex';
import { color, spacing, textColor } from '../../utils/stylex/tokens.stylex';

const styles = stylex.create({
    titleBottom: {
        marginBottom: '46.5pt',
    },
    titleLarge: {
        marginTop: '35.3pt',
        marginBottom: '5pt',
        transformOrigin: 'left',
        marginRight: 'auto',
        marginLeft: spacing.sectionInline,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'block',
        minWidth: 0,
        maxWidth: 'calc(100vw - 16pt)',
        width: '100%',
    },
    titleBar: {
        position: 'fixed',
        top: 0,
        minHeight: '33.5pt',
        width: '100%',
        height: 'min-content',
        zIndex: 10000,
        isolation: 'isolate',
    },
    titleBarBackground: {
        position: 'absolute',
        inset: 0,
        backgroundColor: 'var(--swiftui-active-bg-color)',
        zIndex: -1,
    },
    titleBarColored: {
        position: 'absolute',
        inset: 0,
        backgroundColor: color.navigationBar,
        backdropFilter: 'sepia(24%) brightness(400%) blur(20px)',
        zIndex: 0,
        pointerEvents: 'none',
        ':after': {
            backgroundColor: color.navigationBarSeparator,
            bottom: '0',
            content: '',
            height: '1px',
            insetInlineStart: 0,
            position: 'absolute',
            transformOrigin: 'bottom left',
            width: '100%',
            willChange: 'transform',
            transform: 'scaleY(calc(1 / var(--dpr, 1)))',
        },
    },
    titleContainer: {
        display: 'flex',
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'justify-between',
        height: '100%',
        width: '100%',
        marginInline: '6pt',
    },
    titleCenter: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 600,
        justifyContent: 'center',
    },
    titleItem: {
        display: 'flex',
        flexDirection: 'row',
    },
    titleItemLeading: {
        justifyContent: 'flex-start',
    },
    titleItemTrailing: {
        justifyContent: 'flex-end',
    },
    titleVisible: {
        opacity: 1,
        transition: 'opacity .2s',
    },
    titleHidden: {
        opacity: 0,
        transition: 'opacity .2s',
    },
    backButton: {
        display: 'flex',
        flexDirection: 'row',
        gap: '6.5pt',
        color: textColor.accent,
        alignItems: 'center',
        cursor: 'pointer',
    },
    backButtonPressed: {
        opacity: 0.3,
    },
    backButtonUnpressed: {
        opacity: 1,
        transition: 'opacity 0.3s',
    }
});

export default styles;