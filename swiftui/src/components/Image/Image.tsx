import React from 'react';
import { ImageProps } from './types';
import styles from './styles';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';
import { sx } from '../../utils/stylex';
import { getForegroundColor } from '../../utils/colors';
import { getClipShape } from '../../utils/clipShape';
import { getFont } from '../../utils/fonts';

// Dynamically import SFIcon to check for its existence
let SFIcon: any = null;
try {
  SFIcon = require('@bradleyhodges/sfsymbols-react').SFIcon;
} catch (error) {
  // SFIcon is not available
}

export const Image: React.FC<ImageProps> = ({
  systemName,
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
  foregroundColor,
  clipShape,
  font,
  resizable,
  scaledToFit,
  scaledToFill,
  // ... другие модификаторы
}) => {
  const modifierStyles: React.CSSProperties = {
    ...getFrame(frame, { isImage: true, modifiers: { resizable, scaledToFit, scaledToFill } }),
    ...getPadding(padding),
    ...getBorder(border),
    ...getCornerRadius(cornerRadius),
    ...getShadow(shadow),
    ...getTransform(scaleEffect, rotationEffect),
    ...(opacity !== undefined && { opacity }),
    ...(hidden && { display: 'none' }),
    ...getFont(font),
    ...getForegroundColor(foregroundColor),
    ...getClipShape(clipShape),
    // ... другие стили модификаторов
  };

  if (!systemName) {
    return null;
  }

  // Render img if systemName is a StaticImageData-like object
  if (typeof systemName === 'object' && 'src' in systemName && typeof (systemName as any).src === 'string') {
    return (
      <img
        src={(systemName as any).src}
        alt={(systemName as any).src}
        {...sx(styles.container)}
        style={{ ...style, ...modifierStyles }}
      />
    );
  }

  // Render SFIcon if systemName is an SFIconProps object and the component is available
  if (typeof systemName === 'object' && 'iconName' in systemName && 'sourceName' in systemName && 'viewBox' in systemName && SFIcon) {
    return (
      <div {...sx(styles.container)}>
        <SFIcon icon={systemName} size={modifierStyles.fontSize ?? 17} style={{ ...style, ...modifierStyles }} />
      </div>
    );
  }

  // Render a standard img tag if systemName is a string
  if (typeof systemName === 'string') {
    return (
      <img
        src={systemName}
        alt={systemName}
        {...sx(styles.container)}
        style={{ ...style, ...modifierStyles }}
      />
    );
  }

  return null;
};
