import { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';

export type NavigationViewProps = {
  title?: string;
  subtitle?: string;
  onBack?: MouseEventHandler<HTMLDivElement>;
  leading?: ReactNode; // left item
  trailing?: ReactNode; // right item
  titleDisplayMode?: 'automatic' | 'inline' | 'large';
  titleDisplayHidden?: boolean;
  backTitle?: string;
} & PropsWithChildren;