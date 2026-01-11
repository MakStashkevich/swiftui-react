import { useRef, useEffect } from 'react';

/**
 * A custom hook that stores the previous value of a variable.
 *
 * @param value The current value to track.
 * @returns The value from the previous render.
 *
 * @example
 * ```tsx
 * const [count, setCount] = useState(0);
 * const prevCount = usePrevious(count);
 * // On the next render after `setCount`, `prevCount` will be the old `count`.
 * ```
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
