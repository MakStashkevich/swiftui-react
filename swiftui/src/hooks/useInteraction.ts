
import { useEffect, useRef } from 'react';

interface UseInteractionProps {
  ref: React.RefObject<HTMLDivElement | HTMLButtonElement | null>;
  onInteract?: (isInteracting: boolean) => void;
}

/**
 * A hook that detects user interaction with a specified element.
 * It handles both mouse and touch events to determine if the user is interacting.
 *
 * @param {object} props - The properties for the hook.
 * @param {React.RefObject<HTMLDivElement | HTMLButtonElement | null>} props.ref - A ref to the div element to monitor for interactions.
 * @param {(isInteracting: boolean) => void} [props.onInteract] - An optional callback function that is called when the interaction state changes. It receives a boolean value: `true` on interaction start (mousedown/touchstart) and `true` on interaction end (mouseup/touchend).
 *
 * @example
 * ```
 * const YourComponent = () => {
 *   const divRef = useRef(null);
 *   const [isInteracting, setIsInteracting] = useState(false);
 *
 *   useInteraction({
 *     divRef,
 *     onInteract: (interacting) => {
 *       setIsInteracting(interacting);
 *       console.log(interacting ? 'User started interacting' : 'User stopped interacting');
 *     },
 *   });
 *
 *   return (
 *     <div ref={divRef} style={{ padding: '20px', border: '1px solid black' }}>
 *       {isInteracting ? 'Interacting' : 'Not Interacting'}
 *     </div>
 *   );
 * };
 * ```
 */
export const useInteraction = ({ ref, onInteract }: UseInteractionProps) => {
  const isTouchDevice = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      isTouchDevice.current = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    }

    if (!ref || !ref.current) return;
    const div = ref.current;

    const handleInteractionStart = (_: Event) => {
      if (onInteract) onInteract(true);
    };

    const handleInteractionEnd = (_: Event) => {
      if (onInteract) onInteract(false);
    };

    if (!isTouchDevice.current) {
      div.addEventListener("mousedown", handleInteractionStart);
      div.addEventListener("mouseup", handleInteractionEnd);
      div.addEventListener("mouseleave", handleInteractionEnd);
    } else {
      div.addEventListener("touchstart", handleInteractionStart);
      div.addEventListener("touchend", handleInteractionEnd);
    }

    return () => {
      if (!isTouchDevice.current) {
        div.removeEventListener("mousedown", handleInteractionStart);
        div.removeEventListener("mouseup", handleInteractionEnd);
        div.removeEventListener("mouseleave", handleInteractionEnd);
      } else {
        div.removeEventListener("touchstart", handleInteractionStart);
        div.removeEventListener("touchend", handleInteractionEnd);
      }
    };
  }, [onInteract, ref]);
};
