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
            .render((child, i, len) => (
              <div {...sx(styles.row, (i + 1 < len ? styles.contentChildrenAll : styles.contentChildrenLast))}> {/* block relative */}
                <div {...sx(styles.rowLine)}> {/* flex flex-row items-center */}
                  {/* Icon */}
                  {/* Text & shevron */}
                  <div {...sx(styles.separator)}> {/* separator */}
                    <div {...sx(styles.block)}>{/* min-w-0 max-w-full flex flex-col flex-1 items-start justify-center min-h-11 py-2.5 */}
                      {/* body */}
                      {child}
                    </div>
                  </div>
                </div>
              </div>
            ))
        }
      </div>
      {footer && <div {...sx(styles.footer, textColorDefaultSubtitle, fontSizeDefaultSubtitle, fontHeightDefaultSubtitle, fontLetterSpacingDefaultSubtitle)}>{footer}</div>}
    </section>
  );
};