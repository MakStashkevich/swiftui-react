import React from 'react';
import {
  ShapeProps,
  RectangleProps,
  RoundedRectangleProps,
  UnevenRoundedRectangleProps,
  CircleProps,
  CapsuleProps,
  EllipseProps,
} from './types';
import './Shape.style.css';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';
import { getBackgroundColor } from '../../utils/colors';

const BaseShape: React.FC<ShapeProps> = ({
  children,
  className,
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
  backgroundColor,
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
    ...getBackgroundColor(backgroundColor),
  };

  return (
    <div className={['swiftui-shape', className].filter(Boolean).join(' ')} style={{ ...style, ...modifierStyles }}>
      {children}
    </div>
  );
};

export const Rectangle: React.FC<RectangleProps> = (props) => {
  return <BaseShape {...props} />;
};

export const RoundedRectangle: React.FC<RoundedRectangleProps> = ({
  cornerRadius,
  ...props
}) => {
  return <BaseShape {...props} cornerRadius={cornerRadius} />;
};

export const UnevenRoundedRectangle: React.FC<UnevenRoundedRectangleProps> = ({
  cornerRadii,
  ...props
}) => {
  return (
    <BaseShape
      {...props}
      cornerRadius={{
        topLeft: cornerRadii?.topLeading,
        topRight: cornerRadii?.topTrailing,
        bottomLeft: cornerRadii?.bottomLeading,
        bottomRight: cornerRadii?.bottomTrailing,
      }}
    />
  );
};

export const Circle: React.FC<CircleProps> = (props) => {
  return <BaseShape {...props} style={{ ...props.style, borderRadius: '50%' }} />;
};

export const Capsule: React.FC<CapsuleProps> = (props) => {
  return <BaseShape {...props} style={{ ...props.style, borderRadius: '9999px' }} />;
};

export const Ellipse: React.FC<EllipseProps> = (props) => {
  return <BaseShape {...props} style={{ ...props.style, borderRadius: '50%' }} />;
};