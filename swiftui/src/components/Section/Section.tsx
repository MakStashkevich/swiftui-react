import React from 'react';
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
      {header && <div {...sx(styles.header, textColorDefaultSubtitle, fontSizeDefaultSubtitle, fontHeightDefaultSubtitle, fontLetterSpacingDefaultSubtitle)}>{header}</div>}
      <div {...sx(styles.content)}>
        {
          sxChild(children)
            // .last(styles.contentChildrenLast)
            .render((child, i, len) => {
              let icon: React.ReactNode = null;
              let content: React.ReactNode = child;

              if (React.isValidElement(child)) {
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
                          child,
                          { ...(child as React.ReactElement<any>).props },
                          ...restChildren
                        );
                      }
                    }
                  }
                }
              }

              return (
                <div {...sx(styles.row, (i + 1 < len ? styles.contentChildrenAll : styles.contentChildrenLast))}>
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
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
        }
      </div>
      {footer && <div {...sx(styles.footer, textColorDefaultSubtitle, fontSizeDefaultSubtitle, fontHeightDefaultSubtitle, fontLetterSpacingDefaultSubtitle)}>{footer}</div>}
    </section>
  );
};