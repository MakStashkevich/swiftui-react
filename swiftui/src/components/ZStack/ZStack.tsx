import React from 'react';
import { ZStackProps } from './types';
import './ZStack.style.css';

export const ZStack: React.FC<ZStackProps> = ({ alignment = 'center', children, style }) => {
  return (
    <div className="ZStack" data-alignment={alignment} style={style}>
      {children}
    </div>
  );
};
