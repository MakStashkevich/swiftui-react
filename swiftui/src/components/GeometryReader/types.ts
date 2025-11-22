import { ReactNode } from 'react';
import { Modifiers } from '../../utils/modifiers';
import { NumberBinding } from '../../utils/binding';

export type GeometryProxy = {
  frame: {
    x: NumberBinding | number;
    y: NumberBinding | number;
    minX: NumberBinding | number;
    minY: NumberBinding | number;
    maxX: NumberBinding | number;
    maxY: NumberBinding | number;
    midX: NumberBinding | number;
    midY: NumberBinding | number;
  };
  size: {
    width: NumberBinding | number;
    height: NumberBinding | number;
  };
};

export type GeometryReaderProps = {
  children?: ReactNode | ((proxy: GeometryProxy) => ReactNode);
  style?: React.CSSProperties;
} & Modifiers;