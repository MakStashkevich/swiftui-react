import React from 'react';

export type Rotation = { degrees?: number; radians?: number };

export const getTransform = (scaleEffect?: number, rotationEffect?: Rotation): React.CSSProperties | null => {
  if (!scaleEffect && !rotationEffect) return null;

  let rotate = '0deg';
  let scale = scaleEffect !== undefined ? scaleEffect : 1;
  if (rotationEffect?.degrees !== undefined) {
    rotate = `${Math.round(rotationEffect.degrees)}deg`;
  } else if (rotationEffect?.radians !== undefined) {
    rotate = `${rotationEffect.radians}rad`;
  }

  return {
    transform: `rotate(${rotate}) scale(${scale})`,
  };
};