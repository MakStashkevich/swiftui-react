import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
    container: {
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center',
    },
    // childrenAll: {
    //     gridArea: '1/1/1/1',
    // },
});

export default styles;