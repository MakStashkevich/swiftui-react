import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
    height: 'var(--content-safe-area)',
  },
});

export default styles;