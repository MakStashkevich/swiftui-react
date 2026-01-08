import * as stylex from '@stylexjs/stylex';
import { color, spacing } from '../../utils/stylex/tokens.stylex';

const styles = stylex.create({
  container: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
    paddingTop: spacing.listTop,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.listGap,
  },
  insetGrouped: {
    backgroundColor: color.secondaryBg,
  },
  space: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
  }
});

export default styles;