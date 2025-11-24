import * as stylex from '@stylexjs/stylex';

export const s = stylex.create({
    View: {
        margin: '0 auto',
        minWidth: '320px',
        maxWidth: '768px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 'var(--swiftui-double-gap)',
    },
});