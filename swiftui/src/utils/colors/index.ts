export type Color =
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'purple'
  | 'pink'
  | 'primary'
  | 'secondary'
  | 'accentColor'
  | 'black'
  | 'white'
  | 'gray'
  | 'clear'
  | 'mint'
  | 'brown'
  | 'teal'
  | 'cyan'
  | 'indigo'
  | `#${string}`
  | `rgb${string}`
  | (string & {});

export const getBackgroundColor = (backgroundColor?: string) => {
  if (backgroundColor === undefined) return null;
  return { backgroundColor };
};

export const getForegroundColor = (foregroundColor?: string) => {
  if (foregroundColor === undefined) return null;
  switch (foregroundColor) {
    case 'accentColor':
      foregroundColor = 'var(--swiftui-accent-text-color)';
      break;
    // todo: add other theme colors
  }
  return { color: foregroundColor };
}