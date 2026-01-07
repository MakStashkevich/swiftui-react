import * as stylex from '@stylexjs/stylex';
import { color } from '../../utils/stylex/tokens.stylex';

const styles = stylex.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    label: {
        display: 'block',
        width: '50px',
        height: '31px',
        margin: '0px auto',
        borderRadius: '100px',
        transition: 'all 0.25s cubic-bezier(0.0, 0.5, 0.5, 1.15)',
        backgroundColor: color.gray,
    },
    input: {
        display: 'none',
    },
    i: {
        height: '27px',
        width: '27px',
        backgroundColor: 'white',
        display: 'inline-block',
        borderRadius: '100px',
        marginTop: '2px',
        marginLeft: '2px',
        transition: 'all 0.25s cubic-bezier(0.0, 0.5, 0.5, 1.15)',
        pointerEvents: 'none',
        boxShadow: '1px 2px 3px 0px rgba(0, 0, 0, 0.1)',
    },
    labelHoverI: {
        transform: 'scale(1.01)',
    },
    inputCheckedLabelI: {
        marginLeft: '21px',
        boxShadow: '-1px 2px 3px 0px rgba(0, 0, 0, 0.1)',
    },
    labelActive: {
        backgroundColor: color.gray,
    },
    labelActiveI: {
        width: '34px',
        boxShadow: '1px 2px 3px 0px rgba(0, 0, 0, 0.1)',
    },
    inputCheckedLabelActiveI: {
        marginLeft: '14px',
        boxShadow: '-1px 2px 3px 0px rgba(0, 0, 0, 0.1)',
    },
    inputCheckedLabel: {
        backgroundColor: color.green,
    },
    inputCheckedLabelActive: {
        backgroundColor: color.green,
    },
});

export default styles;
