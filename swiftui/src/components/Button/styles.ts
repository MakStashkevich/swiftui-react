import * as stylex from '@stylexjs/stylex';
import { color } from '../../utils/stylex/tokens.stylex';

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: '6.5pt',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '6px',
    // padding: '8px 16px',
    // borderWidth: '1px',
    // borderStyle: 'solid',
    // borderColor: '#ccc',
  },
  activeCursor: {
    cursor: 'pointer',
  },
  disabledCursor: {
    cursor: 'not-allowed'
  },
  pressedBorderless: {
    opacity: 0.3,
  },
  pressedBorderedProminent: {
    opacity: 0.75,
  },
  pressedPlain: {
    opacity: 0.8,
  },
  unpressed: {
    opacity: 1,
    transition: 'opacity 0.3s',
  },
  borderPadding: {
    paddingBlock: '4.8pt',
    paddingInline: '10pt',
  },
  bordered: {
    backgroundColor: color.buttonBorderedBg,
  },
  borderedProminent: {
    backgroundColor: color.accent,
  },
  disabledBg: {
    backgroundColor: color.gray,
  },
  destructiveBg: {
    backgroundColor: color.destructive,
  }
});

export default styles;
