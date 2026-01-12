import React, { useRef } from 'react';
import { ButtonProps } from './types';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';
import { Image } from '../Image';
import { sx } from '../../utils/stylex';
import * as stylex from '@stylexjs/stylex';
import styles from './styles';
import { prepareTextComponent } from '../../utils/text';
import { useInteraction } from '../../hooks/useInteraction';
import { useMounted } from '../../hooks/useMounted';
import { useBinding } from '../../hooks/useBinding';
import { usePrevious } from '../../hooks/usePrevious';
import { textBlockSpacingDefaultZero, textColorDefaultAccent, textColorDefaultDestructive, textColorDefaultSubtitle, textColorDefaultWhite } from '../../utils/stylex/themes';
import { getBackgroundColor } from '../../utils/colors';

export const Button: React.FC<ButtonProps> = ({
  title,
  systemImage,
  role,
  action,
  children,
  style,
  // Modifiers
  frame,
  padding,
  border,
  cornerRadius,
  shadow,
  scaleEffect,
  rotationEffect,
  opacity,
  disabled,
  hidden,
  buttonStyle = 'automatic',
  background,
  tint,
  // ... другие модификаторы
}) => {
  const modifierStyles: React.CSSProperties = {
    ...getFrame(frame),
    ...getPadding(padding),
    ...getBorder(border),
    ...getCornerRadius(cornerRadius),
    ...getShadow(shadow),
    ...getTransform(scaleEffect, rotationEffect),
    ...(opacity !== undefined && { opacity }),
    ...(hidden && { display: 'none' }),
    ...(!disabled && getBackgroundColor(background ?? tint)),
    // ... другие стили модификаторов
  };

  if (buttonStyle === 'automatic') {
    buttonStyle = 'borderless'; // default on iOS 15
  }

  const buttonRef = useRef<HTMLButtonElement>(null);
  const isMounted = useMounted();
  const isPressed = useBinding(false);
  const wasPressed = usePrevious(isPressed);

  const handleOnClick = (event: any) => {
    if (action) action(event);
  }

  const onInteract = (value: boolean) => {
    isPressed.setValue(value);
  }

  useInteraction({ ref: buttonRef, onInteract });

  const buttonHighlight = () => {
    // Don't show any animation on initial mount
    if (!isMounted) {
      return null;
    }
    // Show when pressed
    if (isPressed.value) {
      return (
        (buttonStyle === 'borderless' && styles.pressedBorderless) ||
        (buttonStyle === 'borderedProminent' && styles.pressedBorderedProminent) ||
        (buttonStyle === 'bordered' && styles.pressedBorderedProminent) ||
        (buttonStyle === 'plain' && styles.pressedPlain)
      );
    }
    // Play only when it was just released
    if (!isPressed.value && wasPressed) {
      return styles.unpressed;
    }
    // Otherwise, no background
    return null;
  };

  const buttonTextColor = () => {
    if (disabled) {
      return textColorDefaultSubtitle;
    }
    if (role === 'destructive') {
      return textColorDefaultDestructive;
    } else { // role: cancel as default
      if (buttonStyle === 'borderedProminent') {
        return textColorDefaultWhite;
      } else if (buttonStyle !== 'plain') {
        return textColorDefaultAccent;
      }
    }
    return null; // use default text color
  }

  const buttonBgColor = () => {
    if (role === 'destructive') {
      return buttonStyle === 'borderedProminent' ? styles.destructiveBg : null;
    } else { // role: cancel as default
      if (buttonStyle === 'borderedProminent') {
        return stylex.props(disabled ? styles.disabledBg : styles.borderedProminent, styles.borderPadding);
      } else if (buttonStyle === 'bordered') {
        return stylex.props(disabled ? styles.disabledBg : styles.bordered, styles.borderPadding);
      }
    }
    return null; // use default text color
  }

  const preparedTextComponent = prepareTextComponent(title);
  const titleComponent = preparedTextComponent ?? children;
  return (
    <button
      ref={buttonRef}
      {...sx(
        styles.container,
        textBlockSpacingDefaultZero,
        buttonHighlight(),
        buttonTextColor(),
        buttonBgColor(),
        disabled ? styles.disabledCursor : styles.activeCursor,
      )}
      onClick={handleOnClick}
      style={{ ...style, ...modifierStyles }}
      disabled={disabled}
    >
      {systemImage && <Image systemName={systemImage} />}
      {titleComponent}
    </button>
  );
};