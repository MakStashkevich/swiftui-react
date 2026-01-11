import React, { useRef } from 'react';
import styles from './styles.stylex';

import { sx } from '../../utils/stylex';
import { NavigationLinkHightlightProps, NavigationLinkProps } from './types';
import ChevronIcon from '../../icons/ChevronIcon';
import { isNavigationViewContext, useNavigationViewContext } from '../../utils/context/NavigationViewContext';
import { Text } from '../Text';
import { usePrevious } from '../../hooks/usePrevious';
import { useInteraction } from '../../hooks/useInteraction';
import { useMounted } from '../../hooks/useMounted';

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  _id: linkId,
  onClick,
  label,
}) => {
  if (
    !isNavigationViewContext() ||
    (linkId === undefined)
  ) {
    return label;
  }

  const { setPressedItem } = useNavigationViewContext();
  const divRef = useRef<HTMLDivElement>(null);

  const handleOnClick = (event: any) => {
    if (onClick) onClick(event);
  }

  const onInteract = (value: boolean) => {
    setPressedItem(linkId, value);
  }

  useInteraction({ divRef, onInteract });

  return (
    <div
      ref={divRef}
      onClick={handleOnClick}
      {...sx(styles.container)}
    >
      {typeof label === 'string' ? (
        <Text>{label}</Text>
      ) : label}
    </div>
  );
};

export const NavigationLinkHightlight: React.FC<NavigationLinkHightlightProps> = ({
  id
}) => {
  if (!isNavigationViewContext()) return null;

  const { pressedItemId } = useNavigationViewContext();
  const isMounted = useMounted();
  const isPressed = pressedItemId === id;
  const wasPressed = usePrevious(isPressed);

  const highlightBackground = () => {
    // Don't show any animation on initial mount
    if (!isMounted) {
      return null;
    }
    // Show solid color when pressed
    if (isPressed) {
      return styles.highlightPressed;
    }
    // Play fade-out animation only when it was just released
    if (!isPressed && wasPressed) {
      return styles.highlightUnpressed;
    }
    // Otherwise, no background
    return null;
  };

  return <div {...sx(styles.highlight, highlightBackground())} />;
}

export const NavigationLinkChevron: React.FC = () => {
  if (!isNavigationViewContext()) return;

  return (
    <ChevronIcon {...sx(styles.chevron)} />
  )
}