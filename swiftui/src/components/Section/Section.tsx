import React, { useId } from 'react';
import { SectionProps } from './types';
import styles from './styles.stylex';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';
import { sx } from '../../utils/stylex';
import { fontHeightDefaultSubtitle, fontSizeDefaultSubtitle, textColorDefaultSubtitle, fontLetterSpacingDefaultSubtitle } from '../../utils/stylex/themes';
import { sxChild } from '../../utils/stylex/children';
import { isListContext } from '../../utils/context/ListContext';
import { NavigationLinkChevron, NavigationLinkHightlight } from '../NavigationLink/NavigationLink';
import { isNavigationViewContext } from '../../utils/context/NavigationViewContext';

export const Section: React.FC<SectionProps> = ({
  children,
  header,
  footer,
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
  // ... другие модификаторы
}) => {
  // use Section only on List context
  if (!isListContext()) {
    return children;
  }

  const isNavigationView = isNavigationViewContext();

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
    <section {...sx(styles.container, className)} style={{ ...style, ...modifierStyles }}>
      <div {...sx(styles.header, textColorDefaultSubtitle, fontSizeDefaultSubtitle, fontHeightDefaultSubtitle, fontLetterSpacingDefaultSubtitle)}>{header}</div>
      <div {...sx(styles.content)}>
        {
          sxChild(children)
            .render((child, i, len) => {
              return (
                <SectionRow
                  key={i}
                  child={child}
                  isNavigationView={isNavigationView}
                  isLast={i + 1 >= len}
                />
              );
            })
        }
      </div>
      <div {...sx(styles.footer, textColorDefaultSubtitle, fontSizeDefaultSubtitle, fontHeightDefaultSubtitle, fontLetterSpacingDefaultSubtitle)}>{footer}</div>
    </section>
  );
};

interface SectionRowProps {
  child: React.ReactNode;
  isNavigationView: boolean;
  isLast: boolean;
}

const SectionRow: React.FC<SectionRowProps> = ({ child, isNavigationView, isLast }) => {
  const id = useId();
  let icon: React.ReactNode = null;
  let content: React.ReactNode = child;
  let isNavigationLink: boolean = false;

  if (React.isValidElement(child)) {
    const childWithId = React.cloneElement(child, { ...(child.props || {}), _id: id } as any);
    content = childWithId;

    const childType = child.type as any;
    if (childType.name === 'HStack' || childType.displayName === 'HStack') {
      const childrenArray = React.Children.toArray((child as React.ReactElement<any>).props.children);
      if (childrenArray.length > 0) {
        const firstChild = childrenArray[0];
        if (React.isValidElement(firstChild) && typeof firstChild.type !== 'string') {
          const type = firstChild.type as any;
          if (type.name === 'Image' || type.displayName === 'Image') {
            icon = firstChild;
            const restChildren = childrenArray.slice(1);
            content = React.cloneElement(
              childWithId,
              { ...(childWithId.props || {}) },
              ...restChildren
            );
          }
        }
      }
    } else if (childType.name === 'NavigationLink' || childType.displayName === 'NavigationLink') {
      isNavigationLink = true;
    }
  }

  const rowStyle = !isLast ? styles.contentChildrenAll : styles.contentChildrenLast;
  return (
    <div {...sx(styles.row, rowStyle as any)}>
      <div {...sx(styles.rowLine)}>
        {/* Icon */}
        {icon && (
          <div {...sx(styles.cellImage)}>
            {icon}
          </div>
        )}
        {/* Text & shevron */}
        <div {...sx(styles.separator, (icon ? styles.separatorAfterIcon : null))}>
          <div {...sx(styles.block)}>
            {/* body */}
            {content}
            {isNavigationView && isNavigationLink && (
              <NavigationLinkChevron />
            )}
          </div>
        </div>
        {isNavigationView && isNavigationLink && (
          <NavigationLinkHightlight id={id} />
        )}
      </div>
    </div>
  );
}
