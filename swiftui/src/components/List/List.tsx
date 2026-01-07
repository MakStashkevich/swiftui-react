import React from 'react';
import { ListProps } from './types';
import styles from './styles';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';
import { sx } from '../../utils/stylex';
import { Section } from '../Section';

const wrapChildrenInSections = (children: React.ReactNode) => {
  const childrenArray = React.Children.toArray(children);
  const newChildren: React.ReactNode[] = [];
  let currentGroup: React.ReactNode[] = [];

  childrenArray.forEach((child) => {
    if (React.isValidElement(child) && (child.type as any).name === 'Section') {
      if (currentGroup.length > 0) {
        newChildren.push(<Section>{currentGroup}</Section>);
        currentGroup = [];
      }
      newChildren.push(child);
    } else {
      currentGroup.push(child);
    }
  });

  if (currentGroup.length > 0) {
    newChildren.push(<Section>{currentGroup}</Section>);
  }

  return newChildren;
};

export const List: React.FC<ListProps> = ({
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
  listStyle = 'automatic',
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

  if (listStyle === 'automatic') {
    listStyle = 'insetGrouped'; // default for iOS 15+
  }
  // todo: add listStyles - inset, plain, grouped, sidebar

  return (
    <div {...sx(styles.container)} style={{ ...style, ...modifierStyles }}>
      {wrapChildrenInSections(children)}
    </div>
  );
};
