import { MouseEventHandler, ReactElement } from 'react';

export type NavigationLinkProps = {
  _id?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  label: string | ReactElement;

  // todo: add multiple views logic
  destination?: ReactElement;
};

export type NavigationLinkHightlightProps = {
  id: string;
}
