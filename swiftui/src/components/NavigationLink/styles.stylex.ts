import * as stylex from '@stylexjs/stylex';
import { color } from '../../utils/stylex/tokens.stylex';

export const highlightFadeAnimation = stylex.keyframes({
    '0%': {
        backgroundColor: color.highlight,
    },
    to: {
        backgroundColor: '#0000'
    }
});

const styles = stylex.create({
    container: {
        height: '100%',
        width: '100%',
        cursor: 'pointer',
    },
    highlight: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        insetInline: 0,
        top: 0,
        pointerEvents: 'none',
    },
    highlightPressed: {
        backgroundColor: color.highlight,
    },
    highlightUnpressed: {
        animationName: highlightFadeAnimation,
        animationDuration: '.4s',
        animationTimingFunction: 'ease',
        animationFillMode: 'forwards',
    },
    chevron: {
        marginLeft: '2pt',
        color: color.chevron,
    }
});

export default styles;