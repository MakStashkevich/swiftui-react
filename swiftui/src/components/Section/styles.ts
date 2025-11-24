import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
    container: {
        padding: 'var(--swiftui-section-block-padding) var(--swiftui-section-inline-padding)',
    },
    header: {
        padding: 'var(--swiftui-cell-block-padding) var(--swiftui-cell-inline-padding)',
        fontSize: 'var(--swiftui-subtitle-font-size)',
        color: 'var(--swiftui-subtitle-text-color)',
    },
    footer: {
        padding: 'var(--swiftui-cell-block-padding) var(--swiftui-cell-inline-padding)',
        fontSize: 'var(--swiftui-subtitle-font-size)',
        color: 'var(--swiftui-subtitle-text-color)',
    },
    content: {
        borderRadius: 'var(--swiftui-radius)',
        padding: 'var(--swiftui-cell-block-padding) var(--swiftui-cell-inline-padding)',
        overflow: 'hidden',
        position: 'relative',
        isolation: 'isolate',
        ':before': {
            backgroundColor: 'var(--swiftui-section-bg-color)',
            borderRadius: 'inherit',
            content: "",
            inset: 0,
            position: 'absolute',
            willChange: 'transform',
            zIndex: -1,
        },
    },
    content_children: {
        '--swiftui-cell-separator-height': '1px',
    },
    content_children_last: {
        '--swiftui-cell-separator-height': '0',
    },
});

export default styles;