import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
    container: {
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center',
        gridTemplateColumns: '1fr',
        width: '100%',
    },
});

export default styles;