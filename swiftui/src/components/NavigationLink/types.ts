import { MouseEventHandler, ReactElement } from 'react';
import { UIText } from '../../utils/text';

export type NavigationLinkProps = {
  _id?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  label: UIText;

  // todo: add multiple views logic
  destination?: ReactElement;
};

export type NavigationLinkHightlightProps = {
  id: string;
}
