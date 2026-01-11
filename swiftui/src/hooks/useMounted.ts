import { useState, useEffect } from 'react';

/**
 * A hook that returns a boolean value indicating whether the component has mounted.
 * This is useful for avoiding state updates on unmounted components or for client-side only rendering.
 *
 * @returns {boolean} `true` if the component is mounted, `false` otherwise.
 *
 * @example
 * ```
 * const YourComponent = () => {
 *   const isMounted = useMounted();
 *
 *   useEffect(() => {
 *     if (isMounted) {
 *       // This will only run when the component is mounted
 *       console.log('Component has mounted');
 *     }
 *   }, [isMounted]);
 *
 *   return (
 *     <div>
 *       {isMounted ? 'Component is mounted' : 'Component is not mounted'}
 *     </div>
 *   );
 * };
 * ```
 */
export function useMounted() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}
