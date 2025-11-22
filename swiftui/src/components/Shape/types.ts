import { CSSProperties, PropsWithChildren } from 'react';
import { Modifiers } from '../../utils/modifiers';

export type ShapeCornerRadius = {
  cornerRadius?: number;
};

export type ShapeCornerRadii = {
  cornerRadii?: {
    topLeading?: number;
    topTrailing?: number;
    bottomLeading?: number;
    bottomTrailing?: number;
  };
};

export type ShapeProps = {
  className?: string;
  style?: CSSProperties;
  backgroundColor?: string;
  cornerRadius?: number | {
    topLeft?: number;
    topRight?: number;
    bottomLeft?: number;
    bottomRight?: number;
  };
} & PropsWithChildren &
  Modifiers;

export type RectangleProps = ShapeProps;
export type RoundedRectangleProps = ShapeProps & ShapeCornerRadius;
export type UnevenRoundedRectangleProps = ShapeProps & ShapeCornerRadii;
export type CircleProps = ShapeProps;
export type CapsuleProps = ShapeProps;
export type EllipseProps = ShapeProps;