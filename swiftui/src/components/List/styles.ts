import * as stylex from '@stylexjs/stylex';
import { safeArea } from '../../utils/stylex/tokens.stylex';

const styles = stylex.create({
  container: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
    height: safeArea.content,
  },
});

export default styles;