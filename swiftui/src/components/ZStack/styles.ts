import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
    container: {
        position: 'relative',
        display: 'block',
        height: '100%',
    },
    childrenAll: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
});

export default styles;