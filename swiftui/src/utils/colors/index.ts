import { LinearGradient } from "../modifiers";

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

export function convertColor(color: Color): string {
  switch (color) {
    case 'accentColor':
    case 'blue':
      color = 'var(--swiftui-accent-color)';
      break;
    // todo: add other theme colors
  }
  return color;
}

export const getBackgroundColor = (backgroundColor?: Color | LinearGradient) => {
  if (backgroundColor === undefined) return null;

  if (typeof backgroundColor === 'object' && 'linearGradient' in backgroundColor) {
    const { colors, startPoint, endPoint } = backgroundColor.linearGradient;

    const pointMapping = {
      top: "top",
      bottom: "bottom",
      leading: "left",
      trailing: "right",
      topLeading: "top left",
      topTrailing: "top right",
      bottomLeading: "bottom left",
      bottomTrailing: "bottom right",
    };

    const getGradientDirection = () => {
      // Basic validation
      if (!startPoint || !endPoint) {
        // Default to a standard gradient if points are missing
        return 'to bottom';
      }

      const from = pointMapping[startPoint];
      const to = pointMapping[endPoint];

      // Handle cases where start and end points are the same or directly opposite
      //
      // This logic can be expanded for more complex mappings,
      // but for now, we'll construct a simple "from X to Y" direction.
      // Note: CSS linear-gradient `from` is implied. The syntax is `to destination`.
      // We can simulate a "from X to Y" by choosing the correct destination.

      // Example: from 'leading' to 'trailing' is `to right`
      if (from === 'left' && to === 'right') return 'to right';
      if (from === 'right' && to === 'left') return 'to left';
      if (from === 'top' && to === 'bottom') return 'to bottom';
      if (from === 'bottom' && to === 'top') return 'to top';

      // For corners, it's simpler
      if (to) {
        return `to ${to}`;
      }
      
      return 'to bottom'; // Default fallback
    }

    const gradientColors = colors.map(convertColor).join(', ');
    const gradientDirection = getGradientDirection();

    return { backgroundImage: `linear-gradient(${gradientDirection}, ${gradientColors})` };
  }

  return { backgroundColor: convertColor(backgroundColor) };
};

export const getForegroundColor = (foregroundColor?: Color) => {
  if (foregroundColor === undefined) return null;
  return { color: convertColor(foregroundColor) };
}