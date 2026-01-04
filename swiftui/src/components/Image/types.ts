import React from 'react';
import { Modifiers } from '../../utils/modifiers';
import { IconDefinition } from '@bradleyhodges/sfsymbols-types';

type ImageStatic = {
  src: string;
  height?: number;
  width?: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
};

type SystemName = IconDefinition | ImageStatic | string;

export type ImageProps = {
  systemName?: SystemName;
  style?: React.CSSProperties;
} & Modifiers;
