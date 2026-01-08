import { MouseEventHandler, PropsWithChildren } from 'react';

export type NavigationLinkProps = {
  id?: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
} & PropsWithChildren;

export type NavigationLinkHightlightProps = {
  id: number;
}
