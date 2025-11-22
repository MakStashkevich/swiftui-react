import React, { useState } from 'react';
import { MenuProps } from './types';
import { Image } from '../Image';
import './Menu.style.css';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';

export const Menu: React.FC<MenuProps> = ({
  title,
  systemImage,
  primaryAction,
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
  hidden,
  disabled,
  // ... другие модификаторы
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handlePrimaryAction = (event: React.MouseEvent) => {
    if (primaryAction) {
      primaryAction();
    }
    // Предотвращаем закрытие меню, если есть primaryAction
    event.stopPropagation();
  };

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
    <div className="Menu" style={{ ...style, ...modifierStyles }}>
      <button className="Menu-trigger" onClick={handleToggle} disabled={disabled}>
        {systemImage && <Image systemName={systemImage} />}
        {title && <span className="Menu-title">{title}</span>}
      </button>
      {isOpen && (
        <div className="Menu-content">
          {children}
        </div>
      )}
    </div>
  );
};