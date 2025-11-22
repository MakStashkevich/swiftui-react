import React, { useState, useRef, useLayoutEffect } from 'react';
import { GeometryReaderProps, GeometryProxy } from './types';
import './GeometryReader.style.css';
import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';

export const GeometryReader: React.FC<GeometryReaderProps> = ({
  children,
  style,
  // Modifiers
  frame: frameModifier, // Переименовал, чтобы избежать конфликта с локальным состоянием
  padding,
  border,
  cornerRadius,
  shadow,
  scaleEffect,
  rotationEffect,
  opacity,
  hidden,
  // ... другие модификаторы
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<GeometryProxy>({
    frame: {
      x: 0,
      y: 0,
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
      midX: 0,
      midY: 0,
    },
    size: {
      width: 0,
      height: 0,
    },
  });

  useLayoutEffect(() => {
    const updateLayout = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setLayout({
          frame: {
            x: rect.x,
            y: rect.y,
            minX: rect.x,
            minY: rect.y,
            maxX: rect.x + rect.width,
            maxY: rect.y + rect.height,
            midX: rect.x + rect.width / 2,
            midY: rect.y + rect.height / 2,
          },
          size: {
            width: rect.width,
            height: rect.height,
          },
        });
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);

    return () => {
      window.removeEventListener('resize', updateLayout);
    };
  }, []);

  const modifierStyles: React.CSSProperties = {
    ...getFrame(frameModifier),
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
    <div ref={ref} className="GeometryReader" style={{ ...style, ...modifierStyles }}>
      {typeof children === 'function' ? children(layout) : children}
    </div>
  );
};