import React, { useEffect, useRef } from 'react';
import styles from './styles.stylex';

import { sx } from '../../utils/stylex';
import { NavigationLinkHightlightProps, NavigationLinkProps } from './types';
import ChevronIcon from '../../icons/ChevronIcon';
import { isNavigationViewContext, useNavigationViewContext } from '../../utils/context/NavigationViewContext';

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  id,
  onClick,
  children,
}) => {
  if (
    !isNavigationViewContext() || 
    (id === undefined || id < 0)
  ) {
    return children;
  }
  
  const { setPressedItem } = useNavigationViewContext();
  const divRef = useRef<HTMLDivElement>(null);
  const isTouchDevice = useRef<boolean>(false);

  const onInteract = (value: boolean) => {
    setPressedItem(id, value);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      isTouchDevice.current = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    }

    const div = divRef.current;
    if (!div) return;

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
  }, [onInteract]);

  return (
    <div
      ref={divRef}
      onClick={onClick}
      {...sx(styles.container)}
    >
      {children}
    </div>
  );
};

export const NavigationLinkHightlight: React.FC<NavigationLinkHightlightProps> = ({
  id
}) => {
  if (!isNavigationViewContext()) return;

  const { pressedItemId } = useNavigationViewContext();
  // todo: check first load component & hide background
  const isPressed = pressedItemId >= 0 && pressedItemId === id;
  const highlightBackground = isPressed ? styles.highlightColor : styles.highlightFadeAnimation;
  return (
    <div {...sx(styles.highlight, highlightBackground)} />
  )
}

export const NavigationLinkChevron: React.FC = () => {
  if (!isNavigationViewContext()) return;

  return (
    <ChevronIcon {...sx(styles.chevron)} />
  )
}