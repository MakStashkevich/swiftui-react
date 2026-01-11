import React, { useId, useRef } from 'react';
import { ToggleProps } from './types';
import styles from './styles';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';
import { sx } from '../../utils/stylex';
import { useBinding } from '../../hooks/useBinding';
import { useEffect } from 'react';
import { Text } from '../Text';
import { getBackgroundColor } from '../../utils/colors';

export const Toggle: React.FC<ToggleProps> = ({
  label,
  children,
  isOn,
  onChange,
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
  hidden,
  disabled,
  tint,
  // ... другие модификаторы
}) => {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const activeTimeout = React.useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);
  const touchStartTime = useRef(0);
  const [isSwiping, setIsSwiping] = React.useState(false);
  const tempIsOn = useBinding(isOn.value);
  const toggleId = useId();

  useEffect(() => {
    tempIsOn.setValue(isOn.value);
  }, [isOn.value]);

  const clearActiveTimeout = () => {
    if (activeTimeout.current) {
      clearTimeout(activeTimeout.current);
      activeTimeout.current = null;
    }
  };

  const handlePressStart = () => {
    clearActiveTimeout();
    activeTimeout.current = setTimeout(() => {
      setActive(true);
    }, 500);
  };

  const handlePressEnd = () => {
    clearActiveTimeout();
    setActive(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartTime.current = Date.now();
    setIsSwiping(false);
    handlePressStart();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchCurrentX.current = e.touches[0].clientX;
    const diff = touchStartX.current - touchCurrentX.current;
    const timeDiff = Date.now() - touchStartTime.current;
    const speed = Math.abs(diff) / timeDiff; // Скорость в пикселях/мс

    if (active && speed > 0.01 && Math.abs(diff) > 10) { // Порог скорости и расстояния для определения смахивания
      setIsSwiping(true);
      if (diff < 0) { // Свайп вправо
        tempIsOn.setValue(true);
      } else if (diff > 0) { // Свайп влево
        tempIsOn.setValue(false);
      }
    }
  };

  const handleTouchEnd = () => {
    handlePressEnd();
    if (active && isSwiping) {
      handleOnChange(tempIsOn.value);
    }
    setIsSwiping(false);
  };

  const handleOnChange = (value: boolean = false) => {
    isOn.setValue(value);
    onChange?.(value);
  }

  const modifierStyles: React.CSSProperties = {
    ...getFrame(frame),
    ...getPadding(padding),
    ...getBorder(border),
    ...getCornerRadius(cornerRadius),
    ...getShadow(shadow),
    ...getTransform(scaleEffect, rotationEffect),
    ...(opacity !== undefined && { opacity }),
    ...(hidden && { display: 'none' }),
    // ... другие стили модификаторов
  };

  return (
    <div {...sx(styles.container)} style={{ ...style, ...modifierStyles }}>
      {/* Label */}
      {label ? <Text>{label}</Text> : children}
      <div>
        <input
          {...sx(styles.input)}
          type="checkbox"
          id={toggleId}
          checked={tempIsOn.value}
          disabled={disabled}
          onChange={() => handleOnChange(!tempIsOn.value)}
        />

        <label
          htmlFor={toggleId}
          {...sx(
            styles.label,
            tempIsOn.value && (
              tint ? { style: getBackgroundColor(tint) } : styles.inputCheckedLabel
            ),
            active && styles.labelActive,
            tempIsOn.value && active && styles.inputCheckedLabelActive,
          )}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => {
            setHover(false);
            handlePressEnd();
          }}
          onMouseDown={handlePressStart}
          onMouseUp={handlePressEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <i
            {...sx(
              styles.i,
              hover && styles.labelHoverI,
              tempIsOn.value && styles.inputCheckedLabelI,
              active && styles.labelActiveI,
              tempIsOn.value && active && styles.inputCheckedLabelActiveI
            )}
          />
        </label>
      </div>
    </div>
  );
};