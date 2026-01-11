import React from 'react';

type UseScrollDirectionOptions = {
  threshold?: number;
};

/**
 * A hook that tracks the vertical scroll position of the element with the root SwiftUI View.
 *
 * @param {object} [options] - Optional configuration.
 * @param {number} [options.threshold=0] - The scroll threshold. This parameter is not currently used in the hook's logic but is available for future enhancements.
 * @returns {number} The current vertical scroll position (`scrollTop`).
 *
 * @example
 * ```
 * const YourComponent = () => {
 *   const scrollTop = useScrollDirection();
 *
 *   return (
 *     <div style={{ height: '2000px' }}>
 *       <div style={{ position: 'fixed', top: 0, left: 0 }}>
 *         Scroll Top: {scrollTop}
 *       </div>
 *     </div>
 *   );
 * };
 * ```
 */
export function useScrollDirection({ threshold = 0 }: UseScrollDirectionOptions = {}) {
  const [scrollTop, setScrollTop] = React.useState<number>(0);

  React.useEffect(() => {
    const scrollElement = document.getElementById('root');
    if (!scrollElement) return;

    const handleScroll = () => {
      setScrollTop(scrollElement.scrollTop);
    };

    scrollElement.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return scrollTop;
}
