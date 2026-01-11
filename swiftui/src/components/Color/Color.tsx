import React from 'react';
import { ColorProps, ColorSubComponentProps, ColorView } from './types';
import styles from './styles';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';
import { sx } from '../../utils/stylex';

const ColorComponent: React.FC<ColorProps> = ({
  color,
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
    // ... другие стили модификаторов
  };

  const inlineStyle: React.CSSProperties = {
    backgroundColor: color,
    ...style,
    ...modifierStyles,
  };

  return <div className="Color" style={inlineStyle}></div>;
};

const createSubComponent = (defaultColor: string) => {
  return ({
    color,
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
    // ... другие модификаторы
  }: ColorSubComponentProps) => {
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

    const inlineStyle: React.CSSProperties = {
      backgroundColor: color || defaultColor,
      ...style,
      ...modifierStyles,
    };
    return <div {...sx(styles.container)} style={inlineStyle}></div>;
  };
};

export const Color = ColorComponent as ColorView;

Color.black = createSubComponent('black');
Color.blue = createSubComponent('blue');
Color.brown = createSubComponent('brown');
Color.clear = createSubComponent('transparent'); // 'clear' в SwiftUI обычно означает прозрачный
Color.cyan = createSubComponent('cyan');
Color.gray = createSubComponent('gray');
Color.green = createSubComponent('green');
Color.indigo = createSubComponent('indigo');
Color.mint = createSubComponent('mint');
Color.orange = createSubComponent('orange');
Color.pink = createSubComponent('pink');
Color.purple = createSubComponent('purple');
Color.red = createSubComponent('red');
Color.teal = createSubComponent('teal');
Color.white = createSubComponent('white');
Color.yellow = createSubComponent('yellow');
Color.accentColor = createSubComponent('blue'); // Заглушка, так как accentColor зависит от темы
Color.primary = createSubComponent('black'); // Заглушка
Color.secondary = createSubComponent('gray'); // Заглушка