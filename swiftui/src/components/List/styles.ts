import * as stylex from '@stylexjs/stylex';
import { safeArea, spacing } from '../../utils/stylex/tokens.stylex';

const styles = stylex.create({
  container: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
    height: safeArea.content,
    paddingTop: spacing.listTop,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.listGap,
  },
});

export default styles;